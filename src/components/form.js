import React from "react";

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

const Form = ({ handleChange, typeObj, measurements, selectedType }) => {
  const classes = useStyles();

  return (
    <FormControl variant="outlined" className={classes.formControl}>
      <InputLabel id="demo-simple-select-outlined-label">
        {selectedType}
      </InputLabel>
      <Select
        labelId="demo-simple-select-outlined-label"
        id="demo-simple-select-outlined"
        value={measurements.selectedType}
        onChange={handleChange}
        label={selectedType}
      >
        {Object.entries(typeObj).map((val) => {
          return (
            <MenuItem key={val[0]} value={val[0]}>
              {val[1]}
            </MenuItem>
          );
        })}
      </Select>
    </FormControl>
  );
};
export default Form;
