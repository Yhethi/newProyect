import { useState, useEffect } from "react";
import reactLogo from "./assets/react.svg";
// import './App.css'
import { PrimerComponente } from "./components/PrimerComponente";
import { SegundoComponente } from "./components/SegundoComponente";

function App() {
  const [data, setData] = useState("");

  useEffect(() => setData("qwerty"));

  return (
    <div className="bg-black h-screen w-screen p-4">
      <div className="bg-[#0fff23da] text-xl rounded-md">
        <PrimerComponente parentToChild={data} />
        <SegundoComponente />
      </div>
    </div>
  );
}

export default App;
