import React, { useRef, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { gsap } from "gsap";
import "./Partners.css";

const partners = [
  {
    name: "Delhi University",
    logo: "/Univpng/img1.png",
    path: "/du",
  },
  {
    name: "IIT Delhi",
    logo: "/Univpng/img2.png",
    path: "/iit-delhi",
  },
  {
    name: "JNU",
    logo: "/Univpng/img3.png",
    path: "/jnu",
  },
  {
    name: "Jamia Millia",
    logo: "/Univpng/img4.png",
    path: "/jamia",
  },
  {
    name: "Amity University",
    logo: "/Univpng/img5.jpg",
    path: "/amity",
  },
    {
    name: "Delhi University",
    logo: "/Univpng/img6.png",
    path: "/du",
  },
  {
    name: "IIT Delhi",
    logo: "/Univpng/img7.png",
    path: "/iit-delhi",
  },
  {
    name: "JNU",
    logo: "/Univpng/img8.png",
    path: "/jnu",
  },
  {
    name: "Jamia Millia",
    logo: "/Univpng/img9.png",
    path: "/jamia",
  },
  {
    name: "Amity University",
    logo: "/Univpng/img10.png",
    path: "/amity",
  },
    {
    name: "manav",
    logo: "/Univpng/img11.png",
    path: "/manav",
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
        Our Trusted University Partners
      </h2>

      <p className="partners__sub" ref={subRef}>
     Partnering with leading universities to bring trusted programs to students.
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