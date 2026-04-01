import React, { useRef, useEffect } from "react";
import { gsap } from "gsap";
import "./Reviews.css";

const row1 = [
  {
    name: "Aarav Sharma",
    role: "Student",
    avatar: "https://i.pravatar.cc/80?img=11",
    text: "Iss platform ne meri life badal di. Online degree lena itna easy aur flexible tha ki main apni job ke saath bhi kar paya.",
    purple: false,
  },
  {
    name: "Priya Mehta",
    role: "Student",
    avatar: "https://i.pravatar.cc/80?img=5",
    text: "Professors bahut helpful hain aur course material world-class hai. Mujhe apni university se bilkul satisfy hun.",
    purple: true,
  },
  {
    name: "Rohit Verma",
    role: "Student",
    avatar: "https://i.pravatar.cc/80?img=12",
    text: "Best decision tha online MBA karna. Career mein promotion mil gayi aur confidence bhi badha. Highly recommended!",
    purple: false,
  },
  {
    name: "Sneha Gupta",
    role: "Student",
    avatar: "https://i.pravatar.cc/80?img=9",
    text: "Live sessions aur recorded lectures dono available hain jo mujhe apni pace pe padhne dete hain. Amazing experience!",
    purple: true,
  },
  {
    name: "Karan Singh",
    role: "Student",
    avatar: "https://i.pravatar.cc/80?img=15",
    text: "Fee structure bahut reasonable hai aur EMI option bhi hai. Quality education at affordable price — best combo!",
    purple: false,
  },
  {
    name: "Divya Nair",
    role: "Student",
    avatar: "https://i.pravatar.cc/80?img=47",
    text: "Support team 24/7 available rehti hai. Har query ka jawab milta hai turant. Ek dum mast platform hai yaar!",
    purple: true,
  },
];

const row2 = [
  {
    name: "Arjun Patel",
    role: "Student",
    avatar: "https://i.pravatar.cc/80?img=33",
    text: "Placement support ne mujhe dream company mein job dilwayi. Campus ka ek naya meaning samajh aaya mujhe.",
    purple: true,
  },
  {
    name: "Megha Joshi",
    role: "Student",
    avatar: "https://i.pravatar.cc/80?img=44",
    text: "Interactive quizzes aur assignments se learning bahut engaging ho gayi. Boring lectures ka zamana gaya!",
    purple: false,
  },
  {
    name: "Vikas Yadav",
    role: "Student",
    avatar: "https://i.pravatar.cc/80?img=53",
    text: "Ghar baithe UGC recognized degree lena dream tha jo is platform ne sach kar diya. Zindagi set ho gayi!",
    purple: true,
  },
  {
    name: "Ananya Roy",
    role: "Student",
    avatar: "https://i.pravatar.cc/80?img=23",
    text: "Mujhe lagta tha online education mein quality nahi hogi but yahan aake sab change ho gaya. Superb faculty!",
    purple: false,
  },
  {
    name: "Rahul Tiwari",
    role: "Student",
    avatar: "https://i.pravatar.cc/80?img=60",
    text: "Mere liye sabse bada plus point tha flexibility. Main apne schedule ke hisaab se padhta tha aur result bhi accha aaya.",
    purple: true,
  },
  {
    name: "Pooja Agarwal",
    role: "Student",
    avatar: "https://i.pravatar.cc/80?img=41",
    text: "Peer learning community bahut active hai. Students ek doosre ki help karte hain — sach mein ek family feel hoti hai!",
    purple: false,
  },
];

const ReviewCard = ({ name, role, avatar, text, purple }: (typeof row1)[0]) => (
  <div className={`rv-card ${purple ? "rv-card--purple" : ""}`}>
    <div className="rv-card__quote">
      <span className="rv-card__quote-icon">❝</span>
      <div className="rv-card__quote-line" />
    </div>
    <p className="rv-card__text">{text}</p>
    <div className="rv-card__footer">
      <img src={avatar} alt={name} className="rv-card__avatar" />
      <div className="rv-card__author">
        <strong>{name}</strong>
        <span>{role}</span>
      </div>
    </div>
    <div className="rv-card__bottom-line" />
  </div>
);

const ReviewsSection = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const track1Ref = useRef<HTMLDivElement>(null);
  const track2Ref = useRef<HTMLDivElement>(null);
  const tl1Ref = useRef<gsap.core.Tween | null>(null);
  const tl2Ref = useRef<gsap.core.Tween | null>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Row 1: left → right (negative to zero, repeating)
      tl1Ref.current = gsap.to(track1Ref.current, {
        xPercent: -50,
        duration: 32,
        ease: "linear",
        repeat: -1,
      });

      // Row 2: right → left (zero to negative, reversed)
      gsap.set(track2Ref.current, { xPercent: -50 });
      tl2Ref.current = gsap.to(track2Ref.current, {
        xPercent: 0,
        duration: 32,
        ease: "linear",
        repeat: -1,
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const pause = () => {
    tl1Ref.current?.pause();
    tl2Ref.current?.pause();
  };
  const resume = () => {
    tl1Ref.current?.resume();
    tl2Ref.current?.resume();
  };

  return (
    <section className="rv" ref={sectionRef}>
      {/* Heading */}
      <div className="rv__head">
        <h2 className="rv__title">What Our Students Say</h2>
        <p className="rv__sub">
          Real words from real learners who transformed their careers with us.
        </p>
      </div>

      {/* Row 1 — scrolls LEFT */}
      <div className="rv__slider" onMouseEnter={pause} onMouseLeave={resume}>
        <div className="rv__track" ref={track1Ref}>
          {[...row1, ...row1].map((r, i) => (
            <ReviewCard key={`r1-${i}`} {...r} />
          ))}
        </div>
      </div>

      {/* Row 2 — scrolls RIGHT */}
      <div className="rv__slider" onMouseEnter={pause} onMouseLeave={resume}>
        <div className="rv__track" ref={track2Ref}>
          {[...row2, ...row2].map((r, i) => (
            <ReviewCard key={`r2-${i}`} {...r} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ReviewsSection;
