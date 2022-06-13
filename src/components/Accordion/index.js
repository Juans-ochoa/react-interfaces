import React, { useState } from "react";

const Accordion = ({ children }) => {
  const [currentIndex, setCurrentIndex] = useState(null);
  const openAccordion = (index) => {
    if (index === currentIndex) {
      setCurrentIndex(null);
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
