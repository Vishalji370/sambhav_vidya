import React, { useCallback, useEffect, useLayoutEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import "./Home/LookingFor.css";
import { submitToGoogleSheet } from "../utils/submitToGoogleSheet";

/** Same event name everywhere — dispatch to open from any page */
export const OPEN_LOOKINGFOR_POPUP = "open-lookingfor-popup";

export function openLookingForPopup() {
  window.dispatchEvent(new CustomEvent(OPEN_LOOKINGFOR_POPUP));
}

const streams = [
  "Science (PCM)",
  "Science (PCB)",
  "Commerce",
  "Arts / Humanities",
  "Vocational",
  "Other",
];
const areYouOptions = ["Student", "Parent", "Working Professional", "Fresher"];

const IconSend = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
    <line x1="22" y1="2" x2="11" y2="13" />
    <polygon points="22 2 15 22 11 13 2 9 22 2" />
  </svg>
);

const IconShield = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
    <polyline points="9 12 11 14 15 10" />
  </svg>
);

const IconUser = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
    <circle cx="12" cy="7" r="4" />
  </svg>
);

const IconPhone = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12 19.79 19.79 0 0 1 1.61 3.38 2 2 0 0 1 3.6 1.18h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.91 8.77A16 16 0 0 0 16 16.85l.91-.91a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z" />
  </svg>
);

const IconMail = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
    <polyline points="22,6 12,13 2,6" />
  </svg>
);

const IconBook = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z" />
    <path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z" />
  </svg>
);

const IconMapPin = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
    <circle cx="12" cy="10" r="3" />
  </svg>
);

const initialForm = {
  name: "",
  email: "",
  phone: "",
  education: "",
  stream: "",
  courses: "",
  state: "",
  city: "",
  areYou: "",
};

/**
 * Single global popup — mount once in App.jsx so `open-lookingfor-popup` works on every route.
 */
const LookingForPopup = () => {
  const [popup, setPopup] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState(initialForm);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState<string | null>(null);

  const overlayRef = useRef<HTMLDivElement | null>(null);
  const popupRef = useRef<HTMLDivElement | null>(null);

  const openPopup = useCallback(() => {
    setPopup(true);
    setSubmitted(false);
  }, []);

  useLayoutEffect(() => {
    if (!popup) return;
    const o = overlayRef.current;
    const p = popupRef.current;
    if (!o || !p) return;
    gsap.fromTo(o, { opacity: 0 }, { opacity: 1, duration: 0.25 });
    gsap.fromTo(
      p,
      { scale: 0.88, opacity: 0, y: 50 },
      { scale: 1, opacity: 1, y: 0, duration: 0.4, ease: "back.out(1.4)" }
    );
  }, [popup]);

  const closePopup = useCallback(() => {
    const overlay = overlayRef.current;
    const node = popupRef.current;
    if (!overlay || !node) {
      setPopup(false);
      return;
    }
    gsap.to(node, { scale: 0.9, opacity: 0, y: 40, duration: 0.25, ease: "power2.in" });
    gsap.to(overlay, { opacity: 0, duration: 0.25, onComplete: () => setPopup(false) });
  }, []);

  useEffect(() => {
    const handleExternalOpen = () => openPopup();
    window.addEventListener(OPEN_LOOKINGFOR_POPUP, handleExternalOpen);
    return () => window.removeEventListener(OPEN_LOOKINGFOR_POPUP, handleExternalOpen);
  }, [openPopup]);

  useEffect(() => {
    if (sessionStorage.getItem("lf-popup-opened")) return;
    const timer = window.setTimeout(() => {
      openPopup();
      sessionStorage.setItem("lf-popup-opened", "1");
    }, 700);
    return () => clearTimeout(timer);
  }, [openPopup]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) =>
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));

  const isFormValid =
    form.name.trim() !== "" &&
    form.phone.trim() !== "" &&
    form.email.trim() !== "" &&
    form.stream.trim() !== "" &&
    form.state.trim() !== "" &&
    form.areYou.trim() !== "";

  const handleSubmit = async (e?: React.FormEvent | React.MouseEvent) => {
    e?.preventDefault();
    if (!isFormValid || !popupRef.current) return;

    setIsSubmitting(true);
    setSubmitError(null);

    try {
      await submitToGoogleSheet({
        formType: "lookingForPopup",
        submittedAt: new Date().toISOString(),
        ...form,
      });

      gsap.fromTo(
        popupRef.current,
        { scale: 1 },
        {
          scale: 1.02,
          duration: 0.15,
          yoyo: true,
          repeat: 1,
          onComplete: () => setSubmitted(true),
        }
      );
    } catch (err) {
      setSubmitError(err instanceof Error ? err.message : "Failed to submit. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  if (!popup) return null;

  return (
    <div
      className="lf__overlay"
      ref={overlayRef}
      onClick={(e) => e.target === overlayRef.current && closePopup()}
    >
      <div className="lf__popup" ref={popupRef}>
        {!submitted ? (
          <>
            <div className="lf__popup-header">
              <button type="button" className="lf__popup-close" onClick={closePopup}>
                ✕
              </button>

              <div className="lf__popup-badge">
                <svg viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
                </svg>
                Free Guidance
              </div>

              <h3>Start Your Application Today!</h3>
              <p>Fill in your details and our experts will help you choose the right path for your future.</p>
            </div>

            <div className="lf__popup-body">
              <form className="lf__form" onSubmit={handleSubmit} style={{ paddingBottom: "4px" }}>
                <div className="lf__form-group">
                  <label>Full Name *</label>
                  <div className="lf__input-wrap">
                    <span className="lf__input-icon">
                      <IconUser />
                    </span>
                    <input
                      name="name"
                      value={form.name}
                      onChange={handleChange}
                      placeholder="Enter your full name"
                      required
                    />
                  </div>
                </div>

                <div className="lf__form-row">
                  <div className="lf__form-group">
                    <label>Phone Number *</label>
                    <div className="lf__input-wrap">
                      <span className="lf__input-icon">
                        <IconPhone />
                      </span>
                      <input
                        name="phone"
                        type="tel"
                        value={form.phone}
                        onChange={handleChange}
                        placeholder="Enter mobile number"
                        required
                      />
                    </div>
                  </div>
                  <div className="lf__form-group">
                    <label>Email Address *</label>
                    <div className="lf__input-wrap">
                      <span className="lf__input-icon">
                        <IconMail />
                      </span>
                      <input
                        name="email"
                        type="email"
                        value={form.email}
                        onChange={handleChange}
                        placeholder="Enter your email"
                        required
                      />
                    </div>
                  </div>
                </div>

                <div className="lf__form-row">
                  <div className="lf__form-group">
                    <label>Course / Program *</label>
                    <div className="lf__input-wrap">
                      <span className="lf__input-icon">
                        <IconBook />
                      </span>
                      <select name="stream" value={form.stream} onChange={handleChange} required>
                        <option value="">Choose stream</option>
                        {streams.map((s) => (
                          <option key={s} value={s}>
                            {s}
                          </option>
                        ))}
                      </select>
                    </div>
                  </div>
                  <div className="lf__form-group">
                    <label>State *</label>
                    <div className="lf__input-wrap">
                      <span className="lf__input-icon">
                        <IconMapPin />
                      </span>
                      <input name="state" value={form.state} onChange={handleChange} placeholder="Select state" required />
                    </div>
                  </div>
                </div>

                <div className="lf__form-group lf__form-group--full">
                  <label>Are You? *</label>
                  <div className="lf__chip-group">
                    {areYouOptions.map((opt) => (
                      <button
                        type="button"
                        key={opt}
                        className={`lf__chip ${form.areYou === opt ? "lf__chip--active" : ""}`}
                        onClick={() => setForm((prev) => ({ ...prev, areYou: opt }))}
                      >
                        {opt}
                      </button>
                    ))}
                  </div>
                </div>

                <div className="lf__trust-badge">
                  <div className="lf__trust-icon">
                    <IconShield />
                  </div>
                  <div className="lf__trust-text">
                    <span>Get expert guidance and complete support throughout your admission process.</span>
                  </div>
                </div>

                {submitError ? (
                  <div style={{ color: "#b42318", fontWeight: 600, fontSize: "0.9rem", marginTop: "6px" }}>
                    {submitError}
                  </div>
                ) : null}
              </form>
            </div>

            <div className="lf__popup-footer">
              <button
                type="button"
                className="lf__form-submit"
                onClick={handleSubmit}
                disabled={!isFormValid || isSubmitting}
                aria-disabled={!isFormValid || isSubmitting}
              >
                <IconSend />
                {isSubmitting ? "Submitting..." : "Submit"}
              </button>
            </div>
          </>
        ) : (
          <div className="lf__success">
            <span className="lf__success-icon">🎉</span>
            <h3>Thank You, {form.name}!</h3>
            <p>
              We&apos;ve received your details. Our career counselor will reach out to you soon on{" "}
              <strong>{form.phone}</strong>.
            </p>
            <button type="button" className="lf__form-submit" onClick={closePopup}>
              Close
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default LookingForPopup;
