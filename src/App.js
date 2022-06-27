import React from "react";
import DatePicker from "./components/datePicker/DatePicker";

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
      <DatePicker />
    </div>
  );
};

export default App;
