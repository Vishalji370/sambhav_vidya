import React, { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { FaBook, FaUniversity, FaRocket } from "react-icons/fa";
import "./LookingFor.css";

gsap.registerPlugin(ScrollTrigger);
const cards = [
  {
    id: "courses",
    icon: <FaBook />,
    title: "Courses",
    desc: "Learn from top online courses across diverse subjects and build skills for your career.",
    path: "/courses",
    type: "link",

  },
  {
    id: "colleges",
    icon: <FaUniversity />,
    title: "Universities",
    desc: "Explore top universities and discover programs that support your academic journey.",
    path: "/colleges",
    type: "link",

  },
  {
    id: "career",
    icon: <FaRocket />,
    title: "Career Guidance",
    desc: "Get personalized career suggestions based on your interests and future goals.",
    path: null,
    type: "popup",
  
  },
];

const streams = ["Science (PCM)", "Science (PCB)", "Commerce", "Arts / Humanities", "Vocational", "Other"];
const areYouOptions = ["Student", "Parent", "Working Professional", "Fresher", "Other"];

const LookingFor = () => {
  const navigate = useNavigate();
  const [popup, setPopup]       = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm]         = useState({
    name: "", email: "", phone: "", education: "",
    stream: "", courses: "", state: "", city: "", areYou: "",
  });

  const sectionRef  = useRef(null);
  const headingRef  = useRef(null);
  const searchRef   = useRef(null);
  const cardsRef    = useRef([]);
  const overlayRef  = useRef(null);
  const popupRef    = useRef(null);

  /* ── ScrollTrigger entrance ── */
  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 78%",
          toggleActions: "restart none restart none",
        },
        defaults: { ease: "power3.out" },
      });

      tl.fromTo(headingRef.current,
        { y: 50, opacity: 0 },
        { y: 0,  opacity: 1, duration: 0.65 })

        .fromTo(searchRef.current,
          { y: 30, opacity: 0, scaleX: 0.92 },
          { y: 0,  opacity: 1, scaleX: 1, duration: 0.55 }, "-=0.35")

        .fromTo(cardsRef.current,
          { y: 60, opacity: 0, scale: 0.9 },
          { y: 0,  opacity: 1, scale: 1, duration: 0.55, stagger: 0.12 }, "-=0.3");

    }, sectionRef.current);

    return () => ctx.revert();
  }, []);

  /* ── Popup open/close animations ── */
  const openPopup = () => {
    setPopup(true);
    setSubmitted(false);
    requestAnimationFrame(() => {
      gsap.fromTo(overlayRef.current,
        { opacity: 0 }, { opacity: 1, duration: 0.25 });
      gsap.fromTo(popupRef.current,
        { scale: 0.85, opacity: 0, y: 40 },
        { scale: 1, opacity: 1, y: 0, duration: 0.4, ease: "back.out(1.5)" });
    });
  };

  const closePopup = () => {
    gsap.to(popupRef.current,
      { scale: 0.88, opacity: 0, y: 30, duration: 0.25, ease: "power2.in" });
    gsap.to(overlayRef.current,
      { opacity: 0, duration: 0.25,
        onComplete: () => setPopup(false) });
  };

  const handleCard = (card) => {
    if (card.type === "link") navigate(card.path);
    else openPopup();
  };

  const handleChange = (e) =>
    setForm(prev => ({ ...prev, [e.target.name]: e.target.value }));

  const handleSubmit = (e) => {
    e.preventDefault();
    gsap.fromTo(popupRef.current,
      { scale: 1 },
      { scale: 1.03, duration: 0.15, yoyo: true, repeat: 1,
        onComplete: () => setSubmitted(true) });
  };

  return (
    <>
      <section className="lf" ref={sectionRef}>
        {/* subtle bg pattern */}
        <div className="lf__bg-pattern" />

        {/* ── Heading ── */}
        <div className="lf__heading-wrap" ref={headingRef}>
         
          <h2 className="lf__heading">
            Find Your Perfect <span>Path</span>
          </h2>
        </div>

        {/* ── Search Bar ── */}
        <div className="lf__search-wrap" ref={searchRef}>
          <div className="lf__search">
      
            <input
              type="text"
              placeholder="Search courses, colleges, careers paths..."
              className="lf__search-input"
            />
            <button className="lf__search-btn">Search</button>
          </div>
        </div>

        {/* ── Cards ── */}
        <div className="lf__cards">
          {cards.map((card, i) => (
            <div
              key={card.id}
              ref={el => cardsRef.current[i] = el}
              className="lf__card"
              style={{ "--card-color": card.color, "--card-bg": card.bg }}
              role="button"
              tabIndex={0}
              onClick={(e) => {
                e.preventDefault();
                e.stopPropagation();
                handleCard(card);
              }}
              onKeyDown={(e) => {
                if (e.key === "Enter" || e.key === " ") {
                  e.preventDefault();
                  handleCard(card);
                }
              }}
            >
              <div className="lf__card-icon">{card.icon}</div>
              <div className="lf__card-glow" />
              <h3 className="lf__card-title">{card.title}</h3>
              <p className="lf__card-desc">{card.desc}</p>
              <span className="lf__card-arrow">
                {card.type === "popup" ? "Fill Form →" : "Explore →"}
              </span>
            </div>
          ))}
        </div>
      </section>

      {/* ── Career Suggestion Popup ── */}
      {popup && (
        <div className="lf__overlay" ref={overlayRef} onClick={(e) => e.target === overlayRef.current && closePopup()}>
          <div className="lf__popup" ref={popupRef}>

            <button className="lf__popup-close" onClick={closePopup}>✕</button>

            {!submitted ? (
              <>
                <div className="lf__popup-head">
                  <h3>Get Career Suggestion</h3>
                  <p>Fill in your details and we'll guide you to the right path!</p>
                </div>

                <form className="lf__form" onSubmit={handleSubmit}>
                  <div className="lf__form-row">
                    <div className="lf__form-group">
                      <label>Full Name *</label>
                      <input name="name" value={form.name} onChange={handleChange}
                        placeholder="Your full name" required />
                    </div>
                    <div className="lf__form-group">
                      <label>Email Address *</label>
                      <input name="email" type="email" value={form.email} onChange={handleChange}
                        placeholder="you@email.com" required />
                    </div>
                  </div>

                  <div className="lf__form-row">
                    <div className="lf__form-group">
                      <label>Phone Number *</label>
                      <input name="phone" type="tel" value={form.phone} onChange={handleChange}
                        placeholder="+91 XXXXX XXXXX" required />
                    </div>
                    <div className="lf__form-group">
                      <label>Current Education / Class *</label>
                      <input name="education" value={form.education} onChange={handleChange}
                        placeholder="e.g. 12th, Graduation" required />
                    </div>
                  </div>

                  <div className="lf__form-row">
                    <div className="lf__form-group">
                      <label>Interest / Stream *</label>
                      <select name="stream" value={form.stream} onChange={handleChange} required>
                        <option value="">Select Stream</option>
                        {streams.map(s => <option key={s} value={s}>{s}</option>)}
                      </select>
                    </div>
                    <div className="lf__form-group">
                      <label>Preferred Courses</label>
                      <input name="courses" value={form.courses} onChange={handleChange}
                        placeholder="e.g. Engineering, MBA, MBBS" />
                    </div>
                  </div>

                  <div className="lf__form-row">
                    <div className="lf__form-group">
                      <label>State *</label>
                      <input name="state" value={form.state} onChange={handleChange}
                        placeholder="Your state" required />
                    </div>
                    <div className="lf__form-group">
                      <label>City *</label>
                      <input name="city" value={form.city} onChange={handleChange}
                        placeholder="Your city" required />
                    </div>
                  </div>

                  <div className="lf__form-group lf__form-group--full">
                    <label>Are You? *</label>
                    <div className="lf__chip-group">
                      {areYouOptions.map(opt => (
                        <button
                          type="button"
                          key={opt}
                          className={`lf__chip ${form.areYou === opt ? "lf__chip--active" : ""}`}
                          onClick={() => setForm(prev => ({ ...prev, areYou: opt }))}
                        >
                          {opt}
                        </button>
                      ))}
                    </div>
                  </div>

                  <button type="submit" className="lf__form-submit">
                    Get My Career Suggestion
                  </button>
                </form>
              </>
            ) : (
              <div className="lf__success">
                <div className="lf__success-icon">🎉</div>
                <h3>Thank You, {form.name}!</h3>
                <p>We've received your details. Our career counselor will reach out to you soon on <strong>{form.phone}</strong>.</p>
                <button className="lf__form-submit" onClick={closePopup}>Close</button>
              </div>
            )}
          </div>
        </div>
      )}
    </>
  );
};

export default LookingFor;
