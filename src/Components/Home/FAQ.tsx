import React, { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { FaChevronDown } from "react-icons/fa";
import "./FAQ.css";

const faqs = [
  { q: "What courses do you offer?", a: "We offer a variety of online courses across multiple streams along with specialized programs such as drone pilot training and technical skill development." },
  { q: "How can I enroll in a course or training program?", a: "You can explore courses or training programs on our platform, select the one that suits your interests, and follow the enrollment process provided on the course page." },
  { q: "Do your programs provide certification?", a: "Yes, many programs provide recognized certifications upon successful completion of the course or training." },
  { q: "Who can join the drone training programs?", a: "Drone training programs are open to individuals who meet the eligibility criteria such as minimum education requirements and age guidelines specified for each course." },
  { q: "Can I get guidance to choose the right course or program?", a: "Yes, we offer guidance to help you choose the right course, university, or training program based on your interests and career goals." },
  {
  q: "Is there any support available after course completion?",
  a: "Yes, we provide post-course support including career guidance, placement assistance, and access to learning resources to help you grow further."
}
];

const FAQSection = () => {
  const cardRef = useRef<HTMLDivElement | null>(null);
  const imgRef = useRef<HTMLDivElement | null>(null);
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  useEffect(() => {
    if (!cardRef.current) return;
    gsap.fromTo(
      cardRef.current,
      { y: 40, opacity: 0 },
      { y: 0, opacity: 1, duration: 0.8 }
    );
  }, []);

  const handleMove = (e) => {
    if (!imgRef.current) return;

    const rect = imgRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    const rotateX = -(y / rect.height - 0.5) * 12;
    const rotateY = (x / rect.width - 0.5) * 12;

    imgRef.current.style.transform = `
      perspective(1000px)
      rotateX(${rotateX}deg)
      rotateY(${rotateY}deg)
    `;
  };

  const reset = () => {
    if (!imgRef.current) return;
    imgRef.current.style.transform =
      "perspective(1000px) rotateX(0deg) rotateY(0deg)";
  };

  return (
    <section className="faq">

      <div className="faq__card" ref={cardRef}>
        <h3 className="faq__card-heading">Frequently Asked Questions</h3>

        <div className="faq__body">
          {/* LEFT */}
          <div className="faq__left">
            {faqs.map((item, i) => (
              <div
                className={`faq__item ${openIndex === i ? "active" : ""}`}
                key={i}
              >
                <div
                  className="faq__question-btn"
                  role="button"
                  tabIndex={0}
                  onClick={(e) => {
                    e.preventDefault();
                    e.stopPropagation();
                    setOpenIndex((prev) => (prev === i ? null : i));
                  }}
                  onKeyDown={(e) => {
                    if (e.key === "Enter" || e.key === " ") {
                      e.preventDefault();
                      setOpenIndex((prev) => (prev === i ? null : i));
                    }
                  }}
                >
                  <span>{item.q}</span>
                  <FaChevronDown className="faq__chevron" />
                </div>
                <p>{item.a}</p>
              </div>
            ))}
          </div>

          {/* RIGHT */}
          <div
            className="faq__right"
            onMouseMove={handleMove}
            onMouseLeave={reset}
          >
            <div className="faq__img" ref={imgRef}>
              <img
                src="/Home/img3.png"
                alt="faq"
              />
            </div>
          </div>
        </div>

      </div>

    </section>
  );
};

export default FAQSection;