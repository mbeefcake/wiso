import { useState } from 'react';
import { ArrowRight } from 'lucide-react';
import { WISO_SERVICES, type ServiceCategory, type WisoService } from '@/data/wisoData';
import { cn } from '@/lib/utils';
import { BlurFade } from '@/components/magicui/blur-fade';
import { SafeWisoImage } from '@/components/WisoLogo';

interface ServicesSectionProps {
  onOpenDetail: (service: WisoService) => void;
  onBookService: (serviceId: string) => void;
}

const FILTERS: { id: 'all' | ServiceCategory; label: string }[] = [
  { id: 'all', label: 'Alle' },
  { id: 'ontstoppen', label: 'Ontstoppen & Reinigen' },
  { id: 'inspectie', label: 'Inspectie & Detectie' },
  { id: 'reparatie', label: 'Reparatie & Onderhoud' },
];

export function ServicesSection({ onOpenDetail, onBookService }: ServicesSectionProps) {
  const [activeFilter, setActiveFilter] = useState<'all' | ServiceCategory>('all');

  const filteredServices =
    activeFilter === 'all'
      ? WISO_SERVICES
      : WISO_SERVICES.filter((service) => service.category === activeFilter);

  return (
    <section id="diensten" className="bg-white py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <BlurFade>
          <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
            <div>
              <p className="text-xs font-semibold uppercase tracking-widest text-[#4D6E0A]">
                Diensten
              </p>
              <h2 className="mt-2 font-heading text-3xl font-extrabold tracking-tight text-[#1E2224] sm:text-4xl">
                Rioolservice voor elke situatie
              </h2>
            </div>

            <div
              role="tablist"
              aria-label="Filter diensten op categorie"
              className="flex flex-wrap gap-2"
            >
              {FILTERS.map((filter) => {
                const selected = activeFilter === filter.id;
                return (
                  <button
                    key={filter.id}
                    type="button"
                    role="tab"
                    aria-selected={selected}
                    onClick={() => setActiveFilter(filter.id)}
                    className={cn(
                      'rounded-xl px-4 py-2 text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#4D6E0A]',
                      selected
                        ? 'bg-[#1E2224] text-white'
                        : 'border border-[#EAECE9] bg-[#F8FAF6] text-[#4A4D4E] hover:border-[#99CC33] hover:text-[#1E2224]',
                    )}
                  >
                    {filter.label}
                  </button>
                );
              })}
            </div>
          </div>
        </BlurFade>

        <div className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {filteredServices.map((service) => (
            <article
              key={service.id}
              className="group flex h-full flex-col overflow-hidden rounded-2xl border border-[#EAECE9] bg-white transition-colors hover:border-[#99CC33]/70"
            >
              <div className="relative h-44 w-full overflow-hidden border-b border-[#EAECE9] bg-[#F8FAF6]">
                {service.images[0] ? (
                  <SafeWisoImage
                    src={service.images[0].url}
                    alt={service.images[0].alt}
                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                ) : null}
                {service.badge ? (
                  <span className="absolute left-3 top-3 rounded-full bg-[#1E2224]/85 px-3 py-1 text-xs font-medium text-[#99CC33] backdrop-blur-sm">
                    {service.badge}
                  </span>
                ) : null}
              </div>

              <div className="flex flex-1 flex-col justify-between p-6">
                <div>
                  <h3 className="font-heading text-lg font-bold text-[#1E2224]">
                    {service.title}
                  </h3>
                  <p className="mt-2.5 text-sm leading-relaxed text-[#4A4D4E]">
                    {service.summary}
                  </p>
                </div>

                <div className="mt-6 flex items-center gap-2.5 pt-2">
                  <button
                    type="button"
                    onClick={() => onBookService(service.id)}
                    className="inline-flex flex-1 items-center justify-center gap-1.5 rounded-xl bg-[#99CC33] px-4 py-2.5 text-sm font-semibold text-[#1A200C] transition-colors hover:bg-[#84B327] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#1E2224]"
                  >
                    <span>Aanvragen</span>
                    <ArrowRight className="h-4 w-4" aria-hidden="true" />
                  </button>
                  <button
                    type="button"
                    onClick={() => onOpenDetail(service)}
                    className="inline-flex items-center justify-center rounded-xl border border-[#EAECE9] bg-white px-4 py-2.5 text-sm font-medium text-[#1E2224] transition-colors hover:border-[#99CC33] hover:bg-[#F8FAF6] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#4D6E0A]"
                  >
                    Details
                  </button>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
