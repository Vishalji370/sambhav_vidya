import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import "./OurApproch.css";

gsap.registerPlugin(ScrollTrigger);

const OurApproach = () => {
  const sectionRef = useRef(null);

  useEffect(() => {
    const el = sectionRef.current;

    // Heading animation
    gsap.fromTo(
      el.querySelector(".ourapproach-heading"),
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

    // Card animation
    gsap.fromTo(
      el.querySelector(".ourapproach-card"),
      { scale: 0.9, opacity: 0 },
      {
        scale: 1,
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

    // Points stagger animation
    gsap.fromTo(
      el.querySelectorAll(".ourapproach-point"),
      { x: 50, opacity: 0 },
      {
        x: 0,
        opacity: 1,
        duration: 0.7,
        stagger: 0.15,
        scrollTrigger: {
          trigger: el.querySelector(".ourapproach-points"),
          start: "top 85%",
          end: "bottom 20%",
          toggleActions: "play reverse play reverse",
        },
      }
    );

    // Image animation
    gsap.fromTo(
      el.querySelector(".ourapproach-image"),
      { x: -60, opacity: 0 },
      {
        x: 0,
        opacity: 1,
        duration: 1,
        scrollTrigger: {
          trigger: el.querySelector(".ourapproach-image"),
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
    <section className="ourapproach-section" ref={sectionRef}>

      {/* ABOVE CARD CONTENT */}
      <div className="ourapproach-header">
        <h3 className="ourapproach-main-title">
          Our Approach
        </h3>
      </div>

      {/* CARD */}
      <div className="ourapproach-card">
        <h3 className="ourapproach-card-heading">
   We understand a simple truth. That's why we focus on
        </h3>
    <p className="ourapproach-desc">
          Talent is everywhere, but direction is rare
        </p>
        <div className="ourapproach-content">

          {/* LEFT IMAGE */}
          <div className="ourapproach-image">
            <img
              src="https://images.unsplash.com/photo-1551434678-e076c223a692"
              alt="approach"
            />
          </div>

          {/* RIGHT POINTS */}
          <div className="ourapproach-points">
            {[
              {
                title: "Clarity before complexity  ",
                desc: "Helping you understand what to do and why  ",
              },
              {
                title: "Skills over theory  ",
                desc: "Learning that directly translates into real opportunities  ",
              },
              {
                title: "Guidance over guesswork  ",
                desc: "Mentorship and structured pathways ",
              },
              {
                title: "Growth beyond careers ",
                desc: "Because success is not just about income it’s about identity, confidence, and digni",
              },
            ].map((item, index) => (
              <div className="ourapproach-point" key={index}>
                <h5>{item.title}</h5>
                <p>{item.desc}</p>
              </div>
            ))}
          </div>

        </div>
      </div>

    </section>
  );
};

export default OurApproach;