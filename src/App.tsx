import React from "react";
import { useMachine } from "@xstate/react";
import { trafficLightMachine } from "./stateMachine";
import "./App.css";

let interval: NodeJS.Timeout;

function App() {
  const [toggleButton, setToggleButton] = React.useState(false);
  const [current, send] = useMachine(trafficLightMachine);

  const handleHandleNext = React.useCallback(() => {
    interval = setInterval(() => {
      send("NEXT");
    }, 2000);
  }, [send]);

  const handleHandleStart = React.useCallback(() => {
    setToggleButton(false);
    handleHandleNext();
  }, [handleHandleNext]);

  const handleStop = React.useCallback(() => {
    setToggleButton(true);
    clearInterval(interval);
  }, []);

  React.useEffect(() => {
    handleHandleNext();
    return () => {
      handleStop();
    };
  }, [handleHandleNext, handleStop]);

  return (
    <React.Fragment>
      <div className="container">
        <div className="pole" />
        <div className="traffic-light">
          <input
            type="radio"
            readOnly
            className="light red"
            checked={current.matches("red")}
          />
          <input
            type="radio"
            readOnly
            className="light yellow"
            checked={current.matches("yellow")}
          />
          <input
            type="radio"
            readOnly
            className="light green"
            checked={current.matches("green")}
          />
          {toggleButton ? (
            <>
              <button onClick={handleHandleStart}>Start</button>
            </>
          ) : (
            <>
              <button onClick={handleStop}>Stop</button>
            </>
          )}
        </div>
      </div>
    </React.Fragment>
  );
}

export default App;
