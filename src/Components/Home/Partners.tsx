import React, { useRef, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { gsap } from "gsap";
import "./Partners.css";

const partners = [
  {
    name: "Delhi University",
    logo: "https://upload.wikimedia.org/wikipedia/en/8/8e/University_of_Delhi_Logo.svg",
    path: "/du",
  },
  {
    name: "IIT Delhi",
    logo: "https://upload.wikimedia.org/wikipedia/en/1/1d/IIT_Delhi_Logo.svg",
    path: "/iit-delhi",
  },
  {
    name: "JNU",
    logo: "https://upload.wikimedia.org/wikipedia/en/6/69/Jawaharlal_Nehru_University_Logo.png",
    path: "/jnu",
  },
  {
    name: "Jamia Millia",
    logo: "https://upload.wikimedia.org/wikipedia/en/5/5a/Jamia_Millia_Islamia_Logo.png",
    path: "/jamia",
  },
  {
    name: "Amity University",
    logo: "https://upload.wikimedia.org/wikipedia/en/f/f3/Amity_University_logo.png",
    path: "/amity",
  },
];

const PartnersSection = () => {
  const sectionRef = useRef();
  const headingRef = useRef();
  const subRef = useRef();
  const trackRef = useRef();
  const navigate = useNavigate();

  useEffect(() => {
    const ctx = gsap.context(() => {
      // 🔥 heading animation
      gsap.from(headingRef.current, {
        y: 40,
        opacity: 0,
        duration: 0.8,
      });

      gsap.from(subRef.current, {
        y: 20,
        opacity: 0,
        delay: 0.2,
        duration: 0.6,
      });

      // 🔥 smooth infinite scroll
      gsap.to(trackRef.current, {
        xPercent: -50,
        duration: 20,
        ease: "linear",
        repeat: -1,
      });

    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section className="partners" ref={sectionRef}>
      
      <h2 className="partners__heading" ref={headingRef}>
        Our Trusted Partners
      </h2>

      <p className="partners__sub" ref={subRef}>
        Collaborating with top universities across India
      </p>

      {/* 🔥 HOVER PAUSE */}
      <div
        className="partners__slider"
        onMouseEnter={() => gsap.globalTimeline.pause()}
        onMouseLeave={() => gsap.globalTimeline.resume()}
      >
        <div className="partners__track" ref={trackRef}>
          
          {[...partners, ...partners].map((item, i) => (
            <div
              key={i}
              className="partners__logo"
              onClick={() => navigate(item.path)}
            >
              <img src={item.logo} alt={item.name} />
            </div>
          ))}

        </div>
      </div>

    </section>
  );
};

export default PartnersSection;