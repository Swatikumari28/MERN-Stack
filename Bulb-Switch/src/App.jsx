import { useState } from "react";
import "./index.css"; // <- your external stylesheet

const App = () => {
  const [bulbs, setBulbs] = useState([false, false, false, false, false]);

  const toggleBulb = (index) => {
    const updated = [...bulbs];
    updated[index] = !updated[index];
    setBulbs(updated);
  };

  // Local inline component for bulb image
  const BulbImage = ({ isOn }) => {
    const bulbOn = "https://www.w3schools.com/js/pic_bulbon.gif";
    const bulbOff = "https://www.w3schools.com/js/pic_bulboff.gif";

    return (
      <img
        src={isOn ? bulbOn : bulbOff}
        alt={isOn ? "Bulb On" : "Bulb Off"}
        className={`bulb-img ${isOn ? "glow" : ""}`}
      />
    );
  };

  return (
    <div className="app">
      <h1>Bulbs Switch App</h1>
      <div className="bulbs">
        {bulbs.map((isOn, idx) => (
          <div key={idx} className="bulb-container">
            <BulbImage isOn={isOn} />
            <button onClick={() => toggleBulb(idx)}>
              {isOn ? "Turn Off" : "Turn On"}
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default App;
