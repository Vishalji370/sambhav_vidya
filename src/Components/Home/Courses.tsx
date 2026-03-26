import React, { useState, useRef, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import "./Courses.css";

gsap.registerPlugin(ScrollTrigger);

const filters = ["Design", "Technology"];

const coursesData = {
  Technology: [
    { name: "B.Tech", desc: "AI, ML", duration: "4 years" },
    { name: "BCA", desc: "Web Dev", duration: "3 years" },
    { name: "MCA", desc: "Cloud", duration: "2 years" },
    { name: "B.Sc IT", desc: "Software", duration: "3 years" },
    { name: "Cyber Sec", desc: "Security", duration: "2 years" },
  ],
  Design: [
    { name: "B.Des", desc: "UI/UX", duration: "4 years" },
    { name: "Fashion", desc: "Design", duration: "3 years" },
  ],
};

const CoursesSection = () => {
  const [active, setActive] = useState("Technology");
  const sectionRef = useRef();
  const filterRef = useRef();
  const courseRef = useRef();
  const cardsRef = useRef([]);
  const navigate = useNavigate();

  useEffect(() => {
    if (!sectionRef.current) return;
    const ctx = gsap.context(() => {
      gsap.timeline({
        defaults: { ease: "power3.out" },
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 78%",
          toggleActions: "restart none restart none",
        },
      })
        .fromTo(".courses__heading", { y: 35, opacity: 0 }, { y: 0, opacity: 1, duration: 0.55 })
        .fromTo(".filter__container", { y: 25, opacity: 0 }, { y: 0, opacity: 1, duration: 0.45 }, "-=0.25")
        .fromTo(".course__container", { y: 35, opacity: 0 }, { y: 0, opacity: 1, duration: 0.5 }, "-=0.2");
    }, sectionRef.current);
    return () => ctx.revert();
  }, []);

  useEffect(() => {
    gsap.fromTo(
      cardsRef.current,
      { y: 40, opacity: 0 },
      { y: 0, opacity: 1, stagger: 0.1, duration: 0.5 }
    );
  }, [active]);

  const scroll = (ref, dir) => {
    const width = ref.current.offsetWidth;
    ref.current.scrollBy({
      left: dir === "left" ? -width / 2 : width / 2,
      behavior: "smooth",
    });
  };

  return (
    <section className="courses" ref={sectionRef}>
      <div className="courses__layout">

        {/*
         * ════════════════════════════════════════
         *  VIDEO LAGANE KA TARIKA
         * ════════════════════════════════════════
         *
         *  TARIKA 1 — Public folder (badi video ke liye best)
         *    Step 1: Apni video yahan rakho →  public/Home/video.mp4
         *    Step 2: Neeche src mein likho  →  src="/Home/video.mp4"
         *
         *  TARIKA 2 — src/assets folder (choti video ke liye)
         *    Step 1: Apni video yahan rakho →  src/assets/video.mp4
         *    Step 2: File ke upar import karo:
         *            import myVideo from "../assets/video.mp4";
         *    Step 3: Neeche src mein likho  →  src={myVideo}
         * ════════════════════════════════════════
         */}

        {/* ── LEFT: VIDEO ── */}
        <div className="courses__media">
          <div className="courses__video-wrapper">
            <video
              className="courses__video"
              src="/Home/video.mp4"
              autoPlay
              muted
              loop
              playsInline
              preload="metadata"
            />
          </div>
        </div>

        {/* ── RIGHT: CONTENT ── */}
        <div className="courses__content">
          <h2 className="courses__heading">Explore Online Degree Programs</h2>

          {/* FILTER */}
          <div className="filter__container">
            <button className="arrow left" onClick={() => scroll(filterRef, "left")}>
              <FaChevronLeft />
            </button>
            <div className="courses__filters" ref={filterRef}>
              {filters.map((item, i) => (
                <button
                  key={i}
                  className={`filter ${active === item ? "active" : ""}`}
                  onClick={() => setActive(item)}
                >
                  {item}
                </button>
              ))}
            </div>
            <button className="arrow right" onClick={() => scroll(filterRef, "right")}>
              <FaChevronRight />
            </button>
          </div>

          {/* CARDS */}
          <div className="course__container">
            <button className="arrow left" onClick={() => scroll(courseRef, "left")}>
              <FaChevronLeft />
            </button>
            <div className="courses__wrapper" ref={courseRef}>
              {coursesData[active]?.map((course, i) => (
                <div
                  className="course__card"
                  key={i}
                  ref={(el) => (cardsRef.current[i] = el)}
                  onClick={() => navigate("/courses")}
                >
                  <h3>{course.name}</h3>
                  <p>{course.desc}</p>
                  <span>{course.duration}</span>
                </div>
              ))}
            </div>
            <button className="arrow right" onClick={() => scroll(courseRef, "right")}>
              <FaChevronRight />
            </button>
          </div>
        </div>

      </div>
    </section>
  );
};

export default CoursesSection;
