import React, { useEffect } from "react";
import "./AboutHero.css";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import heroImg from "../../assets/images/hero.jpeg";

gsap.registerPlugin(ScrollTrigger);

export default function AboutHero() {

  useEffect(() => {

    // Hero text — scroll pe trigger
    const heroTextEl = document.querySelector(".hero-text");
    if (heroTextEl) {
      gsap.fromTo(
        heroTextEl,
        { opacity: 0, y: 50 },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          scrollTrigger: {
            trigger: heroTextEl,
            start: "top 85%",       // element ke top jab viewport ke 85% pe ho
            end: "bottom 20%",
            toggleActions: "play reverse play reverse",
            // ⬆ scroll down = play, scroll up = reverse, phir repeat
          },
        }
      );
    }

    // Circle floating — continuous (scroll se independent)
    const circleEls = gsap.utils.toArray(".circle");
    if (circleEls.length) {
      gsap.to(circleEls, {
        y: 15,
        duration: 3,
        repeat: -1,
        yoyo: true,
        ease: "power1.inOut",
      });
    }

    // Circle image — scroll pe scale/fade
    const circleImgEl = document.querySelector(".circle img");
    if (circleImgEl) {
      gsap.fromTo(
        circleImgEl,
        { scale: 0.8, opacity: 0 },
        {
          scale: 1,
          opacity: 1,
          duration: 1.2,
          ease: "power2.out",
          scrollTrigger: {
            trigger: circleImgEl,
            start: "top 90%",
            end: "bottom 20%",
            toggleActions: "play reverse play reverse",
          },
        }
      );
    }

    // Icons floating loop
    const floatingEls = gsap.utils.toArray(".floating");
    if (floatingEls.length) {
      gsap.to(floatingEls, {
        y: 20,
        duration: 2,
        repeat: -1,
        yoyo: true,
        stagger: 0.3,
      });
    }

    // Arrow animation loop
    const arrowEls = gsap.utils.toArray(".arrow");
    if (arrowEls.length) {
      gsap.to(arrowEls, {
        x: 15,
        duration: 1.5,
        repeat: -1,
        yoyo: true,
      });
    }

    // Cleanup on unmount
    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };

  }, []);

  return (
    <section className="about-hero">
      <div className="hero-left">
        <div className="hero-text">
          <h1>
            Empowering Students
            to <br />Find the <span>Right Education</span>
          </h1>
          <p className="desc">
            Sambhav Vidya helps students discover the best universities, courses, and career opportunities through a trusted platform built to simplify education choices.
          </p>
        </div>
      </div>

      <div className="hero-right">
        <div className="circle">
          <img src={heroImg} alt="hero" />
        </div>
      </div>
    </section>
  );
}