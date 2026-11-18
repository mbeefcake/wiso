import { ArrowRight } from 'lucide-react';
import { PREVENTION_TIPS } from '@/data/wisoData';
import { BlurFade } from '@/components/magicui/blur-fade';
import { SafeWisoImage } from '@/components/WisoLogo';

interface TipsSectionProps {
  onBookMaintenance: (serviceId: string) => void;
}

export function TipsSection({ onBookMaintenance }: TipsSectionProps) {
  return (
    <section id="tips" className="bg-white py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <BlurFade>
          <div className="max-w-2xl">
            <p className="text-xs font-semibold uppercase tracking-widest text-[#4D6E0A]">
              Preventie
            </p>
            <h2 className="mt-2 font-heading text-3xl font-extrabold tracking-tight text-[#1E2224] sm:text-4xl">
              Tips voor een probleemloos riool
            </h2>
          </div>
        </BlurFade>

        <div className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
          {PREVENTION_TIPS.tips.map((tip, index) => (
            <BlurFade key={tip.title} delay={index * 0.05}>
              <article className="flex h-full flex-col rounded-2xl border border-[#EAECE9] bg-white p-6">
                <span className="inline-flex h-9 w-9 items-center justify-center rounded-lg bg-[#EAF5D3] font-heading text-sm font-bold text-[#4D6E0A]">
                  0{index + 1}
                </span>
                <h3 className="mt-5 font-heading text-lg font-bold text-[#1E2224]">
                  {tip.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-[#4A4D4E]">{tip.text}</p>
              </article>
            </BlurFade>
          ))}

          <BlurFade delay={0.15}>
            <div className="flex h-full flex-col justify-between overflow-hidden rounded-2xl border border-[#EAECE9] bg-[#F8FAF6] p-6">
              <div>
                <div className="h-32 w-full overflow-hidden rounded-xl border border-[#EAECE9]">
                  <SafeWisoImage
                    src={PREVENTION_TIPS.image.url}
                    alt={PREVENTION_TIPS.image.alt}
                    className="h-full w-full object-cover"
                  />
                </div>
                <p className="mt-4 font-heading text-base font-bold text-[#1E2224]">
                  Structureel zeker zijn?
                </p>
              </div>
              <button
                type="button"
                onClick={() => onBookMaintenance('onderhoud-contract')}
                className="mt-4 inline-flex items-center gap-1.5 text-sm font-semibold text-[#4D6E0A] transition-colors hover:text-[#1E2224] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#4D6E0A] rounded"
              >
                <span>Onderhoudscontract aanvragen</span>
                <ArrowRight className="h-4 w-4" aria-hidden="true" />
              </button>
            </div>
          </BlurFade>
        </div>
      </div>
    </section>
  );
}
