import React, { useEffect, useRef } from "react";
import "./WhoWeServe.css";

export default function WhoWeServe() {

  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("ws-visible");
          } else {
            entry.target.classList.remove("ws-visible");
          }
        });
      },
      { threshold: 0.12 }
    );

    const els = sectionRef.current?.querySelectorAll(".ws-animate");
    els?.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  const imageUrl =
    "https://img.freepik.com/premium-vector/education-learning-knowledge-concept_609547-261.jpg";

  return (
    <section className="serve-section" ref={sectionRef}>

      {/* HEADING — fade down */}
      <div className="serve-heading ws-animate ws-fade-down" style={{ "--ws-delay": "0s" }}>
        <h1>Who We Serve</h1>
      </div>

      <div className="serve-container">

        {/* LEFT IMAGE — fade from left */}
        <div className="serve-left ws-animate ws-fade-left" style={{ "--ws-delay": "0.2s" }}>
          <div className="image-wrapper">
            <span className="shape shape1"></span>
            <span className="shape shape2"></span>
            <span className="shape shape3"></span>
            <img src={imageUrl} alt="serve" />
          </div>
        </div>

        {/* RIGHT CONTENT — staggered */}
        <div className="serve-right">

          {/* desc */}
          <p className="serve-desc ws-animate ws-fade-right" style={{ "--ws-delay": "0.35s" }}>
            Sambhav Vidya is for anyone who is:
          </p>

          {/* each list item individually staggered */}
          <ul className="serve-list">
            <li className="ws-animate ws-fade-right" style={{ "--ws-delay": "0.5s" }}>
              Feeling stuck or unsure about their next step
            </li>
            <li className="ws-animate ws-fade-right" style={{ "--ws-delay": "0.65s" }}>
              Looking to build relevant, future-ready skills
            </li>
            <li className="ws-animate ws-fade-right" style={{ "--ws-delay": "0.8s" }}>
              Seeking guidance, mentorship, and real opportunities along with ongoing full time study
            </li>
            <li className="ws-animate ws-fade-right" style={{ "--ws-delay": "0.95s" }}>
              Ready to take control of their personal and professional growth
            </li>
          </ul>

          {/* small para */}
          <p className="serve-small ws-animate ws-fade-up" style={{ "--ws-delay": "1.1s" }}>
            Whether you're a student, a graduate, or a working professional — your journey starts here.
          </p>

        </div>
      </div>
    </section>
  );
}
