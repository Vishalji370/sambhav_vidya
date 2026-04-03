import { useState, useEffect } from "react";
import { Brain, Hammer, Rocket, Star } from "lucide-react";
import "./Ouerbelive.css";

const beliefItems = [
  { icon: Brain,   text: "Make informed decisions" },
  { icon: Hammer,  text: "Build meaningful work" },
  { icon: Rocket,  text: "Grow with confidence" },
  { icon: Star,    text: "Live with dignity" },
];

export default function OurBelief() {
  const [ob_visible, setOb_visible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setOb_visible(true), 100);
    return () => clearTimeout(timer);
  }, []);

  return (
    <section
      id="our-belief-section"
      className={`ob-section ${ob_visible ? "ob-section--visible" : ""}`}
    >
      {/* Background decorative blobs */}
      <div className="ob-bg-blob ob-bg-blob--1" aria-hidden="true" />
      <div className="ob-bg-blob ob-bg-blob--2" aria-hidden="true" />

      <div className="ob-container">
        {/* LEFT: Content */}
        <div className="ob-content-side">
          <div className="ob-eyebrow">
            <span className="ob-eyebrow__dot" />
            Our Philosophy
          </div>

          <h2 className="ob-heading">
            <span className="ob-heading__line ob-heading__line--fire"> Our</span>
            <span className="ob-heading__line ob-heading__line--accent">Belief</span>
          </h2>

          <p className="ob-body-text ob-body-text--bold">
            We don't believe education should just prepare you for a job.
          </p>
          <p className="ob-body-text ob-body-text--highlight">
            We believe it should prepare you for{" "}
            <span className="ob-inline-highlight">life.</span>
          </p>
          <p className="ob-body-text ob-body-text--sub">A life where you:</p>

          <ul className="ob-belief-list">
            {beliefItems.map((item, i) => {
              const IconComponent = item.icon;
              return (
                <li
                  key={i}
                  className="ob-belief-item"
                  style={{ animationDelay: `${0.4 + i * 0.15}s` }}
                >
                  <span className="ob-belief-item__icon">
                    <IconComponent size={22} strokeWidth={2} />
                  </span>
                  <span className="ob-belief-item__text">{item.text}</span>
                  <span className="ob-belief-item__bar" />
                </li>
              );
            })}
          </ul>
        </div>

        {/* RIGHT: Animated Image Side */}
        <div className="ob-image-side">
          <div className="ob-image-frame">
            <div className="ob-image-orbit ob-image-orbit--1">
              <div className="ob-orbit-dot ob-orbit-dot--a" />
            </div>
            <div className="ob-image-orbit ob-image-orbit--2">
              <div className="ob-orbit-dot ob-orbit-dot--b" />
            </div>

            <div className="ob-image-inner">
              <img
                src="https://images.unsplash.com/photo-1523240795612-9a054b0db644?w=600&q=80"
                alt="Students learning"
                className="ob-main-image"
              />
              <div className="ob-image-overlay" />
            </div>

            {/* Floating cards */}
            <div className="ob-float-card ob-float-card--top">
           
              <span className="ob-float-card__label">Life-ready Education</span>
            </div>
            <div className="ob-float-card ob-float-card--bottom">
             
              <span className="ob-float-card__label">Beyond Degrees</span>
            </div>

            {/* Decorative corner accents */}
            <div className="ob-corner ob-corner--tl" />
            <div className="ob-corner ob-corner--br" />
          </div>
        </div>
      </div>
    </section>
  );
}
