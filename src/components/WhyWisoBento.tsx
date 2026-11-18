import { CheckCircle2, Clock, ShieldCheck, Wrench, XCircle } from 'lucide-react';
import { GRES_VS_PVC } from '@/data/wisoData';
import { BlurFade } from '@/components/magicui/blur-fade';
import { SafeWisoImage } from '@/components/WisoLogo';

interface WhyWisoBentoProps {
  onBookService?: (serviceId: string) => void;
}

const CORE_PROMISES = [
  {
    Icon: ShieldCheck,
    title: 'Vaste prijs vooraf',
    description:
      'Kosteloos advies en een vaste prijsopgave vooraf, zonder bijkomende kosten achteraf.',
  },
  {
    Icon: Clock,
    title: '5 jaar garantie',
    description:
      'Volledige garantie op alle uitgevoerde rioolreparaties en nieuw aangelegde leidingen.',
  },
  {
    Icon: Wrench,
    title: 'Minimale overlast',
    description:
      'Gerichte inspectie en moderne apparatuur voorkomen onnodig graaf- en breekwerk.',
  },
];

export function WhyWisoBento(_props: WhyWisoBentoProps) {
  return (
    <section
      id="gres-vs-pvc"
      className="border-y border-[#EAECE9] bg-[#F8FAF6] py-20 sm:py-28"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <BlurFade>
          <div className="max-w-2xl">
            <p className="text-xs font-semibold uppercase tracking-widest text-[#4D6E0A]">
              Kwaliteit &amp; Garantie
            </p>
            <h2 className="mt-2 font-heading text-3xl font-extrabold tracking-tight text-[#1E2224] sm:text-4xl">
              Heldere afspraken en duurzaam vakmanschap
            </h2>
          </div>
        </BlurFade>

        <BlurFade delay={0.06}>
          <div className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-3">
            {CORE_PROMISES.map(({ Icon, title, description }) => (
              <div
                key={title}
                className="rounded-2xl border border-[#EAECE9] bg-white p-7"
              >
                <div className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-[#EAF5D3] text-[#4D6E0A]">
                  <Icon className="h-5 w-5" aria-hidden="true" />
                </div>
                <h3 className="mt-5 font-heading text-lg font-bold text-[#1E2224]">
                  {title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-[#4A4D4E]">
                  {description}
                </p>
              </div>
            ))}
          </div>
        </BlurFade>

        {/* Gres vs Moderne PVC Vergelijking */}
        <BlurFade delay={0.12}>
          <div className="mt-10 grid grid-cols-1 gap-6 lg:grid-cols-2">
            {/* Oude Gres leiding */}
            <div className="rounded-2xl border border-[#EAECE9] bg-white p-6 sm:p-8">
              <div className="flex flex-col gap-6 sm:flex-row sm:items-center">
                <div className="h-36 w-full shrink-0 overflow-hidden rounded-xl border border-[#EAECE9] sm:w-44">
                  <SafeWisoImage
                    src={GRES_VS_PVC.gresImage.url}
                    alt={GRES_VS_PVC.gresImage.alt}
                    className="h-full w-full object-cover"
                  />
                </div>
                <div>
                  <h3 className="font-heading text-lg font-bold text-[#1E2224]">
                    {GRES_VS_PVC.gresTitle}
                  </h3>
                  <ul className="mt-3 space-y-2.5">
                    {GRES_VS_PVC.gresPoints.map((pt, idx) => (
                      <li
                        key={idx}
                        className="flex items-start gap-2.5 text-sm leading-relaxed text-[#4A4D4E]"
                      >
                        <XCircle
                          className="mt-0.5 h-4 w-4 shrink-0 text-red-600"
                          aria-hidden="true"
                        />
                        <span>{pt}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>

            {/* Moderne PVC rioleringsbuis */}
            <div className="rounded-2xl border border-[#99CC33]/60 bg-white p-6 sm:p-8">
              <div className="flex flex-col gap-6 sm:flex-row sm:items-center">
                <div className="h-36 w-full shrink-0 overflow-hidden rounded-xl border border-[#EAECE9] sm:w-44">
                  <SafeWisoImage
                    src={GRES_VS_PVC.pvcImage.url}
                    alt={GRES_VS_PVC.pvcImage.alt}
                    className="h-full w-full object-cover"
                  />
                </div>
                <div>
                  <h3 className="font-heading text-lg font-bold text-[#1E2224]">
                    {GRES_VS_PVC.pvcTitle}
                  </h3>
                  <ul className="mt-3 space-y-2.5">
                    {GRES_VS_PVC.pvcPoints.map((pt, idx) => (
                      <li
                        key={idx}
                        className="flex items-start gap-2.5 text-sm leading-relaxed text-[#1E2224]"
                      >
                        <CheckCircle2
                          className="mt-0.5 h-4 w-4 shrink-0 text-[#4D6E0A]"
                          aria-hidden="true"
                        />
                        <span>{pt}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </BlurFade>
      </div>
    </section>
  );
}
