import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { FaUserGraduate, FaLaptopCode, FaChartLine, FaHeadset } from "react-icons/fa";
import "./WhyChooseUs.css";

const features = [
  {
    icon: <FaUserGraduate />,
    title: "Expert Guidance",
    desc: "Get reliable guidance to choose the right course and university for your future.",
  },
  {
    icon: <FaLaptopCode />,
    title: "Smart Learning",
    desc: "Explore courses and universities easily with a platform designed for students.",
  },
  {
    icon: <FaChartLine />,
    title: "Career Growth",
    desc: "Discover programs that align with your interests and long-term career goals.",
  },
  {
    icon: <FaHeadset />,
    title: "24/7 Support",
    desc: "Our team is here to assist you throughout your education journey.",
  },
];

const WhyChooseUs = () => {
  gsap.registerPlugin(ScrollTrigger);
  const sectionRef = useRef();
  const imgRef = useRef();
  const boxRef = useRef([]);

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

      tl.fromTo(".why__heading", { y: 30, opacity: 0 }, { y: 0, opacity: 1, duration: 0.5 })
        .fromTo(".why__sub", { y: 22, opacity: 0 }, { y: 0, opacity: 1, duration: 0.45 }, "-=0.25")
        .fromTo(
          imgRef.current,
          { x: -80, opacity: 0 },
          { x: 0, opacity: 1, duration: 0.8 },
          "-=0.15"
        )
        .fromTo(
          boxRef.current,
          { y: 50, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            stagger: 0.2,
            duration: 0.7,
          },
          "-=0.25"
        );
    }, sectionRef.current);

    return () => ctx.revert();
  }, []);

  return (
    <section className="why" ref={sectionRef}>

      <h2 className="why__heading">Why Choose Us</h2>
      <p className="why__sub">
        Helping students discover the right courses, universities, and career opportunities.
      </p>

      <div className="why__container">

        {/* LEFT IMAGE */}
        <div className="why__left">
          <div className="why__img-box" ref={imgRef}>
            <img
              src="/Home/img2.png"
              alt="student"
            />
          </div>
        </div>

        {/* RIGHT */}
        <div className="why__right">
          {features.map((item, i) => (
            <div
              className="why__card"
              key={i}
              ref={(el) => (boxRef.current[i] = el)}
            >
              <div className="why__icon">{item.icon}</div>
              <h3>{item.title}</h3>
              <p>{item.desc}</p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default WhyChooseUs;