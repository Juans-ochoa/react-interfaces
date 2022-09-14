import React from "react";
import InputAutoPredictive from "./components/inputAutoPredective";

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
      <h1>Content here!</h1>
      <InputAutoPredictive />
    </div>
  );
};

export default App;
