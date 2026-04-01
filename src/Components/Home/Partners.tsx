import React, { useRef, useEffect } from "react";
import { gsap } from "gsap";
import { useNavigate } from "react-router-dom";
import "./Partners.css";

const partners = [
  { name: "LPU University", logo: "/CourseLogo/1.png", courses: 5 },
  { name: "UPES", logo: "/CourseLogo/3.png", courses: 5 },
  { name: "Galgotias University", logo: "/CourseLogo/4.png", courses: 5 },
  { name: "Manav Rachna University", logo: "/CourseLogo/5.png", courses: 5 },
  { name: "Shoolini University", logo: "/CourseLogo/6.png", courses: 5 },
  { name: "Sharda University", logo: "/CourseLogo/7.png", courses: 5 },
  { name: "Manipal University", logo: "/CourseLogo/8.png", courses: 5 },
  { name: "GLA University", logo: "/CourseLogo/9.png", courses: 5 },
  { name: "Chandigarh University", logo: "/CourseLogo/10.png", courses: 5 },
  { name: "Amity University", logo: "/CourseLogo/11.png", courses: 5 },
];

// Partners name → CoursesData university name exact match
const universityNameMap: Record<string, string> = {
  "LPU University": "LPU University",
  "UPES": "UPES University",
  "Galgotias University": "Galgotias University",
  "Manav Rachna University": "Manav Rachna University",
  "Shoolini University": "Shoolini University",
  "Sharda University": "Sharda Univesity",   // typo intentional — coursesData mein aisa hai
  "Manipal University": "Manipal University",
  "GLA": "GLA University",
  "Chandigarh University": "Chandigarh University",
  "Amity University": "Amity University",
};

const PartnersSection = () => {
  const navigate = useNavigate();
  const sectionRef = useRef<HTMLElement>(null);
  const headingRef = useRef<HTMLHeadingElement>(null);
  const subRef = useRef<HTMLParagraphElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);
  const tlRef = useRef<gsap.core.Tween | null>(null);
  const boostTimeoutRef = useRef<number | null>(null);
  const isHoveringRef = useRef(false);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(headingRef.current, { y: 40, opacity: 0, duration: 0.8 });
      gsap.from(subRef.current, { y: 20, opacity: 0, delay: 0.2, duration: 0.6 });
      tlRef.current = gsap.to(trackRef.current, {
        xPercent: -50,
        duration: 28,
        ease: "linear",
        repeat: -1,
      });
    }, sectionRef);

    return () => {
      if (boostTimeoutRef.current) window.clearTimeout(boostTimeoutRef.current);
      boostTimeoutRef.current = null;
      ctx.revert();
    };
  }, []);

  const handleMouseEnter = () => {
    isHoveringRef.current = true;
    tlRef.current?.pause();
  };

  const handleMouseLeave = () => {
    if (!tlRef.current) return;
    isHoveringRef.current = false;
    tlRef.current.timeScale(1);
    tlRef.current.resume();
  };

  const boostScroll = (dir: "left" | "right") => {
    const tween = tlRef.current;
    if (!tween) return;
    tween.timeScale(1);
    tween.pause();
    const current = tween.totalTime();
    const step = dir === "left" ? -2.1 : 2.1;
    gsap.to(tween, {
      totalTime: current + step,
      duration: 0.35,
      ease: "power2.out",
      overwrite: true,
    });
    if (boostTimeoutRef.current) window.clearTimeout(boostTimeoutRef.current);
    boostTimeoutRef.current = window.setTimeout(() => {
      if (isHoveringRef.current) return;
      tween.timeScale(1);
      tween.resume();
    }, 1400);
  };

  // ✅ Card click — courses page pe navigate with university query param
  const handleCardClick = (partnerName: string) => {
    const mappedName = universityNameMap[partnerName] || partnerName;
    navigate(`/courses?university=${encodeURIComponent(mappedName)}`);
  };

  return (
    <section className="partners" ref={sectionRef}>
      <h2 className="partners__heading" ref={headingRef}>
        Online Programs from Top Universities
      </h2>

      <p className="partners__sub" ref={subRef}>
       Access accredited online degrees from trusted university partners,  <br /> to help you build a successful career.
      </p>

      <div
        className="partners__slider"
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        <button
          type="button"
          className="partners__arrow partners__arrow--left"
          onClick={() => boostScroll("left")}
          aria-label="Scroll partners left"
        >❮</button>
        <button
          type="button"
          className="partners__arrow partners__arrow--right"
          onClick={() => boostScroll("right")}
          aria-label="Scroll partners right"
        >❯</button>

        <div className="partners__track" ref={trackRef}>
          {[...partners, ...partners].map((item, i) => (
            <div
              key={i}
              className="partners__card"
              onClick={() => handleCardClick(item.name)}
              style={{ cursor: "pointer" }}
            >
              <div className="partners__card-logo">
                <img src={item.logo} alt={item.name} />
              </div>
              <div className="partners__card-divider" />
              <div className="partners__card-info">
                <span className="partners__card-courses">{item.courses} Courses</span>
                <span className="partners__card-name">{item.name}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PartnersSection;