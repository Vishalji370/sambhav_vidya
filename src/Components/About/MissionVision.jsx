import React, { useEffect, useRef } from "react";
import "./MissionVision.css";

import missionImg from "../../assets/images/img1.png";
import visionImg from "../../assets/images/img2.png";

export default function MissionVision() {
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("mv-visible");
          } else {
            // Re-animate when scrolling back up too
            entry.target.classList.remove("mv-visible");
          }
        });
      },
      { threshold: 0.15 }
    );

    const animatedEls = sectionRef.current?.querySelectorAll(".mv-animate");
    animatedEls?.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <section className="mv-section" ref={sectionRef}>

      {/* HEADING CENTER */}
      <div className="mv-heading mv-animate mv-fade-up">
        <h1>Our Purpose <br /> & Belief</h1>
      </div>

      {/* BOTH CARDS IN ONE ROW */}
      <div className="mv-cards">

        {/* PURPOSE */}
        <div className="mv-card mv-animate mv-fade-left" style={{ "--delay": "0.1s" }}>
          <div className="mv-text mv-animate mv-fade-up" style={{ "--delay": "0.25s" }}>
            <h3>Our Purpose</h3>
            <p>
              Guided by experts from IITs, NITs, and premier institutes, Sambhav Vidya empowers learners to unlock their potential through education.
              A growth ecosystem that supports individuals from clarity to achievement, bridging learning to earning.
            </p>
          </div>

          <div className="mv-circle orange mv-animate mv-zoom-in" style={{ "--delay": "0.4s" }}>
            <img src={missionImg} alt="mission" />
          </div>
        </div>

        {/* BELIEF */}
        <div className="mv-card mv-animate mv-fade-right" style={{ "--delay": "0.2s" }}>
          <div className="mv-circle yellow mv-animate mv-zoom-in" style={{ "--delay": "0.45s" }}>
            <img src={visionImg} alt="vision" />
          </div>

          <div className="mv-text mv-animate mv-fade-up" style={{ "--delay": "0.3s" }}>
            <h3>Our Belief</h3>
            <p>
              We believe education should go beyond preparing you for a job and instead equip you for life, enabling you to make informed decisions and build meaningful work.
            </p>
          </div>
        </div>

      </div>
    </section>
  );
}
