import React, { useState } from "react";

const Accordion = ({ children }) => {
  const [currentIndex, setCurrentIndex] = useState(-1);
  const openAccordion = (index) => {
    if (index === currentIndex) {
      setCurrentIndex(-1);
      return;
    }

    setCurrentIndex(index);
  };

  return (
    <article className="accordion__section">
      {React.Children.map(children, (child, index) => {
        if (React.isValidElement(child))
          return React.cloneElement(child, {
            index,
            currentIndex,
            openAccordion,
          });
        return child;
      })}
    </article>
  );
};

export default Accordion;
