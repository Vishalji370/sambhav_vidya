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
      <h1>Our Mission <br /> & Vision</h1>

      
    </div>  

    {/* RIGHT MISSION */}
    <div className="mv-card">
      <div className="mv-text">
        <h3>Mission</h3>
        <p>
          Empowering students with the right guidance to choose the best courses.
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
        <h3>Vision</h3>
        <p>
          To become India's most trusted education platform.
        </p>
      </div>
    </div>
  </div>

</section>
  );
}