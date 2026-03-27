import React, { useRef, useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { openLookingForPopup } from "../LookingForPopup";
import "./CollegeSection.css";

const data = [
  {
    name: "FPV Drone Flying Training",
    location: "Learn to safely fly FPV drones in Stabilized, Horizon, and Acro modes with simulator practice and real-world flying.",
    course: "Duration: 3 Days",
 
    img: "/Drone/Card 1.jpg",
  },
  {
    name: "Small RPC Drone Pilot Training",
    location: "DGCA-certified training to become a professional remote pilot for drones up to 25 kg with practical flying sessions",
    course: "Duration: 5 Days",
  
    img: "/Drone/Card 2.jpeg",
  },
  {
    name: "Drone Repair & Maintenance",
    location: "Learn drone hardware, troubleshooting, and repair techniques to maintain and service professional drones.",
    course: "Duration: 6 Days",

    img: "/Drone/Card 3.jpg",
  },
  {
    name: "Drone GIS & Mapping Course",
    location: "Learn drone data processing, aerial mapping, terrain analysis, and GIS workflows for surveying and infrastructure projects.",
    course: "Duration: Professional Course",
 
    img: "/Drone/Card 4.jpeg",
  },
  {
    name: "Drone Instructor Pilot Training (TTT)",
    location: "Advanced training to become eligible for DGCA Remote Pilot Instructor certification and drone training programs.",
    course: "Duration: 4 Days",

    img: "/Drone/Card 5.jpg",
  },
    {
    name: "Medium RPC Drone Pilot Training",
    location: "DGCA-certified drone pilot training for operating medium-class drones up to 50 kg with professional flying practice.",
    course: "Duration: 5 Days",

    img: "/Drone/Card 6.jpeg",
  },
];

const CollegeSection = () => {
  gsap.registerPlugin(ScrollTrigger);
  const sectionRef = useRef<HTMLElement>(null);
  const scrollRef = useRef<HTMLDivElement>(null);
  const cardsRef = useRef<HTMLDivElement[]>([]);

  /* 🔥 GSAP Animation */
  useEffect(() => {
    if (!sectionRef.current) return;
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        defaults: { ease: "power3.out" },
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 78%",
          toggleActions: "restart none restart none",
        },
      });

      tl.fromTo(".college__heading", { y: 35, opacity: 0 }, { y: 0, opacity: 1, duration: 0.55 })
        .fromTo(".college__sub", { y: 24, opacity: 0 }, { y: 0, opacity: 1, duration: 0.45 }, "-=0.25")
        .fromTo(
          cardsRef.current,
          { y: 80, opacity: 0, scale: 0.9 },
          {
            y: 0,
            opacity: 1,
            scale: 1,
            duration: 0.8,
            stagger: 0.15,
          },
          "-=0.15"
        );
    }, sectionRef.current);

    return () => ctx.revert();
  }, []);

  /* 🔥 Scroll One Card */
  const scroll = (dir) => {
    const cardWidth =
      scrollRef.current.children[0].offsetWidth + 20;

    scrollRef.current.scrollBy({
      left: dir === "left" ? -cardWidth : cardWidth,
      behavior: "smooth",
    });
  };

  return (
    <section className="college" ref={sectionRef}>

      {/* HEADING */}
      <h2 className="college__heading">  Certified Drone Training Programs</h2>
      <p className="college__sub">
      Explore industry-focused drone training programs designed for professional <br />pilots, agriculture, mapping, and aerial operations.
      </p>

      {/* ARROWS */}
      <button className="college__arrow left" onClick={() => scroll("left")}>
        ❮
      </button>
      <button className="college__arrow right" onClick={() => scroll("right")}>
        ❯
      </button>

      {/* CARDS */}
      <div className="college__wrapper" ref={scrollRef}>
        {data.map((item, i) => (
          <div
            className="college__card"
            key={i}
            ref={(el) => (cardsRef.current[i] = el)}
            role="button"
            tabIndex={0}
            onClick={() => openLookingForPopup()}
            onKeyDown={(e) => {
              if (e.key === "Enter" || e.key === " ") {
                e.preventDefault();
                openLookingForPopup();
              }
            }}
          >
            {/* IMAGE */}
            <div className="college__img">
              <img src={item.img} alt="" />

              <div className="college__overlay"></div>

              <div className="college__hover-content">
                <h4>{item.name}</h4>
                <span>Explore →</span>
              </div>
            </div>

            {/* CONTENT */}
            <div className="college__content">
              <h3>{item.name}</h3>
              <p className="location">{item.location}</p>
              <p className="college__duration">{item.course}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default CollegeSection;