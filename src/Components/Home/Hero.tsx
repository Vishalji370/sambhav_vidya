import React, { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import "./Hero.css";

const rotatingWords = [" Success ", "Growth ", "Opportunities ",];
gsap.registerPlugin(ScrollTrigger);

const Hero = () => {
  const [wordIndex, setWordIndex] = useState(0);
  const wordRef     = useRef(null);
  const sectionRef  = useRef(null);
  const badgeRef    = useRef(null);
  const headingRef  = useRef(null);
  const paraRef     = useRef(null);
  const btnsRef     = useRef(null);
  const statsRef    = useRef(null);
  const cardRef     = useRef(null);
  const shape1Ref   = useRef(null);
  const shape2Ref   = useRef(null);
  const floatRef    = useRef(null);

  useEffect(() => {
    if (!sectionRef.current) return;
    const ctx = gsap.context(() => {
      /* ── Entry timeline ── */
      const tl = gsap.timeline({
        defaults: { ease: "power4.out" },
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 78%",
          toggleActions: "restart none restart none",
        },
      });

      // background fade in
      tl.fromTo(sectionRef.current,
        { opacity: 0 }, { opacity: 1, duration: 0.4 })

      // badge drops down
      .fromTo(badgeRef.current,
        { y: -30, opacity: 0, scale: 0.8 },
        { y: 0,   opacity: 1, scale: 1, duration: 0.5 }, "-=0.1")

      // heading letters slide up
      .fromTo(headingRef.current,
        { y: 60, opacity: 0, skewY: 4 },
        { y: 0,  opacity: 1, skewY: 0, duration: 0.7 }, "-=0.3")

      // para
      .fromTo(paraRef.current,
        { y: 30, opacity: 0 },
        { y: 0,  opacity: 1, duration: 0.5 }, "-=0.4")

      // buttons
      .fromTo(btnsRef.current,
        { y: 25, opacity: 0 },
        { y: 0,  opacity: 1, duration: 0.5 }, "-=0.35")

      // stats row
      .fromTo(statsRef.current,
        { y: 20, opacity: 0 },
        { y: 0,  opacity: 1, duration: 0.5 }, "-=0.3")

      // image slides in from right
      .fromTo(cardRef.current,
        { x: 100, opacity: 0 },
        { x: 0,   opacity: 1, duration: 0.9, ease: "power3.out" }, "-=0.6")

      // shapes burst in
      .fromTo(
        [shape1Ref.current, shape2Ref.current].filter(Boolean),
        { scale: 0, opacity: 0 },
        {
          scale: 1,
          opacity: 1,
          duration: 0.6,
          stagger: 0.15,
          ease: "back.out(1.7)",
        },
        "-=0.5"
      );

      /* ── Shape orbit ── */
      if (shape1Ref.current) {
        gsap.to(shape1Ref.current, {
          rotation: 360,
          duration: 18,
          ease: "none",
          repeat: -1,
          transformOrigin: "50% 50%",
        });
      }

      if (shape2Ref.current) {
        gsap.to(shape2Ref.current, {
          y: -20,
          duration: 2.5,
          ease: "sine.inOut",
          yoyo: true,
          repeat: -1,
        });
      }

      /* ── Floating badge on card ── */
      if (floatRef.current) {
        gsap.to(floatRef.current, {
          y: -8,
          duration: 1.8,
          ease: "sine.inOut",
          yoyo: true,
          repeat: -1,
        });
      }

    }, sectionRef.current);

    return () => ctx.revert();
  }, []);

  /* ── Rotating words ── */
  useEffect(() => {
    if (!wordRef.current) return;
    const interval = setInterval(() => {
      if (!wordRef.current) return;
      gsap.to(wordRef.current, {
        y: -20, opacity: 0, duration: 0.3, ease: "power2.in",
        onComplete: () => {
          setWordIndex(prev => (prev + 1) % rotatingWords.length);
          if (!wordRef.current) return;
          gsap.fromTo(
            wordRef.current,
            { y: 20, opacity: 0 },
            { y: 0, opacity: 1, duration: 0.35, ease: "power2.out" }
          );
        }
      });
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="hero" ref={sectionRef}>
      {/* BG blobs */}
      <div className="hero__blob hero__blob--1" />
      <div className="hero__blob hero__blob--2" />

      {/* ── LEFT CONTENT ── */}
      <div className="hero__left">


        <h1 className="hero__heading" ref={headingRef}>
         Discover the Right Course & <br /> University for
         <br />
          <span className="hero__heading--accent">
            - <span ref={wordRef}>{rotatingWords[wordIndex]}</span>
          </span>
        </h1>

        <p className="hero__para" ref={paraRef}>
       Explore verified universities, compare courses, and make confident education decisions, all in one platform built for students.
        </p>

        <div className="hero__btns" ref={btnsRef}>
          <a href="/courses" className="hero__btn hero__btn--primary">
           Explore Courses 
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
              <path d="M1 7h12M8 2l5 5-5 5" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </a>
        </div>

        {/* Stats */}
        <div className="hero__stats" ref={statsRef}>
          <div className="hero__stat">
            <span className="hero__stat-num">100+</span>
            <span className="hero__stat-label">Courses Available</span>
          </div>
          <div className="hero__stat-divider" />
          <div className="hero__stat">
            <span className="hero__stat-num">25+</span>
            <span className="hero__stat-label">Universities Listed</span>
          </div>
          <div className="hero__stat-divider" />
          <div className="hero__stat">
            <span className="hero__stat-num">5000+</span>
            <span className="hero__stat-label">Students Guided</span>
          </div>
        </div>
      </div>

      {/* ── RIGHT — Image ── */}
      <div className="hero__right">

        {/* Geometric shapes */}
        <div ref={shape1Ref} className="hero__shape hero__shape--teal" />
        <div ref={shape2Ref} className="hero__shape hero__shape--orange" />

        {/* Student image — bleeds out of screen */}
        <img
          ref={cardRef}
          src="/Home/img1.png"
          alt="Student"
          className="hero__img"
        />

        {/* Floating badge */}
     

        {/* Google-style floating dot */}
       
      </div>
    </section>
  );
};

export default Hero;
