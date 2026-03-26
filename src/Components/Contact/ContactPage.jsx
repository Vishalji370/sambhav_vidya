import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { FaFacebook, FaInstagram, FaTwitter, FaGlobe } from "react-icons/fa";
import "./ContactPage.css";

export default function ContactPage() {
  const containerRef = useRef();

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

  return (
    <div className="unique-contact-page" ref={containerRef}>
      {/* HERO */}
      <section className="unique-contact-hero">
        <div className="hero-overlay"></div>
        <div className="hero-content">
          <h1>Connect With Sambha Vidya</h1>
          <p>
            Empowering your learning journey with expert guidance,
            career-focused programs, and personalized support.
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
              Have questions about courses, admissions, or career paths?
              Our team is here to guide you every step of the way.
            </p>

            <div className="unique-contact-item">
              📍
              <div>
                <h4>Our Campus</h4>
                <span>Varanasi, Uttar Pradesh, India</span>
              </div>
            </div>

            <div className="unique-contact-item">
              📧
              <div>
                <h4>Email Support</h4>
                <span>support@sambhavidya.com</span>
              </div>
            </div>

            <div className="unique-contact-item">
              📞
              <div>
                <h4>Call Us</h4>
                <span>+91 9876543210</span>
              </div>
            </div>

            {/* SOCIAL ICONS */}
            <div className="unique-social-icons">
              <FaGlobe />
              <FaFacebook />
              <FaInstagram />
              <FaTwitter />
            </div>
          </div>

          {/* RIGHT */}
          <div className="unique-contact-right">
            <h2 className="section-title">Send us a message</h2>

            <form className="unique-contact-form">
              <div className="form-row">
                <input type="text" placeholder="Your Name" />
                <input type="text" placeholder="Organization (Optional)" />
              </div>

              <div className="form-row">
                <input type="tel" placeholder="Phone Number" />
                <input type="email" placeholder="Email Address" />
              </div>

              <input type="text" placeholder="Subject" />
              <textarea placeholder="Write your message..."></textarea>

              <button className="unique-send-btn">Send Message</button>
            </form>
          </div>
        </div>
      </section>

      {/* MAP */}
      <section className="unique-map-section">
        <div className="map-container">
          <div className="map-header">
            <h2>Visit Our Campus</h2>
            <p>Experience Sambha Vidya in the heart of Varanasi</p>
          </div>

          <div className="map-frame">
            <iframe
              title="map"
              src="https://www.google.com/maps/embed?pb=!1m18..."
              loading="lazy"
            ></iframe>
          </div>
        </div>
      </section>
    </div>
  );
}