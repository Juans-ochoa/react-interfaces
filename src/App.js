import React, { useState } from "react";
import InputSelect from "./components/inputSelect/InputSelect";

const items = [
  "Alligator mississippiensis",
  "Cygnus buccinator",
  "Panthera onca",
  "Vombatus ursinus",
  "Madoqua kirkii",
  "Procyon lotor",
  "unavailable",
  "Falco mexicanus",
  "Propithecus verreauxi",
  "Microcebus murinus",
  "Merops nubicus",
  "Sula dactylatra",
  "Sula dactylatra",
  "Fregata magnificans",
  "Laniaurius atrococcineus",
  "Cracticus nigroagularis",
  "Acridotheres tristis",
  "Eudyptula minor",
  "Gekko gecko",
  "Acrantophis madagascariensis",
  "Petaurus breviceps",
  "Certotrichas paena",
  "Otaria flavescens",
  "Chloephaga melanoptera",
  "Nannopterum harrisi",
  "Oryx gazella",
  "Corvus brachyrhynchos",
  "Halcyon smyrnesis",
  "Milvago chimachima",
  "Ovis ammon",
  "Alopochen aegyptiacus",
  "Semnopithecus entellus",
  "Thylogale stigmatica",
  "Ictonyx striatus",
  "Terrapene carolina",
  "Macaca nemestrina",
  "Estrilda erythronotos",
  "Chelodina longicollis",
  "Mephitis mephitis",
  "Macaca mulatta",
];

const App = () => {
  const [profesion, setProfesion] = useState("");
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
      <InputSelect
        items={items}
        name="profesion"
        onChange={({ value }) => setProfesion(value)}
        value={profesion}
        placeholder="Selecciona una opción..."
        complementProps={{ prams: 12 }}
      />
      <Accordion>
        <h1>Primer Accordion jejejeje</h1>
        <h1>Primer Accordion jejejeje</h1>
      </Accordion>
    </div>
  );
};

export default App;
