import { useState } from 'react';
import { ArrowRight, Phone } from 'lucide-react';
import { COMPANY_INFO, QUICK_PROBLEMS } from '@/data/wisoData';
import { cn } from '@/lib/utils';
import { NumberTicker } from '@/components/magicui/number-ticker';

interface HeroProps {
  onSelectService: (serviceId: string) => void;
}

export function Hero({ onSelectService }: HeroProps) {
  const [selectedProblemId, setSelectedProblemId] = useState(QUICK_PROBLEMS[0].id);
  const activeProblem =
    QUICK_PROBLEMS.find((p) => p.id === selectedProblemId) ?? QUICK_PROBLEMS[0];

  return (
    <section
      id="keuzehulp"
      className="border-b border-[#EAECE9] bg-white py-20 sm:py-28"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 items-start gap-12 lg:grid-cols-12 lg:gap-16">
          {/* Linkerkolom: Propositie & directe actie */}
          <div className="lg:col-span-6">
            <p className="text-xs font-semibold uppercase tracking-widest text-[#4D6E0A]">
              Twente · Achterhoek · Grensstreek
            </p>

            <h1 className="mt-4 font-heading text-4xl font-extrabold tracking-tight text-[#1E2224] sm:text-5xl sm:leading-[1.08]">
              Riool verstopt, lekkage of stankoverlast?{' '}
              <span className="block text-[#4D6E0A]">Vakkundig en snel opgelost.</span>
            </h1>

            <p className="mt-6 max-w-xl text-base leading-relaxed text-[#4A4D4E] sm:text-lg">
              {COMPANY_INFO.introText}
            </p>

            <div className="mt-8 flex flex-wrap items-center gap-3.5">
              <button
                type="button"
                onClick={() => onSelectService(activeProblem.recommendedServiceId)}
                className="inline-flex items-center gap-2 rounded-xl bg-[#99CC33] px-6 py-3.5 text-sm font-semibold text-[#1A200C] transition-colors hover:bg-[#84B327] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#1E2224] focus-visible:ring-offset-2"
              >
                <span>Aanvragen</span>
                <ArrowRight className="h-4 w-4" aria-hidden="true" />
              </button>

              <a
                href={COMPANY_INFO.phoneHref}
                className="inline-flex items-center gap-2 rounded-xl border border-[#EAECE9] bg-white px-5 py-3.5 text-sm font-semibold text-[#1E2224] transition-colors hover:border-[#99CC33] hover:bg-[#F8FAF6] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#4D6E0A] focus-visible:ring-offset-2"
              >
                <Phone className="h-4 w-4 text-[#4D6E0A]" aria-hidden="true" />
                <span>{COMPANY_INFO.phoneDisplay}</span>
              </a>
            </div>

            <dl className="mt-12 grid grid-cols-2 gap-x-6 gap-y-6 border-t border-[#EAECE9] pt-8 sm:grid-cols-4">
              <div>
                <dt className="text-xs font-medium text-[#4A4D4E]">Ervaring</dt>
                <dd className="mt-1 font-heading text-2xl font-bold text-[#1E2224]">
                  <NumberTicker value={25} />+ jaar
                </dd>
              </div>
              <div>
                <dt className="text-xs font-medium text-[#4A4D4E]">Garantie</dt>
                <dd className="mt-1 font-heading text-2xl font-bold text-[#4D6E0A]">
                  <NumberTicker value={5} /> jaar
                </dd>
              </div>
              <div>
                <dt className="text-xs font-medium text-[#4A4D4E]">Diameter</dt>
                <dd className="mt-1 font-heading text-2xl font-bold text-[#1E2224]">
                  32–<NumberTicker value={250} /> mm
                </dd>
              </div>
              <div>
                <dt className="text-xs font-medium text-[#4A4D4E]">Hogedruk</dt>
                <dd className="mt-1 font-heading text-2xl font-bold text-[#1E2224]">
                  <NumberTicker value={100} /> m
                </dd>
              </div>
            </dl>
          </div>

          {/* Rechterkolom: Interactieve Keuzehulp */}
          <div className="lg:col-span-6">
            <div className="rounded-2xl border border-[#EAECE9] bg-[#F8FAF6] p-6 sm:p-8">
              <h2 className="font-heading text-xl font-bold text-[#1E2224] sm:text-2xl">
                Wat is het probleem?
              </h2>

              <div
                role="radiogroup"
                aria-label="Kies uw rioolprobleem"
                className="mt-5 grid grid-cols-1 gap-2.5 sm:grid-cols-2"
              >
                {QUICK_PROBLEMS.map((problem) => {
                  const isSelected = problem.id === activeProblem.id;
                  return (
                    <button
                      key={problem.id}
                      type="button"
                      role="radio"
                      aria-checked={isSelected}
                      onClick={() => setSelectedProblemId(problem.id)}
                      className={cn(
                        'flex items-center rounded-xl border px-3.5 py-3 text-left text-sm font-medium leading-snug transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#4D6E0A]',
                        isSelected
                          ? 'border-[#4D6E0A] bg-[#EAF5D3]/75 text-[#1E2224]'
                          : 'border-[#EAECE9] bg-white text-[#2D3134] hover:border-[#99CC33]',
                      )}
                    >
                      {problem.symptom}
                    </button>
                  );
                })}
              </div>

              <div className="mt-6 rounded-xl bg-[#1E2224] p-6 text-white">
                <h3 className="font-heading text-lg font-bold text-white">
                  {activeProblem.recommendedTitle}
                </h3>

                <p className="mt-2 text-sm leading-relaxed text-white/80">
                  {activeProblem.actionSummary}
                </p>

                <button
                  type="button"
                  onClick={() => onSelectService(activeProblem.recommendedServiceId)}
                  className="mt-5 inline-flex w-full items-center justify-center gap-2 rounded-xl bg-[#99CC33] px-5 py-3 text-sm font-semibold text-[#1A200C] transition-colors hover:bg-[#84B327] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#99CC33] focus-visible:ring-offset-2 focus-visible:ring-offset-[#1E2224]"
                >
                  <span>Selecteer deze dienst</span>
                  <ArrowRight className="h-4 w-4" aria-hidden="true" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
