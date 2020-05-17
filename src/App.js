import React, { useEffect, useState } from "react";
import "./App.css";
import {
  Select,
  FormControl,
  InputLabel,
  MenuItem,
  makeStyles,
} from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120,
  },
  selectEmpty: {
    marginTop: theme.spacing(2),
  },
}));

function App() {
  const classes = useStyles();
  const [age, setAge] = useState("");

  useEffect(() => {
    getValues();
  }, []);

  const getValues = async () => {
    let response = await fetch("http://localhost:8081/api/convert", {
      method: "POST",
      body: JSON.stringify({ input: 44 }),
    });
    let json = await response.json();
    console.log(json);
  };

  const handleChange = (event) => {
    setAge(event.target.value);
  };

  return (
    <div className="App">
      <header className="App-header">
        <FormControl variant="outlined" className={classes.formControl}>
          <InputLabel id="demo-simple-select-outlined-label">Age</InputLabel>
          <Select
            labelId="demo-simple-select-outlined-label"
            id="demo-simple-select-outlined"
            value={age}
            onChange={handleChange}
            label="Age"
          >
            <MenuItem value="">
              <em>None</em>
            </MenuItem>
            <MenuItem value={10}>Ten</MenuItem>
            <MenuItem value={20}>Twenty</MenuItem>
            <MenuItem value={30}>Thirty</MenuItem>
          </Select>
        </FormControl>
      </header>
    </div>
  );
}

export default App;
