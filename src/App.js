import logo from "./logo.svg";
import "./App.css";
import { useState, useEffect } from "react";
import { UsMap } from "./components/UsMap/UsMap";
import { Navbar } from "./components/Navbar/Navbar";
import { PredictionArea } from "./components/PredictionArea/PredictionArea";

function App() {
  const [data, setData] = useState([{}]);

  /*
  useEffect(() => {
    fetch("/members")
      .then((res) => res.json())
      .then((data) => {
        setData(data);
        console.log(data, "hi");
      });
  }, []);
  */

  return (
    <div className="App">
      <Navbar />
      <UsMap />
      <PredictionArea />
    </div>
  );
}

export default App;
