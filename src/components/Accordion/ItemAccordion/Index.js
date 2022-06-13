import React, { useRef } from "react";
import "./styles.css";

const ItemAccordion = ({ children, index, currentIndex, openAccordion }) => {
  const arrowRef = useRef(null);

  const showContent = () => {
    openAccordion(index);
    arrowRef.current.classList.toggle("active");
  };

  return (
    <div className="item__accordion">
      <button className="item__panel" onClick={showContent}>
        Open accordion
        <i className="arrow" ref={arrowRef} />
      </button>
      <div
        className={`item__content ${
          currentIndex === index ? "active__accordion" : ""
        }`}
      >
        {children}
      </div>
    </div>
  );
};

export default ItemAccordion;
