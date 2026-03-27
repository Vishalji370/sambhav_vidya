import React from "react";
import "./CHero.css";
import { openLookingForPopup } from "../LookingForPopup";

const CoursesHero = () => {
  return (
    <section id="courses-hero" className="courses-hero">

      {/* LEFT SIDE */}
      <div className="courses-hero-left">
        <h1>
          Find the Right <br />
          <span>Online Degree</span> <br /> for Your Future
        </h1>

        <p>
          Explore top universities, courses, and choose programs that match your career goals, all in one place.
        </p>

        <button type="button" className="courses-btn" onClick={() => openLookingForPopup()}>
          Get Expert Guidance
        </button>

      </div>

      {/* RIGHT SIDE */}
      <div className="courses-hero-right">
        <div className="courses-image-wrapper">

          <img
            src="/Home/img4.jpeg"
            alt="student"
          />

          {/* FLOATING CARDS */}
         
        </div>
      </div>

      {/* BACKGROUND SHAPES */}
    

    </section>
  );
};

export default CoursesHero;