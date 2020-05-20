import React, { useEffect, useState } from "react";
import Drawer from "./components/drawer";

function App() {
  const [measurements, measurementsSet] = useState({});
  const [typeObj, typeObjSet] = useState({});
  const [selectedType, selectedTypeSet] = useState("Diameter (mm)");

  useEffect(() => {
    getType();
    getValues();
  }, []);

  useEffect(() => {
    getType(selectedType);
  }, [selectedType]);

  const getType = async (value = selectedType) => {
    let response = await fetch("https://callumpenny.dev/api/map", {
      method: "POST",
      body: JSON.stringify({ input: value }),
    });
    let json = await response.json();
    let obj = JSON.parse(json);
    typeObjSet(obj);
  };

  const getValues = async (value = "20") => {
    let response = await fetch("https://callumpenny.dev/api/convert", {
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
    <Drawer
      handleRadioButtonChange={handleRadioButtonChange}
      handleFormValueChange={handleFormValueChange}
      typeObj={typeObj}
      measurements={measurements}
      selectedType={selectedType}
    />
  );
}

export default App;
