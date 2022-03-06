import React from "react";
import "./App.css";

function App() {
  return (
    <div>
      <div className="traffic-light-container">
        <input type="radio" readOnly className="light red" />
        <input type="radio" readOnly className="light yellow" />
        <input type="radio" readOnly className="light green" />
      </div>
    </div>
  );
}

export default App;
