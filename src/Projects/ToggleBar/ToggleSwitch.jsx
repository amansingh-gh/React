import { useState } from "react";
import "./ToggleSwitch.css";

export const ToggleSwitch = () => {
  const handleToggleSwitch = () => {
    setIsOn(!isOn);
  };

  const [isOn, setIsOn] = useState(false);
  return (
    <>
      <div
        className="toggle-switch"
        style={{ backgroundColor: isOn ? "#4caf50" : "#f44336" }}
        onClick={handleToggleSwitch}
      >
        <div className={`switch ${isOn ? "on" : "off"}`}>
          <span className="switch-state">{isOn ? "on" : "off"}</span>
        </div>
      </div>
    </>
  );
};
