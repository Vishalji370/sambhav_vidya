import React, { useEffect } from "react";
import "./AboutHero.css";
import gsap from "gsap";
import heroImg from "../../assets/images/hero.png";


export default function AboutHero() {

  useEffect(() => {
  
    // Text animation fix (no fade issue)
    const heroTextEl = document.querySelector(".hero-text");
    if (heroTextEl) {
      gsap.fromTo(
        heroTextEl,
        { opacity: 0, y: 50 },
        { opacity: 1, y: 0, duration: 1 }
      );
    }

    // Circle floating animation (continuous)
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

  }, []);

  return (
    <section className="about-hero">

      {/* LEFT */}
      <div className="hero-left">

  

        <div className="hero-text">
         <h1>
  Empowering Students <br />
  to Find the <span>Right Education</span> 
</h1>

          <p className="desc">
           Sambhav Vidya helps students discover the best universities, courses, and career opportunities through a trusted platform built to simplify education choices.
          </p>
        </div>

       

      </div>

      {/* RIGHT */}
     <div className="hero-right">
  <div className="circle">
    <img src={heroImg} alt="hero" />
  </div>
</div>

    </section>
  );
}