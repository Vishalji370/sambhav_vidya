import React, { useRef, useEffect } from "react";
import { gsap } from "gsap";
import "./Partners.css";

const partners = [
  { name: "Delhi University", logo: "/Univpng/img1.png" },
  { name: "IIT Delhi", logo: "/Univpng/img2.png" },
  { name: "JNU", logo: "/Univpng/img3.png" },
  { name: "Jamia Millia", logo: "/Univpng/img4.png" },
  { name: "Amity University", logo: "/Univpng/img5.jpg" },
  { name: "Delhi University", logo: "/Univpng/img6.png" },
  { name: "IIT Delhi", logo: "/Univpng/img7.png" },
  { name: "JNU", logo: "/Univpng/img8.png" },
  { name: "Jamia Millia", logo: "/Univpng/img9.png" },
  { name: "Amity University", logo: "/Univpng/img10.png" },
  { name: "manav", logo: "/Univpng/img11.png" },
];

const PartnersSection = () => {
  const sectionRef = useRef();
  const headingRef = useRef();
  const subRef = useRef();
  const trackRef = useRef();

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
            <div key={i} className="partners__logo">
              <img src={item.logo} alt={item.name} />
            </div>
          ))}

        </div>
      </div>

    </section>
  );
};

export default PartnersSection;