import React, { useState, useEffect, useRef } from "react";
import { Link, useLocation } from "react-router-dom";
import { gsap } from "gsap";
import "./Header.css";

const navLinks = [
  { label: "Home",     path: "/" },
  { label: "Courses",  path: "/courses" },
  { label: "Partners", path: "/partners" },
  //{ label: "Blog",     path: "/blog" },
  { label: "About",    path: "/about" },
  { label: "Contact",  path: "/contact" },
];

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location                = useLocation();

  const logoRef   = useRef(null);
  const linksRef  = useRef([]);
  const ctaRef    = useRef(null);
  const navbarRef = useRef(null);

  /* ── Scroll shadow ── */
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  /* ── GSAP entrance — runs ONLY ONCE on first mount ── */
  useEffect(() => {
    const tl = gsap.timeline({ defaults: { ease: "power3.out" } });

    tl.fromTo(navbarRef.current,
        { y: -80, opacity: 0 },
        { y: 0,   opacity: 1, duration: 0.55 }
      )
      .fromTo(logoRef.current,
        { x: -24, opacity: 0 },
        { x: 0,   opacity: 1, duration: 0.4 },
        "-=0.3"
      )
      .fromTo(linksRef.current,
        { y: -14, opacity: 0 },
        { y: 0,   opacity: 1, duration: 0.35, stagger: 0.07 },
        "-=0.25"
      )
      .fromTo(ctaRef.current,
        { scale: 0.8, opacity: 0 },
        { scale: 1,   opacity: 1, duration: 0.35 },
        "-=0.2"
      );

    return () => tl.kill();
  }, []); // ← empty array = only on first page load

  /* ── Close drawer on route change ── */
  useEffect(() => {
    setMenuOpen(false);
  }, [location.pathname]);

  return (
    <>
      <nav
        ref={navbarRef}
        className={`navbar ${scrolled ? "navbar--scrolled" : ""}`}
      >
        {/* Logo */}
        <Link
          to="/"
          className="logo"
          ref={logoRef}
        >
          <div className="logo__icon">E</div>
          <span className="logo__text">
           Sambhav <span>Vidya</span>
          </span>
        </Link>

        <div className="navbar__spacer" />

        {/* Desktop Menu */}
        <ul className="nav-menu">
          {navLinks.map((link, i) => (
            <li key={link.path}>
              <Link
                to={link.path}
                ref={(el) => (linksRef.current[i] = el)}
                className={`nav-menu__link ${
                  location.pathname === link.path ? "nav-menu__link--active" : ""
                }`}
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>

        {/* CTA Button */}
        <Link to="/courses" className="cta-btn" ref={ctaRef}>
          Explore Courses
          <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
            <path
              d="M1 7h12M8 2l5 5-5 5"
              stroke="currentColor"
              strokeWidth="1.8"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </Link>

        {/* Hamburger */}
        <button
          className={`hamburger ${menuOpen ? "hamburger--open" : ""}`}
          onClick={() => setMenuOpen((prev) => !prev)}
          aria-label="Toggle menu"
        >
          <span />
          <span />
          <span />
        </button>
      </nav>

      {/* Mobile Drawer */}
      <div className={`mobile-drawer ${menuOpen ? "mobile-drawer--open" : ""}`}>
        {navLinks.map((link) => (
          <Link
            key={link.path}
            to={link.path}
            className="mobile-drawer__link"
          >
            {link.label}
          </Link>
        ))}
        <Link to="/courses" className="mobile-drawer__cta">
          Explore Courses →
        </Link>
      </div>
    </>
  );
};

export default Header;
