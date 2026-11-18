import { useEffect, useRef } from 'react';
import { ArrowRight, CheckCircle2, Phone, X } from 'lucide-react';
import { COMPANY_INFO, type WisoService } from '@/data/wisoData';
import { SafeWisoImage } from '@/components/WisoLogo';

interface ServiceModalProps {
  service: WisoService | null;
  onClose: () => void;
  onBookService: (serviceId: string) => void;
}

export function ServiceModal({ service, onClose, onBookService }: ServiceModalProps) {
  const dialogRef = useRef<HTMLDialogElement>(null);

  useEffect(() => {
    const dialog = dialogRef.current;
    if (!dialog) return;

    if (service) {
      if (!dialog.open) {
        dialog.showModal();
      }
    } else if (dialog.open) {
      dialog.close();
    }
  }, [service]);

  useEffect(() => {
    const dialog = dialogRef.current;
    if (!dialog) return;

    const handleClose = () => {
      onClose();
    };

    dialog.addEventListener('close', handleClose);
    return () => dialog.removeEventListener('close', handleClose);
  }, [onClose]);

  // Fallback for browsers without <dialog closedby="any"> support (modern-web-guidance: light-dismiss-a-dialog & dialog)
  useEffect(() => {
    const dialog = dialogRef.current;
    if (!dialog) return;
    if ('closedBy' in HTMLDialogElement.prototype) return;

    const isOutside = (e: PointerEvent) => {
      const r = dialog.getBoundingClientRect();
      return (
        e.clientX < r.left ||
        e.clientX > r.right ||
        e.clientY < r.top ||
        e.clientY > r.bottom
      );
    };

    let pressedOutside = false;
    const onPointerDown = (e: PointerEvent) => {
      pressedOutside = isOutside(e);
    };
    const onPointerUp = (e: PointerEvent) => {
      if (pressedOutside && isOutside(e)) {
        dialog.close();
      }
      pressedOutside = false;
    };

    dialog.addEventListener('pointerdown', onPointerDown);
    dialog.addEventListener('pointerup', onPointerUp);
    return () => {
      dialog.removeEventListener('pointerdown', onPointerDown);
      dialog.removeEventListener('pointerup', onPointerUp);
    };
  }, []);

  return (
    <dialog
      ref={dialogRef}
      {...({ closedby: 'any' } as Record<string, string>)}
      aria-labelledby="service-modal-title"
      className="w-[calc(100%-2rem)] max-w-2xl rounded-2xl border border-[#EAECE9] bg-white p-0 text-[#2D3134] shadow-2xl"
    >
      {service ? (
        <div className="flex flex-col">
          <div className="flex items-start justify-between gap-4 border-b border-[#EAECE9] bg-[#F8FAF6] px-6 py-6 sm:px-8">
            <div>
              <p className="text-xs font-semibold uppercase tracking-widest text-[#4D6E0A]">
                {service.categoryLabel}
              </p>
              <h2
                id="service-modal-title"
                className="mt-1.5 font-heading text-2xl font-extrabold text-[#1E2224]"
              >
                {service.title}
              </h2>
            </div>

            <button
              type="button"
              onClick={() => dialogRef.current?.close()}
              aria-label="Sluit venster"
              className="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-[#EAECE9] bg-white text-[#1E2224] transition-colors hover:bg-[#1E2224] hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#4D6E0A]"
            >
              <X className="h-5 w-5" aria-hidden="true" />
            </button>
          </div>

          <div className="max-h-[70vh] overflow-y-auto px-6 py-6 sm:px-8 sm:py-7">
            {service.images.length > 0 ? (
              <div
                className={`mb-6 grid gap-3 ${
                  service.images.length > 1 ? 'grid-cols-1 sm:grid-cols-2' : 'grid-cols-1'
                }`}
              >
                {service.images.map((img) => (
                  <div
                    key={img.url}
                    className="overflow-hidden rounded-xl border border-[#EAECE9] bg-[#F8FAF6]"
                  >
                    <SafeWisoImage
                      src={img.url}
                      alt={img.alt}
                      className="h-44 w-full object-cover"
                    />
                  </div>
                ))}
              </div>
            ) : null}

            <div className="space-y-4 text-sm leading-relaxed text-[#4A4D4E] sm:text-base">
              {service.paragraphs.map((p, idx) => (
                <p key={idx}>{p}</p>
              ))}
            </div>

            {service.bullets.length > 0 ? (
              <div className="mt-6 rounded-xl border border-[#EAECE9] bg-[#F8FAF6] p-5">
                {service.bulletLeadIn ? (
                  <p className="mb-3 text-sm font-semibold text-[#1E2224]">
                    {service.bulletLeadIn}
                  </p>
                ) : null}
                <ul className="space-y-2.5">
                  {service.bullets.map((bullet, idx) => (
                    <li
                      key={idx}
                      className="flex items-start gap-2.5 text-sm text-[#1E2224]"
                    >
                      <CheckCircle2
                        className="mt-0.5 h-4 w-4 shrink-0 text-[#4D6E0A]"
                        aria-hidden="true"
                      />
                      <span>{bullet}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ) : null}
          </div>

          <div className="flex flex-col gap-3 border-t border-[#EAECE9] bg-white px-6 py-5 sm:flex-row sm:items-center sm:justify-between sm:px-8">
            <a
              href={COMPANY_INFO.phoneHref}
              className="inline-flex items-center justify-center gap-2 rounded-xl border border-[#EAECE9] px-4 py-3 text-sm font-semibold text-[#1E2224] transition-colors hover:border-[#99CC33] hover:bg-[#F8FAF6]"
            >
              <Phone className="h-4 w-4 text-[#4D6E0A]" aria-hidden="true" />
              <span>{COMPANY_INFO.phoneDisplay}</span>
            </a>

            <button
              type="button"
              autoFocus
              onClick={() => {
                const targetId = service.id;
                dialogRef.current?.close();
                onBookService(targetId);
              }}
              className="inline-flex items-center justify-center gap-2 rounded-xl bg-[#99CC33] px-6 py-3 text-sm font-semibold text-[#1A200C] transition-colors hover:bg-[#84B327] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#1E2224]"
            >
              <span>{service.ctaLabel}</span>
              <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </button>
          </div>
        </div>
      ) : null}
    </dialog>
  );
}
