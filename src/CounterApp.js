import { useState } from "react";

export default function CounterApp({ counterInitialvalue }) {
  const [counterValue, setCounterValue] = useState(counterInitialvalue);

  const incrementCounterValue = () => {
    setCounterValue((prev) => prev + 1);
  };

  const decrementCounterValue = () => {
    setCounterValue((prev) => prev - 1);
  };

  const resetCounterValue = () => {
    setCounterValue((prev) => prev * 0);
  };

  const switchCounterSign = () => {
    setCounterValue((prev) => prev * -1);
  };

  return (
    <>
      <h1>Counter APP</h1>
      <p>
        {" "}
        Counter value:
        <span data-testid="count"> {counterValue} </span>
      </p>

      <br />
      <section className="flex-container">
        <button onClick={incrementCounterValue}>Increment</button>
        <button onClick={decrementCounterValue}>Decrement</button>
        <button onClick={resetCounterValue}>Reset</button>
        <button onClick={switchCounterSign}>Switch sign</button>
      </section>
    </>
  );
}
