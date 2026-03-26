import React, { useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import { gsap } from "gsap";
import "./Footer.css";

const Footer = () => {
  const navigate = useNavigate();
  const footerRef = useRef();

  useEffect(() => {
    gsap.fromTo(
      footerRef.current.children,
      { y: 50, opacity: 0 },
      { y: 0, opacity: 1, stagger: 0.15, duration: 0.8 }
    );
  }, []);

  return (
    <footer className="footer" ref={footerRef}>

      {/* 🔥 LEFT SIDE */}
      <div className="footer__left">
        <h2 className="logo">My<span>College</span></h2>

        <p className="tagline">
          Get the right <span>guidance</span> with us
        </p>

        <div className="footer__contact">
          <p>Email: info@mycollege.com</p>
          <p className="phone">1800-420-5757</p>
        </div>
      </div>

      {/* 🔥 COURSES */}
      <div className="footer__col">
        <h3>Courses</h3>
        <ul>
          <li>B.Tech</li>
          <li>BCA</li>
          <li>MBA</li>
          <li>Design</li>
        </ul>
        <span onClick={() => navigate("/courses")}>View All +</span>
      </div>

      {/* 🔥 UNIVERSITIES */}
      <div className="footer__col">
        <h3>Universities</h3>
        <ul>
          <li>Delhi University</li>
          <li>IIT Delhi</li>
          <li>JNU</li>
          <li>Amity</li>
        </ul>
        <span onClick={() => navigate("/universities")}>View All +</span>
      </div>

      {/* 🔥 QUICK LINKS */}
      <div className="footer__col">
        <h3>Quick Links</h3>
        <ul>
          <li onClick={() => navigate("/")}>Home</li>
          <li onClick={() => navigate("/courses")}>Courses</li>
          <li onClick={() => navigate("/about")}>About</li>
          <li onClick={() => navigate("/contact")}>Contact</li>
        </ul>
      </div>

    </footer>
  );
};

export default Footer;