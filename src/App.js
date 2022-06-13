import React from "react";
import Accordion from "./components/Accordion";
import ItemAccordion from "./components/Accordion/ItemAccordion/Index";

const App = () => {
  return (
    <div
      style={{
        width: "95vw",
        display: "flex",
        justifyContent: "center",
        flexDirection: "column",
        textAlign: "center",
      }}
    >
      <Accordion>
        <ItemAccordion>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis ex
            corporis tenetur dolorum voluptate earum ad eum velit, nesciunt eos!
            Hic officia, cupiditate nobis aliquam odit quas sit corporis in!
          </p>
        </ItemAccordion>
        <ItemAccordion>
          <div style={{ padding: "2rem" }}>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis
              ex corporis tenetur dolorum voluptate earum ad eum velit, nesciunt
              eos! Hic officia, cupiditate nobis aliquam odit quas sit corporis
              in!
            </p>
            <h1>Dodofodfodsf</h1>
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit.
              Architecto itaque cum corrupti sint unde eius consequatur
              laboriosam at similique, assumenda facilis ullam sunt distinctio,
              voluptatum tempora culpa voluptatibus? Laborum, itaque.
            </p>
          </div>
        </ItemAccordion>
      </Accordion>
    </div>
  );
};

export default App;
