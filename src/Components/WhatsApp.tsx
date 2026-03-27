import React from "react";
import "./WhatsApp.css";

const WHATSAPP_NUMBER = "919876543210";
const WHATSAPP_MESSAGE = "Hi Sambhav Vidya, I need guidance.";

const WhatsApp = () => {
  const link = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(WHATSAPP_MESSAGE)}`;

  return (
    <a
      href={link}
      target="_blank"
      rel="noreferrer"
      className="wa-float"
      aria-label="Chat on WhatsApp"
      title="Chat on WhatsApp"
    >
      <span className="wa-float__ring wa-float__ring--one" />
      <span className="wa-float__ring wa-float__ring--two" />
      <span className="wa-float__icon-wrap">
        <svg viewBox="0 0 32 32" aria-hidden="true">
          <path
            fill="currentColor"
            d="M19.11 17.13c-.28-.14-1.64-.81-1.9-.9-.25-.09-.43-.14-.61.14-.18.28-.71.9-.87 1.09-.16.19-.33.21-.61.07-.28-.14-1.17-.43-2.22-1.36-.82-.73-1.37-1.63-1.53-1.9-.16-.28-.02-.43.12-.57.13-.13.28-.33.42-.5.14-.16.19-.28.28-.47.09-.19.05-.35-.02-.5-.07-.14-.61-1.46-.84-2-.22-.53-.44-.46-.61-.47h-.52c-.19 0-.5.07-.76.35-.26.28-1 1-.99 2.45.02 1.45 1.04 2.84 1.18 3.03.14.19 2.02 3.09 4.89 4.33.68.29 1.21.47 1.62.6.68.22 1.31.19 1.8.12.55-.08 1.64-.67 1.87-1.32.23-.66.23-1.22.16-1.33-.07-.12-.25-.19-.53-.33z"
          />
          <path
            fill="currentColor"
            d="M16.02 3.2c-7.08 0-12.8 5.72-12.8 12.8 0 2.25.58 4.36 1.6 6.2L3.2 28.8l6.77-1.58a12.74 12.74 0 0 0 6.05 1.53h.01c7.07 0 12.8-5.73 12.8-12.8 0-3.43-1.34-6.66-3.77-9.08A12.72 12.72 0 0 0 16.02 3.2zm0 23.39h-.01a10.6 10.6 0 0 1-5.41-1.49l-.39-.23-4.02.94.95-3.92-.25-.4a10.59 10.59 0 0 1 1.62-13.3 10.56 10.56 0 0 1 7.5-3.11c2.84 0 5.5 1.1 7.5 3.1a10.55 10.55 0 0 1 3.1 7.5c0 5.84-4.76 10.6-10.59 10.6z"
          />
        </svg>
      </span>
    </a>
  );
};

export default WhatsApp;
