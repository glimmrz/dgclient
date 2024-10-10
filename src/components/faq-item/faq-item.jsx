import { useState } from "react";
import "./faq-item.css";

export default function FaqItem({ item }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="faq__row-left" style={{ width: "100%", cursor: "pointer" }}>
      <div className="dropdown-container" onClick={() => setIsOpen(!isOpen)}>
        <p className="faq__title" style={{ cursor: "pointer" }}>
          {item.question}
        </p>
        <img
          src="./assets/frontend/svg/svg_16.svg"
          loading="lazy"
          className={`faq__arrow ${isOpen ? "rotate" : ""}`}
          alt="Expand/Collapse"
        />
      </div>
      {isOpen && <p className="faq__answer">{item.answer}</p>}
    </div>
  );
}
