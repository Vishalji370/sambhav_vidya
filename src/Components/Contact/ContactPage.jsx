import React, { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { FaFacebook, FaInstagram, FaTwitter, FaGlobe } from "react-icons/fa";
import "./ContactPage.css";
import { submitToGoogleSheet } from "../../utils/submitToGoogleSheet";

export default function ContactPage() {
  const containerRef = useRef();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [submitError, setSubmitError] = useState(null);

  useEffect(() => {
    const cards = containerRef.current.querySelectorAll(".unique-contact-card");

    gsap.fromTo(
      cards,
      { y: 100, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 1.2,
        ease: "power4.out",
        clearProps: "all",
      }
    );
  }, []);

  const handleSubmit = async (e) => {
  e.preventDefault();
  if (isSubmitting) return;

  const form = e.target;

  const now = new Date();

 const data = {
  formType: "contact",
  // ISO is UTC; keep it for debugging. Use submittedAt for IST display in Sheet.
  submittedAt: now.toLocaleString("en-IN", { timeZone: "Asia/Kolkata" }),
  submittedAtIso: now.toISOString(),
  name: form.name.value,
  organization: form.organization.value,
  phone: form.phone.value,
  email: form.email.value,
  subject: form.subject.value,
  message: form.message.value,
};

  setIsSubmitting(true);
  setSubmitError(null);
  try {
    await submitToGoogleSheet(data);
    setSubmitted(true);
    form.reset();
  } catch (err) {
    setSubmitError(err instanceof Error ? err.message : "Failed to send message. Please try again.");
  } finally {
    setIsSubmitting(false);
  }
};

  return (
    <div className="unique-contact-page" ref={containerRef}>
      {/* HERO */}
      <section className="unique-contact-hero">
        <div className="hero-overlay"></div>
        <div className="hero-content">
          <h1>Connect With Sambhav Vidya</h1>
          <p>
              Get course guidance or explore partnership opportunities with our platform.
          </p>
        </div>
      </section>

      {/* CARD */}
      <section className="unique-contact-wrapper">
        <div className="unique-contact-card">

          {/* LEFT */}
          <div className="unique-contact-left">
            <h2 className="section-title">Get in Touch</h2>

            <p className="section-subtitle">
              Have questions about courses, admissions, or career path? Whether you're a student seeking guidance or an institution exploring collaboration, our team is here to assist you.
            </p>

            <div className="unique-contact-item">
            
              <div>
                <h4>Our Office</h4>
                <span>Address- Plot no 1 sector 27 
Golf course road Gurgaon.</span>
              </div>
            </div>

            <div className="unique-contact-item">
            
              <div>
                <h4>Email Support</h4>
                <span>info@sambhavvidya.com</span>
              </div>
            </div>

            <div className="unique-contact-item">
              
              <div>
                <h4>Call Us</h4>
                <span>+91 7982888743</span>
              </div>
            </div>

            {/* SOCIAL ICONS */}
            <div className="follow-section">
  <h3> Follow Us</h3>

  <p>
    Stay connected with us for updates on courses, universities,
    and education opportunities.
  </p>

  {/* SOCIAL ICONS */}
  <div className="unique-social-icons">
    <FaGlobe />
    <FaFacebook />
    <FaInstagram />
    <FaTwitter />
  </div>
</div>
          </div>

          {/* RIGHT */}
          <div className="unique-contact-right">
            <h2 className="section-title">Send Us a Message</h2>

            {!submitted ? (
              <form className="unique-contact-form" onSubmit={handleSubmit}>
                <div className="form-row">
                  <input name="name" type="text" placeholder="Your Name" required />
                  <input name="organization" type="text" placeholder="Organization / Institution (Optional)" />
                </div>

                <div className="form-row">
                  <input name="phone" type="tel" placeholder="Phone Number" required />
                  <input name="email" type="email" placeholder="Email Address" required />
                </div>

                <input name="subject" type="text" placeholder="Subject" required />
                <textarea name="message" placeholder="Write your message, inquiry, or partnership request." required></textarea>

                {submitError ? <div className="unique-contact-error">{submitError}</div> : null}

                <button className="unique-send-btn" disabled={isSubmitting} aria-disabled={isSubmitting}>
                  {isSubmitting ? "Sending..." : "Send Message"}
                </button>
              </form>
            ) : (
              <div className="unique-contact-success">
                <h3>Thanks for connecting!</h3>
                <p>We&apos;ve received your message. Our team will get back to you shortly.</p>
                <button
                  type="button"
                  className="unique-send-btn"
                  onClick={() => {
                    setSubmitted(false);
                    setSubmitError(null);
                  }}
                >
                  Send another message
                </button>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* MAP */}
      <section className="unique-map-section">
        <div className="map-container">
          <div className="map-header">
            <h2>Visit Our Office</h2>
            <p>Meet our team and learn how we help students find the right courses and universities.</p>
          </div>

         <div className="map-frame">
  <iframe
    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3507.4621422852706!2d77.08884048100472!3d28.465625813245452!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390d18d0fdd1e985%3A0x1fa938f40a8664e5!2sF13%2F2%2C%201%2C%20Sector%2027%2C%20Gurugram%2C%20Haryana%20122009!5e0!3m2!1sen!2sin!4v1774547838149!5m2!1sen!2sin"
    width="100%"
    height="100%"
    style={{ border: 0 }}
    allowFullScreen=""
    loading="lazy"
    referrerPolicy="no-referrer-when-downgrade"
    title="Google Map"
  ></iframe>
</div>
        </div>
      </section>
    </div>
  );
}