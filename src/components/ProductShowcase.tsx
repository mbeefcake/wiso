import { ArrowRight } from 'lucide-react';
import { RVS_KEERKLEP_PRODUCT } from '@/data/wisoData';
import { BlurFade } from '@/components/magicui/blur-fade';
import { SafeWisoImage } from '@/components/WisoLogo';

interface ProductShowcaseProps {
  onOrderProduct: (serviceId: string) => void;
}

export function ProductShowcase({ onOrderProduct }: ProductShowcaseProps) {
  return (
    <section id="producten" className="bg-white py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <BlurFade>
          <div className="rounded-2xl bg-[#1E2224] p-7 text-white sm:p-10 lg:p-14">
            <div className="grid grid-cols-1 items-center gap-10 lg:grid-cols-12 lg:gap-14">
              <div className="lg:col-span-6">
                <p className="text-xs font-semibold uppercase tracking-widest text-[#99CC33]">
                  Product
                </p>

                <h2 className="mt-2 font-heading text-3xl font-extrabold tracking-tight text-white sm:text-4xl">
                  {RVS_KEERKLEP_PRODUCT.title}
                </h2>

                <div className="mt-5 flex flex-wrap gap-2">
                  <span className="rounded-lg border border-white/15 bg-white/5 px-3 py-1.5 text-xs font-medium text-[#99CC33]">
                    Ø {RVS_KEERKLEP_PRODUCT.diameter}
                  </span>
                  <span className="rounded-lg border border-white/15 bg-white/5 px-3 py-1.5 text-xs font-medium text-white/90">
                    Duurzaam RVS
                  </span>
                  <span className="rounded-lg border border-white/15 bg-white/5 px-3 py-1.5 text-xs font-medium text-white/90">
                    Prijs {RVS_KEERKLEP_PRODUCT.price.toLowerCase()}
                  </span>
                </div>

                <p className="mt-6 text-base leading-relaxed text-white/85">
                  {RVS_KEERKLEP_PRODUCT.description}
                </p>
                <p className="mt-3 text-sm leading-relaxed text-white/70">
                  {RVS_KEERKLEP_PRODUCT.replacementCaption}
                </p>

                <div className="mt-8">
                  <button
                    type="button"
                    onClick={() => onOrderProduct(RVS_KEERKLEP_PRODUCT.id)}
                    className="inline-flex items-center gap-2 rounded-xl bg-[#99CC33] px-6 py-3.5 text-sm font-semibold text-[#1A200C] transition-colors hover:bg-[#84B327] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#99CC33] focus-visible:ring-offset-2 focus-visible:ring-offset-[#1E2224]"
                  >
                    <span>Keerklep aanvragen</span>
                    <ArrowRight className="h-4 w-4" aria-hidden="true" />
                  </button>
                </div>
              </div>

              {/* 3 originele productfoto's met bijschriften */}
              <div className="lg:col-span-6">
                <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                  {RVS_KEERKLEP_PRODUCT.gallery.map((item, idx) => (
                    <figure
                      key={item.url}
                      className={`overflow-hidden rounded-xl border border-white/10 bg-white/5 p-3 ${
                        idx === 0 ? 'sm:col-span-2' : ''
                      }`}
                    >
                      <div
                        className={`overflow-hidden rounded-lg bg-white ${
                          idx === 0 ? 'h-52' : 'h-36'
                        }`}
                      >
                        <SafeWisoImage
                          src={item.url}
                          alt={item.alt}
                          className="h-full w-full bg-white object-contain p-1"
                        />
                      </div>
                      <figcaption className="mt-2.5 text-xs leading-snug text-white/80">
                        {item.caption}
                      </figcaption>
                    </figure>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </BlurFade>
      </div>
    </section>
  );
}
