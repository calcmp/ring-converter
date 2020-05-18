import React, { useEffect, useState } from "react";
import "./App.css";

import Form from "./components/form";
import Radio from "./components/radio";
import Results from "./components/results";

function App() {
  const [measurements, measurementsSet] = useState({});
  const [typeObj, typeObjSet] = useState({});
  const [selectedType, selectedTypeSet] = useState("Diameter (mm)");

  useEffect(() => {
    getType();
  }, []);

  useEffect(() => {
    getType(selectedType);
  }, [selectedType]);

  const getType = async (value = selectedType) => {
    let response = await fetch("http://localhost:8081/api/map", {
      method: "POST",
      body: JSON.stringify({ input: value }),
    });
    let json = await response.json();
    let obj = JSON.parse(json);
    typeObjSet(obj);
  };

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
    getValues(event.target.value);
  };

  const handleRadioButtonChange = (event) => {
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
          typeObj={typeObj}
          measurements={measurements}
          selectedType={selectedType}
        />
        <Results measurements={measurements} />
      </header>
    </div>
  );
}

export default App;
