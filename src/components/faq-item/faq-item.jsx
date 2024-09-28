import { useState } from "react";

export default function FaqItem({ item }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div>
      <div className="faq__row-left">
        <p
          className="faq__title"
          style={{ cursor: "pointer" }}
          onClick={() => setIsOpen(!isOpen)}
        >
          {item.question}
        </p>
        {isOpen && <p className="faq__answer">{item.answer}</p>}
      </div>
    </div>
  );
}
