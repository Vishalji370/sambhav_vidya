import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import "./Aboutus.css";

gsap.registerPlugin(ScrollTrigger);

const AboutUs = () => {
  const sectionRef = useRef(null);

  useEffect(() => {
    const el = sectionRef.current;

    // Left image — scroll pe left se aaye
    gsap.fromTo(
      el.querySelector(".aboutus-image"),
      { x: -100, opacity: 0 },
      {
        x: 0,
        opacity: 1,
        duration: 1,
        scrollTrigger: {
          trigger: el.querySelector(".aboutus-image"),
          start: "top 85%",
          end: "bottom 20%",
          toggleActions: "play reverse play reverse",
        },
      }
    );

    // Right content — scroll pe right se aaye
    gsap.fromTo(
      el.querySelector(".aboutus-content"),
      { x: 100, opacity: 0 },
      {
        x: 0,
        opacity: 1,
        duration: 1,
        scrollTrigger: {
          trigger: el.querySelector(".aboutus-content"),
          start: "top 85%",
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
    <section className="aboutus-section" ref={sectionRef}>
      <div className="aboutus-container">

        {/* LEFT IMAGE */}
        <div className="aboutus-image">
          <img
            src="https://images.unsplash.com/photo-1552664730-d307ca884978"
            alt="about"
          />
        </div>

        {/* RIGHT CONTENT */}
        <div className="aboutus-content">
          <h2>Unlocking Potential. Building Futures.</h2>
          <p>
            At Sambhav Vidya, we believe that every individual carries untapped potential — a Sambhav waiting to be discovered, nurtured, and transformed into a meaningful life.
          </p>
          <p>
            In today's fast-changing world, access to education is no longer enough. What truly matters is direction, clarity, and the ability to apply knowledge in the real world.
          </p>
          <p>That's where we come in.</p>
        </div>

      </div>
    </section>
  );
};

export default AboutUs;