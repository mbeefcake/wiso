import { useState } from 'react';
import { ArrowRight, MapPin, Search } from 'lucide-react';
import { COMPANY_INFO, SERVICE_AREA_CITIES } from '@/data/wisoData';
import { cn } from '@/lib/utils';
import { BlurFade } from '@/components/magicui/blur-fade';
import { SafeWisoImage } from '@/components/WisoLogo';

interface ServiceAreaSectionProps {
  onSelectCityAndBook: (cityName: string) => void;
}

export function ServiceAreaSection({ onSelectCityAndBook }: ServiceAreaSectionProps) {
  const [query, setQuery] = useState('');
  const [selectedCity, setSelectedCity] = useState<string>('Haaksbergen');

  const normalizedQuery = query.trim().toLowerCase();
  const filteredCities = normalizedQuery
    ? SERVICE_AREA_CITIES.filter(
        (c) =>
          c.name.toLowerCase().includes(normalizedQuery) ||
          c.region.toLowerCase().includes(normalizedQuery),
      )
    : SERVICE_AREA_CITIES;

  return (
    <section
      id="werkgebied"
      className="border-y border-[#EAECE9] bg-[#F8FAF6] py-20 sm:py-28"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-12 lg:gap-16">
          {/* Linkerkolom: Plaats-checker */}
          <div className="lg:col-span-6">
            <BlurFade>
              <p className="text-xs font-semibold uppercase tracking-widest text-[#4D6E0A]">
                Werkgebied
              </p>
              <h2 className="mt-2 font-heading text-3xl font-extrabold tracking-tight text-[#1E2224] sm:text-4xl">
                Actief vanuit {COMPANY_INFO.city}
              </h2>
              <p className="mt-3 text-base leading-relaxed text-[#4A4D4E]">
                Dagelijks inzetbaar in Twente, de Achterhoek en de Duitse grensstreek.
              </p>

              {/* Semantisch <search> element conform modern-web-guidance forms */}
              <search className="mt-6">
                <form
                  onSubmit={(e) => {
                    e.preventDefault();
                    if (filteredCities.length > 0) {
                      setSelectedCity(filteredCities[0].name);
                    }
                  }}
                >
                  <label htmlFor="city-search" className="visually-hidden">
                    Zoek woonplaats
                  </label>
                  <div className="relative">
                    <Search
                      className="pointer-events-none absolute left-3.5 top-1/2 h-4 w-4 -translate-y-1/2 text-[#4A4D4E]"
                      aria-hidden="true"
                    />
                    <input
                      id="city-search"
                      type="search"
                      value={query}
                      onChange={(e) => {
                        const val = e.target.value;
                        setQuery(val);
                        const trimmed = val.trim().toLowerCase();
                        if (trimmed) {
                          const match = SERVICE_AREA_CITIES.find(
                            (c) =>
                              c.name.toLowerCase().startsWith(trimmed) ||
                              c.name.toLowerCase().includes(trimmed),
                          );
                          if (match) {
                            setSelectedCity(match.name);
                          }
                        }
                      }}
                      placeholder="Zoek woonplaats..."
                      className="w-full rounded-xl border border-[#D4D8D2] bg-white py-3 pl-10 pr-4 text-base text-[#1E2224] placeholder:text-[#4A4D4E]/70 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#4D6E0A]"
                    />
                  </div>
                </form>
              </search>

              {/* Alle plaatsen */}
              <div className="mt-5 flex flex-wrap gap-2">
                {filteredCities.map((city) => {
                  const active = selectedCity === city.name;
                  return (
                    <button
                      key={city.name}
                      type="button"
                      onClick={() => setSelectedCity(city.name)}
                      className={cn(
                        'inline-flex items-center gap-1.5 rounded-full border px-3 py-1.5 text-xs font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#4D6E0A]',
                        active
                          ? 'border-[#1E2224] bg-[#1E2224] text-[#99CC33]'
                          : 'border-[#EAECE9] bg-white text-[#2D3134] hover:border-[#99CC33]',
                      )}
                    >
                      <MapPin className="h-3 w-3" aria-hidden="true" />
                      <span>{city.name}</span>
                    </button>
                  );
                })}
                {filteredCities.length === 0 ? (
                  <p className="text-sm text-[#4A4D4E]">
                    Geen exacte treffer? Neem contact op — ook omliggende dorpen worden bediend.
                  </p>
                ) : null}
              </div>

              <div className="mt-7 flex flex-col justify-between gap-4 rounded-2xl border border-[#EAECE9] bg-white p-5 sm:flex-row sm:items-center">
                <p className="text-sm font-semibold text-[#1E2224]">
                  Actief in {selectedCity}
                </p>
                <button
                  type="button"
                  onClick={() => onSelectCityAndBook(selectedCity)}
                  className="inline-flex shrink-0 items-center justify-center gap-1.5 rounded-xl bg-[#99CC33] px-4 py-2.5 text-sm font-semibold text-[#1A200C] transition-colors hover:bg-[#84B327] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#1E2224]"
                >
                  <span>Aanvragen in {selectedCity}</span>
                  <ArrowRight className="h-4 w-4" aria-hidden="true" />
                </button>
              </div>
            </BlurFade>
          </div>

          {/* Rechterkolom: Werkgebiedkaart */}
          <div className="lg:col-span-6">
            <BlurFade delay={0.08}>
              <div className="flex flex-col items-center rounded-2xl border border-[#EAECE9] bg-white p-6 sm:p-8">
                <div className="overflow-hidden rounded-xl border border-[#EAECE9]">
                  <SafeWisoImage
                    src="https://www.wiso.nl/images/kaartje.jpg"
                    alt="Werkgebiedkaart Wiso: Twente, Achterhoek en Duitse grensstreek rondom Enschede en Haaksbergen"
                    className="h-auto w-full max-w-[380px] object-contain"
                  />
                </div>
                <p className="mt-4 text-xs font-medium text-[#4A4D4E]">
                  {COMPANY_INFO.street}, {COMPANY_INFO.city}
                </p>
              </div>
            </BlurFade>
          </div>
        </div>
      </div>
    </section>
  );
}
