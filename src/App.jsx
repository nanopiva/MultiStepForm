import "./App.css";
import FormComplete from "./FormComplete";
import CurrentStep from "./CurrentStep";
import { useState } from "react";

function App() {
  const [step, setStep] = useState(1);
  return (
    <main className="full-container">
      <CurrentStep step={step} />
      <FormComplete setStep={setStep} step={step} />
    </main>
  );
}

export default App;
