import React, { useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { FaBook, FaUniversity, FaRocket } from "react-icons/fa";
import { openLookingForPopup } from "../LookingForPopup";
import "./LookingFor.css";

gsap.registerPlugin(ScrollTrigger);

const cards = [
  {
    id: "courses",
    icon: <FaBook />,
    title: "Not Sure What to Study?",
    desc: "Get AI-powered suggestions tailored to your goals and interests.",
    path: "/ai-suggest",
    type: "link",
    btnText: "Get Recommendations →",
  },
  {
    id: "colleges",
    icon: <FaUniversity />,
    title: "Compare Colleges Side by Side",
    desc: "See key differences in universities and choose the one that fits you best.",
    path: "/compare",
    type: "link",
    btnText: "Compare Now →",
  },
];

const LookingFor = () => {
  const navigate = useNavigate();
  const sectionRef = useRef<HTMLElement | null>(null);
  const headingRef = useRef<HTMLDivElement | null>(null);
  const searchRef = useRef<HTMLDivElement | null>(null);
  const cardsRef = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    if (!sectionRef.current) return;
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 78%",
          toggleActions: "restart none restart none",
        },
        defaults: { ease: "power3.out" },
      });

      tl.fromTo(headingRef.current, { y: 50, opacity: 0 }, { y: 0, opacity: 1, duration: 0.65 })
        .fromTo(
          searchRef.current,
          { y: 30, opacity: 0, scaleX: 0.92 },
          { y: 0, opacity: 1, scaleX: 1, duration: 0.55 },
          "-=0.35"
        )
        .fromTo(
          cardsRef.current,
          { y: 60, opacity: 0, scale: 0.9 },
          { y: 0, opacity: 1, scale: 1, duration: 0.55, stagger: 0.12 },
          "-=0.3"
        );
    }, sectionRef.current);

    return () => ctx.revert();
  }, []);

  const handleCard = (card: (typeof cards)[0]) => {
    if (card.type === "link" && card.path) navigate(card.path);
    else openLookingForPopup();
  };

  return (
    <section className="lf" ref={sectionRef}>
      <div className="lf__bg-pattern" />

      <div className="lf__heading-wrap" ref={headingRef}>
        <h2 className="lf__heading">
          <span>AI-Powered Tools</span> to Guide Your <br />Perfect Choice
        </h2>
      </div>

      <div className="lf__cards">
        {cards.map((card, i) => (
          <div
            key={card.id}
            ref={(el) => {
              cardsRef.current[i] = el;
            }}
            className="lf__card"
            role="button"
            tabIndex={0}
            onClick={(e) => {
              e.preventDefault();
              e.stopPropagation();
              handleCard(card);
            }}
            onKeyDown={(e) => {
              if (e.key === "Enter" || e.key === " ") {
                e.preventDefault();
                handleCard(card);
              }
            }}
          >
            <div className="lf__card-icon">{card.icon}</div>
            <div className="lf__card-glow" />
            <h3 className="lf__card-title">{card.title}</h3>
            <p className="lf__card-desc">{card.desc}</p>
            <span className="lf__card-arrow">{card.btnText}</span>
          </div>
        ))}
      </div>
    </section>
  );
};

export default LookingFor;