import CounterApp from "./CounterApp";
import "./styles.css";

export default function App() {
  return (
    <div className="App">
      <CounterApp counterInitialvalue={5} />
    </div>
  );
}
