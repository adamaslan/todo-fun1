import "./App.css";
import Counter from "./components/Counter";
import Timer from "./components/Timer";
import React from "react";
function App() {
  return (
    <div>
      <Counter />
      <div className="fun">Sup Dog, What do you have to do?</div>
      <Timer />
    </div>
  );
}
export default App;
