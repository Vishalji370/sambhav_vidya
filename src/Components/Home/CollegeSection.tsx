import React, { useRef, useEffect } from "react";
import { FaArrowRight, FaStar } from "react-icons/fa";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import "./CollegeSection.css";

const data = [
  {
    name: "SRCC College",
    location: "New Delhi",
    course: "B.Com (Hons.)",
    fees: "1.25 Lacs",
    rating: "4.3",
    img: "https://images.unsplash.com/photo-1562774053-701939374585",
  },
  {
    name: "IHM Delhi",
    location: "Delhi NCR",
    course: "B.Sc Hospitality",
    fees: "4.93 Lacs",
    rating: "4.1",
    img: "https://images.unsplash.com/photo-1596495578065-6e0763fa1178",
  },
  {
    name: "SPA Delhi",
    location: "New Delhi",
    course: "B.Arch",
    fees: "5.22 Lacs",
    rating: "3.8",
    img: "https://images.unsplash.com/photo-1503676260728-1c00da094a0b",
  },
  {
    name: "NLU Delhi",
    location: "Delhi NCR",
    course: "LLB",
    fees: "3.2 Lacs",
    rating: "4.5",
    img: "https://images.unsplash.com/photo-1523050854058-8df90110c9f1",
  },
  {
    name: "DU College",
    location: "Delhi",
    course: "BA",
    fees: "1.8 Lacs",
    rating: "4.0",
    img: "https://images.unsplash.com/photo-1588072432836-e10032774350",
  },
];

const CollegeSection = () => {
  gsap.registerPlugin(ScrollTrigger);
  const sectionRef = useRef();
  const scrollRef = useRef();
  const cardsRef = useRef([]);

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
      <h2 className="college__heading">Top Colleges For You</h2>
      <p className="college__sub">
        Explore best colleges with courses & fees
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

              <div className="college__info">
                <span>{item.course}</span>
                <span className="rating">
                  <FaStar /> {item.rating}
                </span>
              </div>

              <p className="fees">{item.fees}</p>

              <div className="college__actions">
                <span>View Details</span>
                <FaArrowRight />
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default CollegeSection;