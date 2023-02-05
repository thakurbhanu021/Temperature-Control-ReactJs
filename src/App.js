import React from "react";
import { useState } from "react";

const App = () => {
  const [temperatureValue, setTemperatureValue] = useState(10);

  const incrementHandler = () => {
    setTemperatureValue(temperatureValue+1);
  }
  const decrementHandler = () => {
    setTemperatureValue(temperatureValue-1);
  }
  return (
    <div className="app-container">
      <div className="temperature-display-container">
        <div className="temperature-display cold">{temperatureValue} °C</div>
      </div>
      <div className="button-container">
        <button onClick={decrementHandler}>-</button>
        <button onClick={incrementHandler}>+</button>
      </div>
    </div>
  )
}
export default App;