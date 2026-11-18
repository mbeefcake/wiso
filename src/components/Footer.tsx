import { Mail, MapPin, Phone } from 'lucide-react';
import { COMPANY_INFO, RVS_KEERKLEP_PRODUCT, WISO_SERVICES } from '@/data/wisoData';
import { WisoLogo } from '@/components/WisoLogo';

interface FooterProps {
  onSelectService: (serviceId: string) => void;
}

export function Footer({ onSelectService }: FooterProps) {
  return (
    <footer className="bg-[#1E2224] text-white">
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-10 md:grid-cols-12">
          <div className="md:col-span-4">
            <WisoLogo />
          </div>

          <div className="md:col-span-5">
            <h3 className="font-heading text-xs font-semibold uppercase tracking-widest text-[#99CC33]">
              Diensten &amp; Producten
            </h3>
            <ul className="mt-4 grid grid-cols-1 gap-2 text-sm text-white/80 sm:grid-cols-2">
              {WISO_SERVICES.map((service) => (
                <li key={service.id}>
                  <button
                    type="button"
                    onClick={() => onSelectService(service.id)}
                    className="rounded text-left transition-colors hover:text-[#99CC33] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#99CC33]"
                  >
                    {service.title}
                  </button>
                </li>
              ))}
              <li>
                <button
                  type="button"
                  onClick={() => onSelectService(RVS_KEERKLEP_PRODUCT.id)}
                  className="rounded text-left font-medium text-[#99CC33] transition-colors hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#99CC33]"
                >
                  {RVS_KEERKLEP_PRODUCT.title} (Ø {RVS_KEERKLEP_PRODUCT.diameter})
                </button>
              </li>
            </ul>
          </div>

          <div className="md:col-span-3">
            <h3 className="font-heading text-xs font-semibold uppercase tracking-widest text-[#99CC33]">
              Contact
            </h3>
            <address className="mt-4 space-y-3 not-italic text-sm text-white/85">
              <div className="flex items-start gap-2.5">
                <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-[#99CC33]" aria-hidden="true" />
                <span>
                  {COMPANY_INFO.street}
                  <br />
                  {COMPANY_INFO.postalCode} {COMPANY_INFO.city}
                </span>
              </div>
              <div className="flex items-center gap-2.5">
                <Phone className="h-4 w-4 shrink-0 text-[#99CC33]" aria-hidden="true" />
                <a
                  href={COMPANY_INFO.phoneHref}
                  className="font-semibold text-white hover:text-[#99CC33]"
                >
                  {COMPANY_INFO.phoneDisplay}
                </a>
              </div>
              <div className="flex items-center gap-2.5">
                <Mail className="h-4 w-4 shrink-0 text-[#99CC33]" aria-hidden="true" />
                <a
                  href={`mailto:${COMPANY_INFO.email}`}
                  className="hover:text-[#99CC33]"
                >
                  {COMPANY_INFO.email}
                </a>
              </div>
            </address>
          </div>
        </div>

        <div className="mt-14 border-t border-white/10 pt-6 text-xs text-white/55">
          <p>© {new Date().getFullYear()} {COMPANY_INFO.name}</p>
        </div>
      </div>
    </footer>
  );
}
