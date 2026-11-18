import React, { useCallback, useEffect, useRef, useState } from 'react';
import {
  ArrowRight,
  CheckCircle2,
  Mail,
  MapPin,
  Phone,
  RotateCcw,
} from 'lucide-react';
import {
  COMPANY_INFO,
  RVS_KEERKLEP_PRODUCT,
  WISO_SERVICES,
} from '@/data/wisoData';
import { BlurFade } from '@/components/magicui/blur-fade';

interface BookingSectionProps {
  selectedServiceId: string;
  onServiceChange: (serviceId: string) => void;
  prefilledCity?: string;
}

const SERVICE_OPTIONS = [
  ...WISO_SERVICES.map((s) => ({ id: s.id, label: s.title })),
  {
    id: RVS_KEERKLEP_PRODUCT.id,
    label: `${RVS_KEERKLEP_PRODUCT.title} (Ø ${RVS_KEERKLEP_PRODUCT.diameter})`,
  },
];

function spokenText(node: HTMLElement): string {
  const copy = node.cloneNode(true) as HTMLElement;
  copy.querySelectorAll('[aria-hidden="true"]').forEach((n) => n.remove());
  copy.querySelectorAll('[role="img"][aria-label]').forEach((n) => {
    n.replaceWith(`${n.getAttribute('aria-label')}: `);
  });
  return (copy.textContent || '').replace(/\s+/g, ' ').trim();
}

export function BookingSection({
  selectedServiceId,
  onServiceChange,
  prefilledCity,
}: BookingSectionProps) {
  const formRef = useRef<HTMLFormElement>(null);
  const announcerRef = useRef<HTMLDivElement>(null);
  const announceTimerRef = useRef<number | null>(null);
  const announcedFieldRef = useRef<HTMLElement | null>(null);
  const dirtyStateRef = useRef(
    new WeakMap<HTMLElement, { hasInteracted: boolean; hasBlurred: boolean }>(),
  );
  const flaggedRef = useRef(new WeakSet<HTMLElement>());
  const announcedRef = useRef(new WeakSet<HTMLElement>());

  const [customerType, setCustomerType] = useState<'particulier' | 'zakelijk'>('particulier');
  const [urgency, setUrgency] = useState<'spoed' | 'regulier' | 'offerte'>('spoed');
  const [fullname, setFullname] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [address, setAddress] = useState('');
  const [notes, setNotes] = useState('');
  const [submittedPayload, setSubmittedPayload] = useState<{
    serviceLabel: string;
    customerType: string;
    urgencyLabel: string;
    fullname: string;
    phone: string;
    email: string;
    address: string;
    notes: string;
  } | null>(null);

  useEffect(() => {
    if (prefilledCity && !address.trim()) {
      setAddress((prev) => (prev.trim() ? prev : `${prefilledCity}`));
    }
  }, [prefilledCity, address]);

  const linkError = useCallback((el: HTMLElement, shown: boolean) => {
    const errorId = el.dataset.error;
    if (!errorId) return;
    const ids = (el.getAttribute('aria-describedby') || '')
      .split(/\s+/)
      .filter((id) => id && id !== errorId);
    if (shown) ids.push(errorId);
    if (ids.length) {
      el.setAttribute('aria-describedby', ids.join(' '));
    } else {
      el.removeAttribute('aria-describedby');
    }
  }, []);

  const announceError = useCallback((el: HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement) => {
    const errorId = el.dataset.error;
    if (!errorId || !announcerRef.current) return;
    const errorEl = document.getElementById(errorId);
    if (!errorEl) return;
    const labelText = el.labels?.[0] ? `${spokenText(el.labels[0])}: ` : '';
    if (announceTimerRef.current) window.clearTimeout(announceTimerRef.current);
    announcerRef.current.textContent = '';
    announcedFieldRef.current = el;
    announceTimerRef.current = window.setTimeout(() => {
      if (announcerRef.current) {
        announcerRef.current.textContent = labelText + spokenText(errorEl);
      }
    }, 500);
  }, []);

  const syncAria = useCallback(
    (el: EventTarget | null, announce = false) => {
      if (
        !(el instanceof HTMLInputElement) &&
        !(el instanceof HTMLSelectElement) &&
        !(el instanceof HTMLTextAreaElement)
      ) {
        return;
      }
      const supportsUserInvalid =
        typeof CSS !== 'undefined' &&
        typeof CSS.supports === 'function' &&
        CSS.supports('selector(:user-invalid)');

      const isInvalid = supportsUserInvalid
        ? el.matches(':user-invalid')
        : el.classList.contains('user-invalid-fallback');

      if (isInvalid) {
        if (announce && !announcedRef.current.has(el)) {
          announceError(el);
          announcedRef.current.add(el);
        }
        el.setAttribute('aria-invalid', 'true');
        linkError(el, true);
        flaggedRef.current.add(el);
      } else if (flaggedRef.current.has(el) || el.getAttribute('aria-invalid') !== 'true') {
        el.setAttribute('aria-invalid', 'false');
        linkError(el, false);
        flaggedRef.current.delete(el);
        announcedRef.current.delete(el);
        if (announcedFieldRef.current === el && announcerRef.current) {
          if (announceTimerRef.current) window.clearTimeout(announceTimerRef.current);
          announcerRef.current.textContent = '';
        }
      }
    },
    [announceError, linkError],
  );

  // Initialize aria-invalid="false" and fallback listener for browsers without :user-invalid
  useEffect(() => {
    const form = formRef.current;
    if (!form) return;

    const controls = form.querySelectorAll('input, select, textarea');
    controls.forEach((el) => {
      if (!el.hasAttribute('aria-invalid')) {
        el.setAttribute('aria-invalid', 'false');
      }
    });

    const supportsUserInvalid =
      typeof CSS !== 'undefined' &&
      typeof CSS.supports === 'function' &&
      CSS.supports('selector(:user-invalid)');

    const updateFallbackState = (
      input: HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement,
    ) => {
      const isValid = input.validity.valid;
      input.classList.toggle('user-invalid-fallback', !isValid);
      input.classList.toggle('user-valid-fallback', isValid);
    };

    const onBlur = (e: Event) => {
      const target = e.target;
      if (
        target instanceof HTMLInputElement ||
        target instanceof HTMLSelectElement ||
        target instanceof HTMLTextAreaElement
      ) {
        if (!supportsUserInvalid) {
          const state = dirtyStateRef.current.get(target) || {
            hasInteracted: false,
            hasBlurred: false,
          };
          state.hasBlurred = true;
          dirtyStateRef.current.set(target, state);
          if (state.hasInteracted) updateFallbackState(target);
        }
        syncAria(target, true);
      }
    };

    const onInput = (e: Event) => {
      const target = e.target;
      if (
        target instanceof HTMLInputElement ||
        target instanceof HTMLSelectElement ||
        target instanceof HTMLTextAreaElement
      ) {
        if (!supportsUserInvalid) {
          const state = dirtyStateRef.current.get(target) || {
            hasInteracted: false,
            hasBlurred: false,
          };
          state.hasInteracted = true;
          dirtyStateRef.current.set(target, state);
          if (state.hasBlurred) updateFallbackState(target);
        }
        if (target.hasAttribute('aria-invalid')) {
          syncAria(target, false);
        }
      }
    };

    const onChange = (e: Event) => {
      const target = e.target;
      if (
        target instanceof HTMLInputElement ||
        target instanceof HTMLSelectElement ||
        target instanceof HTMLTextAreaElement
      ) {
        if (!supportsUserInvalid) {
          const state = dirtyStateRef.current.get(target) || {
            hasInteracted: false,
            hasBlurred: false,
          };
          state.hasInteracted = true;
          state.hasBlurred = true;
          dirtyStateRef.current.set(target, state);
          updateFallbackState(target);
        }
        syncAria(target, true);
      }
    };

    const onInvalid = (e: Event) => {
      const target = e.target;
      if (
        target instanceof HTMLInputElement ||
        target instanceof HTMLSelectElement ||
        target instanceof HTMLTextAreaElement
      ) {
        if (!supportsUserInvalid) {
          dirtyStateRef.current.set(target, { hasInteracted: true, hasBlurred: true });
          updateFallbackState(target);
        }
        announcedRef.current.add(target);
        syncAria(target, false);
      }
    };

    form.addEventListener('blur', onBlur, true);
    form.addEventListener('input', onInput);
    form.addEventListener('change', onChange, true);
    form.addEventListener('invalid', onInvalid, true);

    return () => {
      form.removeEventListener('blur', onBlur, true);
      form.removeEventListener('input', onInput);
      form.removeEventListener('change', onChange, true);
      form.removeEventListener('invalid', onInvalid, true);
      if (announceTimerRef.current) window.clearTimeout(announceTimerRef.current);
    };
  }, [syncAria]);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;

    if (!form.checkValidity()) {
      const firstInvalid = form.querySelector<HTMLElement>(':invalid');
      firstInvalid?.focus();
      return;
    }

    const serviceLabel =
      SERVICE_OPTIONS.find((opt) => opt.id === selectedServiceId)?.label ??
      'Rioolreiniging en -ontstopping';
    const urgencyMap = {
      spoed: 'Spoed',
      regulier: 'Binnen enkele dagen',
      offerte: 'Prijsopgave',
    };

    setSubmittedPayload({
      serviceLabel,
      customerType: customerType === 'particulier' ? 'Particulier' : 'Zakelijk',
      urgencyLabel: urgencyMap[urgency],
      fullname: fullname.trim(),
      phone: phone.trim(),
      email: email.trim(),
      address: address.trim(),
      notes: notes.trim(),
    });
  };

  const buildMailtoHref = () => {
    if (!submittedPayload) return `mailto:${COMPANY_INFO.email}`;
    const subject = encodeURIComponent(
      `Aanvraag ${submittedPayload.serviceLabel} — ${submittedPayload.fullname}`,
    );
    const body = encodeURIComponent(
      `Beste Wiso,\n\nHierbij mijn aanvraag via de website:\n\n` +
        `Dienst / Product: ${submittedPayload.serviceLabel}\n` +
        `Opdrachtgever: ${submittedPayload.customerType}\n` +
        `Planning: ${submittedPayload.urgencyLabel}\n` +
        `Naam: ${submittedPayload.fullname}\n` +
        `Telefoon: ${submittedPayload.phone}\n` +
        `E-mail: ${submittedPayload.email}\n` +
        `Adres / Plaats: ${submittedPayload.address}\n` +
        `Toelichting: ${submittedPayload.notes || '-'}\n`,
    );
    return `mailto:${COMPANY_INFO.email}?subject=${subject}&body=${body}`;
  };

  return (
    <section
      id="aanvragen"
      className="border-t border-[#EAECE9] bg-[#F8FAF6] py-20 sm:py-28"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-12 lg:items-start lg:gap-16">
          {/* Linkerkolom: Contactinformatie */}
          <div className="lg:col-span-5">
            <BlurFade>
              <p className="text-xs font-semibold uppercase tracking-widest text-[#4D6E0A]">
                Contact
              </p>
              <h2 className="mt-2 font-heading text-3xl font-extrabold tracking-tight text-[#1E2224] sm:text-4xl">
                Dienst of offerte aanvragen
              </h2>

              <div className="mt-8 space-y-4 rounded-2xl border border-[#EAECE9] bg-white p-6 sm:p-7">
                <h3 className="font-heading text-base font-bold text-[#1E2224]">
                  {COMPANY_INFO.name}
                </h3>

                <div className="space-y-3.5 text-sm text-[#4A4D4E]">
                  <div className="flex items-start gap-3">
                    <MapPin
                      className="mt-0.5 h-4 w-4 shrink-0 text-[#4D6E0A]"
                      aria-hidden="true"
                    />
                    <div>
                      <p className="font-medium text-[#1E2224]">{COMPANY_INFO.street}</p>
                      <p>
                        {COMPANY_INFO.postalCode} {COMPANY_INFO.city}
                      </p>
                    </div>
                  </div>

                  <div className="flex items-center gap-3">
                    <Phone
                      className="h-4 w-4 shrink-0 text-[#4D6E0A]"
                      aria-hidden="true"
                    />
                    <a
                      href={COMPANY_INFO.phoneHref}
                      className="font-semibold text-[#1E2224] transition-colors hover:text-[#4D6E0A]"
                    >
                      {COMPANY_INFO.phoneDisplay}
                    </a>
                  </div>

                  <div className="flex items-center gap-3">
                    <Mail
                      className="h-4 w-4 shrink-0 text-[#4D6E0A]"
                      aria-hidden="true"
                    />
                    <a
                      href={`mailto:${COMPANY_INFO.email}`}
                      className="font-medium text-[#1E2224] transition-colors hover:text-[#4D6E0A]"
                    >
                      {COMPANY_INFO.email}
                    </a>
                  </div>
                </div>
              </div>
            </BlurFade>
          </div>

          {/* Rechterkolom: Formulier */}
          <div className="lg:col-span-7">
            <div className="rounded-2xl border border-[#EAECE9] bg-white p-6 sm:p-10">
              {/* Eén beleefde live-region voor form-validatie (modern-web-guidance: validate-input-after-interaction) */}
              <div ref={announcerRef} aria-live="polite" className="visually-hidden" />

              {submittedPayload ? (
                <div role="status" className="space-y-6 py-2">
                  <div className="inline-flex h-12 w-12 items-center justify-center rounded-xl bg-[#EAF5D3] text-[#4D6E0A]">
                    <CheckCircle2 className="h-6 w-6" aria-hidden="true" />
                  </div>
                  <div>
                    <h3 className="font-heading text-2xl font-bold text-[#1E2224]">
                      Uw aanvraag staat klaar
                    </h3>
                    <p className="mt-2 text-sm leading-relaxed text-[#4A4D4E]">
                      Verzend de ingevulde aanvraag via uw e-mailprogramma naar{' '}
                      <strong>{COMPANY_INFO.email}</strong> of bel{' '}
                      <strong>{COMPANY_INFO.phoneDisplay}</strong>.
                    </p>
                  </div>

                  <dl className="grid grid-cols-1 gap-4 rounded-xl border border-[#EAECE9] bg-[#F8FAF6] p-5 text-sm sm:grid-cols-2">
                    <div>
                      <dt className="text-xs font-medium text-[#4A4D4E]">Dienst / Product</dt>
                      <dd className="mt-0.5 font-semibold text-[#1E2224]">
                        {submittedPayload.serviceLabel}
                      </dd>
                    </div>
                    <div>
                      <dt className="text-xs font-medium text-[#4A4D4E]">Planning &amp; Klant</dt>
                      <dd className="mt-0.5 font-semibold text-[#1E2224]">
                        {submittedPayload.urgencyLabel} ({submittedPayload.customerType})
                      </dd>
                    </div>
                    <div>
                      <dt className="text-xs font-medium text-[#4A4D4E]">Naam &amp; Telefoon</dt>
                      <dd className="mt-0.5 font-medium text-[#1E2224]">
                        {submittedPayload.fullname} · {submittedPayload.phone}
                      </dd>
                    </div>
                    <div>
                      <dt className="text-xs font-medium text-[#4A4D4E]">E-mail &amp; Adres</dt>
                      <dd className="mt-0.5 font-medium text-[#1E2224]">
                        {submittedPayload.email} · {submittedPayload.address}
                      </dd>
                    </div>
                  </dl>

                  <div className="flex flex-col gap-3 sm:flex-row">
                    <a
                      href={buildMailtoHref()}
                      className="inline-flex flex-1 items-center justify-center gap-2 rounded-xl bg-[#99CC33] px-5 py-3.5 text-sm font-semibold text-[#1A200C] transition-colors hover:bg-[#84B327]"
                    >
                      <Mail className="h-4 w-4" aria-hidden="true" />
                      <span>Verstuur e-mail</span>
                    </a>
                    <a
                      href={COMPANY_INFO.phoneHref}
                      className="inline-flex items-center justify-center gap-2 rounded-xl border border-[#EAECE9] bg-white px-5 py-3.5 text-sm font-semibold text-[#1E2224] transition-colors hover:border-[#99CC33] hover:bg-[#F8FAF6]"
                    >
                      <Phone className="h-4 w-4 text-[#4D6E0A]" aria-hidden="true" />
                      <span>{COMPANY_INFO.phoneDisplay}</span>
                    </a>
                  </div>

                  <button
                    type="button"
                    onClick={() => setSubmittedPayload(null)}
                    className="inline-flex items-center gap-1.5 text-sm font-medium text-[#4D6E0A] hover:text-[#1E2224]"
                  >
                    <RotateCcw className="h-4 w-4" aria-hidden="true" />
                    <span>Gegevens aanpassen</span>
                  </button>
                </div>
              ) : (
                <form
                  ref={formRef}
                  method="POST"
                  action={`mailto:${COMPANY_INFO.email}`}
                  onSubmit={handleSubmit}
                  aria-label="Dienst of offerte aanvragen"
                  className="space-y-6"
                >
                  <div>
                    <label
                      htmlFor="service"
                      className="block text-sm font-medium text-[#1E2224]"
                    >
                      Dienst of product *
                    </label>
                    <select
                      id="service"
                      name="service"
                      required
                      value={selectedServiceId}
                      onChange={(e) => onServiceChange(e.target.value)}
                      data-error="service-error"
                      className="wiso-input mt-1.5 min-h-[48px] w-full rounded-xl border border-[#D4D8D2] bg-white px-3.5 py-2.5 text-base text-[#1E2224] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#4D6E0A]"
                    >
                      {SERVICE_OPTIONS.map((opt) => (
                        <option key={opt.id} value={opt.id}>
                          {opt.label}
                        </option>
                      ))}
                    </select>
                    <div id="service-error" className="error-msg">
                      <span role="img" aria-label="Fout">
                        ❌
                      </span>{' '}
                      Kies een dienst of product uit de lijst.
                    </div>
                  </div>

                  <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
                    <fieldset className="rounded-xl border border-[#EAECE9] bg-[#F8FAF6]/70 p-4">
                      <legend className="px-1 text-sm font-medium text-[#1E2224]">
                        Opdrachtgever
                      </legend>
                      <div className="mt-2 flex flex-wrap gap-4">
                        <div className="flex items-center gap-2">
                          <input
                            type="radio"
                            id="type-particulier"
                            name="customer_type"
                            value="particulier"
                            checked={customerType === 'particulier'}
                            onChange={() => setCustomerType('particulier')}
                            className="h-4 w-4 accent-[#4D6E0A]"
                          />
                          <label
                            htmlFor="type-particulier"
                            className="cursor-pointer text-sm text-[#1E2224]"
                          >
                            Particulier
                          </label>
                        </div>
                        <div className="flex items-center gap-2">
                          <input
                            type="radio"
                            id="type-zakelijk"
                            name="customer_type"
                            value="zakelijk"
                            checked={customerType === 'zakelijk'}
                            onChange={() => setCustomerType('zakelijk')}
                            className="h-4 w-4 accent-[#4D6E0A]"
                          />
                          <label
                            htmlFor="type-zakelijk"
                            className="cursor-pointer text-sm text-[#1E2224]"
                          >
                            Zakelijk
                          </label>
                        </div>
                      </div>
                    </fieldset>

                    <fieldset className="rounded-xl border border-[#EAECE9] bg-[#F8FAF6]/70 p-4">
                      <legend className="px-1 text-sm font-medium text-[#1E2224]">
                        Planning
                      </legend>
                      <div className="mt-2 flex flex-col gap-2">
                        <div className="flex items-center gap-2">
                          <input
                            type="radio"
                            id="urg-spoed"
                            name="urgency"
                            value="spoed"
                            checked={urgency === 'spoed'}
                            onChange={() => setUrgency('spoed')}
                            className="h-4 w-4 accent-[#4D6E0A]"
                          />
                          <label
                            htmlFor="urg-spoed"
                            className="cursor-pointer text-sm text-[#1E2224]"
                          >
                            Spoed
                          </label>
                        </div>
                        <div className="flex items-center gap-2">
                          <input
                            type="radio"
                            id="urg-regulier"
                            name="urgency"
                            value="regulier"
                            checked={urgency === 'regulier'}
                            onChange={() => setUrgency('regulier')}
                            className="h-4 w-4 accent-[#4D6E0A]"
                          />
                          <label
                            htmlFor="urg-regulier"
                            className="cursor-pointer text-sm text-[#1E2224]"
                          >
                            Binnen enkele dagen
                          </label>
                        </div>
                        <div className="flex items-center gap-2">
                          <input
                            type="radio"
                            id="urg-offerte"
                            name="urgency"
                            value="offerte"
                            checked={urgency === 'offerte'}
                            onChange={() => setUrgency('offerte')}
                            className="h-4 w-4 accent-[#4D6E0A]"
                          />
                          <label
                            htmlFor="urg-offerte"
                            className="cursor-pointer text-sm text-[#1E2224]"
                          >
                            Prijsopgave
                          </label>
                        </div>
                      </div>
                    </fieldset>
                  </div>

                  <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
                    <div>
                      <label
                        htmlFor="fullname"
                        className="block text-sm font-medium text-[#1E2224]"
                      >
                        Naam *
                      </label>
                      <input
                        type="text"
                        id="fullname"
                        name="fullname"
                        autoComplete="name"
                        enterKeyHint="next"
                        required
                        value={fullname}
                        onChange={(e) => setFullname(e.target.value)}
                        data-error="fullname-error"
                        className="wiso-input mt-1.5 min-h-[48px] w-full rounded-xl border border-[#D4D8D2] bg-white px-3.5 py-2.5 text-base text-[#1E2224] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#4D6E0A]"
                      />
                      <div id="fullname-error" className="error-msg">
                        <span role="img" aria-label="Fout">
                          ❌
                        </span>{' '}
                        Vul uw naam in.
                      </div>
                    </div>

                    <div>
                      <label
                        htmlFor="phone"
                        className="block text-sm font-medium text-[#1E2224]"
                      >
                        Telefoonnummer *
                      </label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        autoComplete="tel"
                        enterKeyHint="next"
                        required
                        value={phone}
                        onChange={(e) => setPhone(e.target.value)}
                        data-error="phone-error"
                        className="wiso-input mt-1.5 min-h-[48px] w-full rounded-xl border border-[#D4D8D2] bg-white px-3.5 py-2.5 text-base text-[#1E2224] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#4D6E0A]"
                      />
                      <div id="phone-error" className="error-msg">
                        <span role="img" aria-label="Fout">
                          ❌
                        </span>{' '}
                        Vul een geldig telefoonnummer in.
                      </div>
                    </div>
                  </div>

                  <div>
                    <label
                      htmlFor="email"
                      className="block text-sm font-medium text-[#1E2224]"
                    >
                      E-mailadres *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      autoComplete="email"
                      autoCorrect="off"
                      autoCapitalize="none"
                      spellCheck={false}
                      enterKeyHint="next"
                      required
                      data-error="email-error"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="wiso-input mt-1.5 min-h-[48px] w-full rounded-xl border border-[#D4D8D2] bg-white px-3.5 py-2.5 text-base text-[#1E2224] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#4D6E0A]"
                    />
                    <div id="email-error" className="error-msg">
                      <span role="img" aria-label="Fout">
                        ❌
                      </span>{' '}
                      Vul een geldig e-mailadres in.
                    </div>
                  </div>

                  <div>
                    <label
                      htmlFor="address"
                      className="block text-sm font-medium text-[#1E2224]"
                    >
                      Adres en woonplaats *
                    </label>
                    <textarea
                      id="address"
                      name="address"
                      rows={2}
                      autoComplete="street-address"
                      required
                      data-error="address-error"
                      value={address}
                      onChange={(e) => setAddress(e.target.value)}
                      className="wiso-input mt-1.5 min-h-[72px] w-full rounded-xl border border-[#D4D8D2] bg-white px-3.5 py-2.5 text-base text-[#1E2224] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#4D6E0A]"
                    />
                    <div id="address-error" className="error-msg">
                      <span role="img" aria-label="Fout">
                        ❌
                      </span>{' '}
                      Vul adres en woonplaats in.
                    </div>
                  </div>

                  <div>
                    <label
                      htmlFor="notes"
                      className="block text-sm font-medium text-[#1E2224]"
                    >
                      Toelichting (optioneel)
                    </label>
                    <textarea
                      id="notes"
                      name="notes"
                      rows={3}
                      value={notes}
                      onChange={(e) => setNotes(e.target.value)}
                      className="mt-1.5 min-h-[88px] w-full rounded-xl border border-[#D4D8D2] bg-white px-3.5 py-2.5 text-base text-[#1E2224] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#4D6E0A]"
                    />
                  </div>

                  <button
                    type="submit"
                    className="inline-flex w-full items-center justify-center gap-2 rounded-xl bg-[#99CC33] px-6 py-4 text-sm font-semibold text-[#1A200C] transition-colors hover:bg-[#84B327] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#1E2224] focus-visible:ring-offset-2"
                  >
                    <span>Aanvraag versturen</span>
                    <ArrowRight className="h-4 w-4" aria-hidden="true" />
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
