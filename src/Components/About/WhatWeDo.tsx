import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import "./WhatWeDo.css";

gsap.registerPlugin(ScrollTrigger);

const WhatWeDo = () => {
  const sectionRef = useRef(null);

  useEffect(() => {
    const el = sectionRef.current;

    // Heading animation
    gsap.fromTo(
      el.querySelector(".whatwedo-main-heading"),
      { y: -50, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 1,
        scrollTrigger: {
          trigger: el,
          start: "top 85%",
          end: "bottom 20%",
          toggleActions: "play reverse play reverse",
        },
      }
    );

    // Left content
    gsap.fromTo(
      el.querySelector(".whatwedo-left"),
      { x: -100, opacity: 0 },
      {
        x: 0,
        opacity: 1,
        duration: 1,
        scrollTrigger: {
          trigger: el,
          start: "top 80%",
          end: "bottom 20%",
          toggleActions: "play reverse play reverse",
        },
      }
    );

    // Cards
    gsap.fromTo(
      el.querySelectorAll(".whatwedo-card"),
      { x: 100, opacity: 0 },
      {
        x: 0,
        opacity: 1,
        duration: 0.8,
        stagger: 0.2,
        scrollTrigger: {
          trigger: el,
          start: "top 80%",
          end: "bottom 20%",
          toggleActions: "play reverse play reverse",
        },
      }
    );

    // Cleanup
    return () => {
      ScrollTrigger.getAll().forEach((t) => t.kill());
    };
  }, []);

  return (
    <section className="whatwedo-section" ref={sectionRef}>

      {/* TOP HEADING */}
      <h2 className="whatwedo-main-heading">What We Do</h2>

      <div className="whatwedo-container">

        {/* LEFT SIDE (NOW CARDS) */}
        <div className="whatwedo-right">
          <h4 className="whatwedo-card-heading">Through our platform, you will find:</h4>

          <div className="whatwedo-card-list">
            {[
              "Career clarity programs",
              "Recommendations of Best Online Courses from Premier Universities across India",
              "Skill-based courses aligned with real-world needs",
              "Mentorship from experienced individuals",
              "Opportunities to grow, collaborate, and succeed",
            ].map((item, index) => (
              <div className="whatwedo-card" key={index}>
                <span className="whatwedo-card-bar"></span>
                <div className="whatwedo-card-content">
                  <h5>{item}</h5>
                </div>
              </div>
            ))}
          </div>

          <p className="whatwedo-tagline">
            Every offering at Sambhav Vidya is designed with one goal:
          </p>
        </div>

        {/* RIGHT SIDE (NOW CONTENT + IMAGE) */}
        <div className="whatwedo-left">
          <p>
            We provide outcome-driven, practical, and accessible online learning experiences for students and working professionals who want more than just degrees — they want direction and that too as per their intrinsic ability and future needs
          </p>

          <div className="whatwedo-image-wrapper">
            <img
              src="https://images.unsplash.com/photo-1552664730-d307ca884978"
              alt="about"
            />
            <span className="whatwedo-shape1"></span>
            <span className="whatwedo-shape2"></span>
          </div>
        </div>

      </div>
    </section>
  );
};

export default WhatWeDo;