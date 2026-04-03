import { useEffect, useRef } from "react";
import { CheckCircle2, Lightbulb, Users, TrendingUp, ArrowRight } from "lucide-react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import "./OurPromis.css";
import { openLookingForPopup } from "../LookingForPopup";

const op_promises = [
  { icon: Lightbulb,    text: "Making learning practical and relevant" },
  { icon: CheckCircle2, text: "Providing honest guidance" },
  { icon: Users,        text: "Building a supportive growth community" },
  { icon: TrendingUp,   text: "Helping you turn potential into progress" },
];

export default function OurPromise() {
  const sectionRef   = useRef(null);
  const imageRef     = useRef(null);
  const contentRef   = useRef(null);
  const eyebrowRef   = useRef(null);
  const headingRef   = useRef(null);
  const bodyRef      = useRef(null);
  const listRef      = useRef(null);
  const ctaRef       = useRef(null);
  const orbitRef1    = useRef(null);
  const orbitRef2    = useRef(null);
  const cardTopRef   = useRef(null);
  const cardBotRef   = useRef(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const ctx = gsap.context(() => {
      // ── Master timeline triggered on scroll ──
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 75%",
          end: "bottom 20%",
          toggleActions: "play none none none",
        },
      });

      // Image side slides in from LEFT
      tl.fromTo(
        imageRef.current,
        { x: -80, opacity: 0 },
        { x: 0, opacity: 1, duration: 1, ease: "power3.out" }
      );

      // Content side slides in from RIGHT
      tl.fromTo(
        contentRef.current,
        { x: 80, opacity: 0 },
        { x: 0, opacity: 1, duration: 1, ease: "power3.out" },
        "<0.15"
      );

      // Eyebrow
      tl.fromTo(
        eyebrowRef.current,
        { y: 20, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.6, ease: "power2.out" },
        "<0.2"
      );

      // Heading letters stagger
      tl.fromTo(
        headingRef.current,
        { y: 40, opacity: 0, skewY: 3 },
        { y: 0, opacity: 1, skewY: 0, duration: 0.7, ease: "power3.out" },
        "<0.1"
      );

      // Body text
      tl.fromTo(
        bodyRef.current,
        { y: 20, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.5, ease: "power2.out" },
        "<0.15"
      );

      // Promise list items stagger
      const items = listRef.current?.querySelectorAll(".op-promise-item");
      if (items?.length) {
        tl.fromTo(
          items,
          { x: 30, opacity: 0 },
          { x: 0, opacity: 1, duration: 0.5, stagger: 0.12, ease: "power2.out" },
          "<0.1"
        );
      }

      // CTA button
      tl.fromTo(
        ctaRef.current,
        { y: 20, opacity: 0, scale: 0.95 },
        { y: 0, opacity: 1, scale: 1, duration: 0.5, ease: "back.out(1.5)" },
        "<0.2"
      );

      // Floating cards entrance
      tl.fromTo(
        [cardTopRef.current, cardBotRef.current],
        { scale: 0.7, opacity: 0 },
        { scale: 1, opacity: 1, duration: 0.6, stagger: 0.2, ease: "back.out(2)" },
        "<0.3"
      );

      // ── Continuous orbit spin ──
      gsap.to(orbitRef1.current, {
        rotation: 360,
        duration: 18,
        repeat: -1,
        ease: "none",
        transformOrigin: "center center",
      });
      gsap.to(orbitRef2.current, {
        rotation: -360,
        duration: 28,
        repeat: -1,
        ease: "none",
        transformOrigin: "center center",
      });

      // ── Floating cards bob ──
      gsap.to(cardTopRef.current, {
        y: -10,
        duration: 2,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
      });
      gsap.to(cardBotRef.current, {
        y: -10,
        duration: 2,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
        delay: 1,
      });

      // ── Parallax on image while scrolling ──
      gsap.to(imageRef.current, {
        y: -40,
        ease: "none",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top bottom",
          end: "bottom top",
          scrub: 1.5,
        },
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section id="our-promise-section" ref={sectionRef}>
      {/* BG blobs */}
      <div className="op-bg-blob op-bg-blob--1" aria-hidden="true" />
      <div className="op-bg-blob op-bg-blob--2" aria-hidden="true" />
      <div className="op-bg-stripe" aria-hidden="true" />

      <div className="op-container">

        {/* ── LEFT: Image ── */}
        <div className="op-image-side" ref={imageRef}>
          <div className="op-image-frame">
            {/* Main image */}
            <div className="op-image-inner">
              <img
                src="https://images.unsplash.com/photo-1529390079861-591de354faf5?w=600&q=80"
                alt="Students on a journey"
                className="op-main-img"
              />
              <div className="op-img-overlay" />
            </div>

            {/* Floating badge top */}
            <div className="op-float-card op-float-card--top" ref={cardTopRef}>
              <span className="op-float-card__dot" />
              <span>Honest Guidance</span>
            </div>

            {/* Floating badge bottom */}
            <div className="op-float-card op-float-card--bot" ref={cardBotRef}>
             
              <span>Your Journey Starts Here</span>
            </div>

            {/* Corner marks */}
            <div className="op-corner op-corner--tl" />
            <div className="op-corner op-corner--br" />
          </div>
        </div>

        {/* ── RIGHT: Content ── */}
        <div className="op-content-side" ref={contentRef}>

    

          <h2 className="op-heading" ref={headingRef}>
          
            <span className="op-heading__big">Promise</span>
          </h2>

          <p className="op-body" ref={bodyRef}>
            At <strong>Sambhav Vidya</strong>, we are committed to:
          </p>

          <ul className="op-promise-list" ref={listRef}>
            {op_promises.map((item, i) => {
              const Icon = item.icon;
              return (
                <li key={i} className="op-promise-item">
                  <span className="op-promise-item__icon">
                    <Icon size={20} strokeWidth={2} />
                  </span>
                  <span className="op-promise-item__text">{item.text}</span>
                  <span className="op-promise-item__bar" />
                </li>
              );
            })}
          </ul>

          {/* CTA */}
          <div className="op-cta" ref={ctaRef}>
            <button
              type="button"
              className="op-cta-btn"
              onClick={(e) => {
                e.preventDefault();
                e.stopPropagation();
                openLookingForPopup();
              }}
            >
              <span>Your Journey Starts Here</span>
              <ArrowRight size={18} strokeWidth={2.5} className="op-cta-btn__arrow" />
            </button>
          </div>

        </div>
      </div>
    </section>
  );
}
