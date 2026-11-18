import { useState } from 'react';
import { ArrowRight, Menu, Phone, X } from 'lucide-react';
import { COMPANY_INFO } from '@/data/wisoData';
import { WisoLogo } from '@/components/WisoLogo';

interface NavbarProps {
  onQuickBook: () => void;
}

const NAV_LINKS = [
  { href: '#keuzehulp', label: 'Keuzehulp' },
  { href: '#diensten', label: 'Diensten' },
  { href: '#gres-vs-pvc', label: 'Kwaliteit' },
  { href: '#producten', label: 'Keerklep' },
  { href: '#werkgebied', label: 'Werkgebied' },
  { href: '#tips', label: 'Tips' },
];

export function Navbar({ onQuickBook }: NavbarProps) {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 w-full border-b border-[#EAECE9] bg-white/95 backdrop-blur-md">
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between gap-6 px-4 sm:px-6 lg:px-8">
        <a
          href="#"
          className="rounded-lg focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#4D6E0A] focus-visible:ring-offset-2"
          aria-label="Wiso Allround ontstoppingsbedrijf - Terug naar boven"
        >
          <WisoLogo darkText />
        </a>

        <nav aria-label="Hoofdnavigatie" className="hidden items-center gap-7 lg:flex">
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="rounded px-1 py-0.5 text-sm font-medium text-[#4A4D4E] transition-colors hover:text-[#1E2224] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#4D6E0A]"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="hidden items-center gap-4 sm:flex">
          <a
            href={COMPANY_INFO.phoneHref}
            className="inline-flex items-center gap-1.5 rounded-lg px-2 py-1.5 text-sm font-medium text-[#4A4D4E] transition-colors hover:text-[#1E2224] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#4D6E0A]"
          >
            <Phone className="h-4 w-4 text-[#4D6E0A]" aria-hidden="true" />
            <span>{COMPANY_INFO.phoneDisplay}</span>
          </a>
          <button
            type="button"
            onClick={onQuickBook}
            className="inline-flex items-center gap-1.5 rounded-xl bg-[#99CC33] px-4 py-2.5 text-sm font-semibold text-[#1A200C] transition-colors hover:bg-[#84B327] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#1E2224] focus-visible:ring-offset-2"
          >
            <span>Aanvragen</span>
            <ArrowRight className="h-4 w-4" aria-hidden="true" />
          </button>
        </div>

        <button
          type="button"
          onClick={() => setMobileOpen((prev) => !prev)}
          aria-expanded={mobileOpen}
          aria-controls="mobile-nav"
          aria-label={mobileOpen ? 'Menu sluiten' : 'Menu openen'}
          className="inline-flex h-11 w-11 items-center justify-center rounded-xl border border-[#EAECE9] text-[#1E2224] lg:hidden focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#4D6E0A]"
        >
          {mobileOpen ? (
            <X className="h-5 w-5" aria-hidden="true" />
          ) : (
            <Menu className="h-5 w-5" aria-hidden="true" />
          )}
        </button>
      </div>

      {mobileOpen ? (
        <div
          id="mobile-nav"
          className="border-t border-[#EAECE9] bg-white px-4 pb-6 pt-3 lg:hidden"
        >
          <nav aria-label="Mobiele navigatie" className="flex flex-col gap-1">
            {NAV_LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setMobileOpen(false)}
                className="rounded-lg px-3 py-2.5 text-base font-medium text-[#1E2224] hover:bg-[#F8FAF6] hover:text-[#4D6E0A]"
              >
                {link.label}
              </a>
            ))}
          </nav>
          <div className="mt-4 flex flex-col gap-2.5 border-t border-[#EAECE9] pt-4">
            <a
              href={COMPANY_INFO.phoneHref}
              className="inline-flex items-center justify-center gap-2 rounded-xl border border-[#EAECE9] bg-[#F8FAF6] px-4 py-3 text-sm font-semibold text-[#1E2224]"
            >
              <Phone className="h-4 w-4 text-[#4D6E0A]" aria-hidden="true" />
              <span>{COMPANY_INFO.phoneDisplay}</span>
            </a>
            <button
              type="button"
              onClick={() => {
                setMobileOpen(false);
                onQuickBook();
              }}
              className="inline-flex w-full items-center justify-center gap-2 rounded-xl bg-[#99CC33] px-4 py-3 text-sm font-semibold text-[#1A200C] transition-colors hover:bg-[#84B327]"
            >
              <span>Aanvragen</span>
              <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </button>
          </div>
        </div>
      ) : null}
    </header>
  );
}
