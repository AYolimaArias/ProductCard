import { useState } from "react";
export default function CounterApp() {
  const [count, setCount] = useState(0);
  function handleCounter(value) {
    if (value === undefined) {
      setCount(0);
      return;
    }
    setCount(count + value);
  }

  return (
    <>
      <div className="container">
        <div className="counter_box">
          <div className="container_display">
            <p className="counter_title">Valor actual:</p>
            <p className="display">{count}</p>
          </div>
          <div className="button_counter">
            <button className="button" onClick={() => handleCounter(1)}>+</button>
            <button className="button" onClick={() => handleCounter(10)}>++</button>
            <button className="button" onClick={() => handleCounter()}>Reset</button>
            <button
              className="button" onClick={() => handleCounter(Math.floor(Math.random() * 41) - 20)}
            >
              Random
            </button>
            <button className="button" onClick={() => handleCounter(-1)}>-</button>
            <button className="button" onClick={() => handleCounter(-10)}>--</button>
          </div>
        </div>
      </div>      
    </>
  );
}
