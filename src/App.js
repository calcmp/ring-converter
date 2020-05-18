import React, { useEffect, useState } from "react";
import "./App.css";

import Form from "./components/form";
import Radio from "./components/radio";

function App() {
  const [measurements, measurementsSet] = useState({});
  const [selectedType, selectedTypeSet] = useState("idMillis");

  useEffect(() => {
    getValues();
  }, []);

  const getValues = async (value) => {
    let response = await fetch("http://localhost:8081/api/convert", {
      method: "POST",
      body: JSON.stringify({ input: value }),
    });
    let json = await response.json();
    console.log(json);
    measurementsSet(json);
  };

  const handleFormValueChange = (event) => {
    console.log(event.target.value);
    getValues(event.target.value);
  };

  const handleRadioButtonChange = (event) => {
    console.log(event.target.value);
    selectedTypeSet(event.target.value);
  };

  return (
    <div className="App">
      <header className="App-header">
        <Radio
          handleChange={handleRadioButtonChange}
          selectedType={selectedType}
        />
        <Form
          handleChange={handleFormValueChange}
          measurements={measurements}
          selectedType={selectedType}
        />
      </header>
    </div>
  );
}

export default App;
