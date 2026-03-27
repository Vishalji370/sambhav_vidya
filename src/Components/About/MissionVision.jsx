import React from "react";
import "./MissionVision.css";

import missionImg from "../../assets/images/img1.png";
import visionImg from "../../assets/images/img2.png";

export default function MissionVision() {
  return (
  <section className="mv-section">

  {/* TOP ROW */}
  <div className="mv-top">

    {/* LEFT HEADING */}
    <div className="mv-heading">
      <h1>Our Purpose <br /> & Belief</h1>

      
    </div>  

    {/* RIGHT MISSION */}
    <div className="mv-card">
      <div className="mv-text">
        <h3>Our Purpose</h3>
        <p>
         Guided by experts from IITs, NITs, and premier institutes, Sambhav Vidya empowers learners to unlock their potential through education.

A growth ecosystem that supports individuals from clarity to achievement, bridging learning to earning.
        </p>
      </div>

     <div className="mv-circle orange">
  <img src={missionImg} alt="mission" />
</div>
    </div>

  </div>

  {/* VISION (BOTTOM) */}
  <div className="mv-row left">
    <div className="mv-card">
     <div className="mv-circle yellow">
  <img src={visionImg} alt="vision" />
</div>

      <div className="mv-text">
        <h3>Our Belief</h3>
        <p>
         We believe education should go beyond preparing you for a job and instead equip you for life, enabling you to make informed decisions and build meaningful work. It should help you grow with confidence and live with dignity, creating a foundation for long-term personal and professional fulfillment.
        </p>
      </div>
    </div>
  </div>

</section>
  );
}