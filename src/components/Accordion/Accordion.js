import React from "react";
import "./styles.css";

const Accordion = ({ children }) => {
  return <section className="accordion__container">{children}</section>;
};

export default Accordion;
