import React from "react";
import { useState } from "react";

const App = () => {
  const [temperatureValue, setTemperatureValue] = useState(10);
  const [temperatureColor, setTemperatureColor] = useState('cold');

  const incrementHandler = () => {
    if(temperatureValue === 30) return;
    const newValue = temperatureValue + 1;
    if(newValue >= 15){
      setTemperatureColor('hot');
    }
    // if (newValue <= 30){
    // setTemperatureValue(newValue);
    // } 
    setTemperatureValue(newValue);
  }
  const decrementHandler = () => {
    if(temperatureValue === 0) return;
    const newValue = temperatureValue - 1;
    if(newValue < 15){
      setTemperatureColor('cold');
    }
    // if (newValue >= 0){
    // setTemperatureValue(newValue);
    // }
    setTemperatureValue(newValue);
  }
  return (
    <div className="app-container">
      <div className="temperature-display-container">
        <div className={`temperature-display ${temperatureColor}`}>{temperatureValue} °C</div>
      </div>
      <div className="button-container">
        <button onClick={decrementHandler}>-</button>
        <button onClick={incrementHandler}>+</button>
      </div>
    </div>
  )
}
export default App;