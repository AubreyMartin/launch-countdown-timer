import { useState } from "react";
import "./App.css";
import Countdown from "./components/Countdown";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <Countdown />
    </div>
  );
}

export default App;
