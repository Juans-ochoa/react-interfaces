import React, { useState } from "react";
import { InputSelect } from "./components/inputSelect/InputSelect";

const items = [
  { label: "Alligator mississippiensis", value: "Alligator mississippiensis" },
  { label: "Cygnus buccinator", value: "Cygnus buccinator" },
  { label: "Panthera onca", value: "Panthera onca" },
  { label: "Vombatus ursinus", value: "Vombatus ursinus" },
  { label: "Madoqua kirkii", value: "Madoqua kirkii" },
  { label: "Procyon lotor", value: "Procyon lotor" },
  { label: "unavailable", value: "unavailable" },
  { label: "Falco mexicanus", value: "Falco mexicanus" },
  { label: "Propithecus verreauxi", value: "Propithecus verreauxi" },
  { label: "Microcebus murinus", value: "Microcebus murinus" },
  { label: "Merops nubicus", value: "Merops nubicus" },
  { label: "Sula dactylatra", value: "Sula dactylatra" },
  { label: "Sula dactylatra", value: "Sula dactylatra" },
  { label: "Fregata magnificans", value: "Fregata magnificans" },
  { label: "Laniaurius atrococcineus", value: "Laniaurius atrococcineus" },
  { label: "Cracticus nigroagularis", value: "Cracticus nigroagularis" },
  { label: "Acridotheres tristis", value: "Acridotheres tristis" },
  { label: "Eudyptula minor", value: "Eudyptula minor" },
  { label: "Gekko gecko", value: "Gekko gecko" },
  {
    label: "Acrantophis madagascariensis",
    value: "Acrantophis madagascariensis",
  },
  { label: "Petaurus crevice's", value: "Petaurus breviceps" },
  { label: "Certotrichas paena", value: "Certotrichas paena" },
  { label: "Otaria flavescens", value: "Otaria flavescens" },
  { label: "Chloephaga melanoptera", value: "Chloephaga melanoptera" },
  { label: "Nannopterum harrisi", value: "Nannopterum harrisi" },
  { label: "Oryx gazella", value: "Oryx gazella" },
  { label: "Corvus brachyrhynchos", value: "Corvus brachyrhynchos" },
  { label: "Halcyon smyrnesis", value: "Halcyon smyrnesis" },
  { label: "Milvago chimachima", value: "Milvago chimachima" },
  { label: "Ovis ammon", value: "Ovis ammon" },
  { label: "Alopochen aegyptiacus", value: "Alopochen aegyptiacus" },
  { label: "Semnopithecus entellus", value: "Semnopithecus entellus" },
  { label: "Thylogale stigmatica", value: "Thylogale stigmatica" },
  { label: "Ictonyx striatus", value: "Ictonyx striatus" },
  { label: "Terrapene carolina", value: "Terrapene carolina" },
  { label: "Macaca nemestrina", value: "Macaca nemestrina" },
  { label: "Estrilda erythronotos", value: "Estrilda erythronotos" },
  { label: "Chelodina longicollis", value: "Chelodina longicollis" },
  { label: "Mephitis mephitis", value: "Mephitis mephitis" },
  { label: "Macaca mulatta", value: "Macaca mulatta" },
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
        options={items}
        name="profesion"
        onChange={({ value }) => setProfesion(value)}
        onBlur={(e) => console.log("ONBLUR", e)}
        value={items.filter((item) => item.value === profesion)}
        placeholder="Selecciona una opción..."
        complementProps={{ prams: 12 }}
      />
    </div>
  );
};

export default App;
