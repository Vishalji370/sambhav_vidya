import React from "react";
import "./HomeCTA.css";
import { openLookingForPopup } from "../LookingForPopup";

import {
  FaGraduationCap,
  FaBookOpen,
  FaLaptopCode,
  FaBrain,
  FaChartLine,
  FaFlask
} from "react-icons/fa";

const HomeCTA = () => {
  const openGuidanceForm = () => openLookingForPopup();

  return (
    <section id="home-cta">

      {/* FLOATING ICONS */}
      <FaGraduationCap className="cta-icon icon1" />
      <FaBookOpen className="cta-icon icon2" />
      <FaBrain className="cta-icon icon3" />
      <FaLaptopCode className="cta-icon icon4" />
      <FaChartLine className="cta-icon icon5" />
      <FaFlask className="cta-icon icon6" />

      {/* CONTENT */}
      <div className="cta-content">
        <h1>
         Not Sure Which Course  <br />
          <span>is Right for You?</span>
        </h1>

        <p>
         Get personalized guidance from our experts to choose the right course and university based on your goals.
        </p>

        <div className="cta-buttons">
          <button className="btn-primary" onClick={openGuidanceForm}>
            Get Free Guidance
          </button>
   
        </div>
      </div>

    </section>
  );
};

export default HomeCTA;