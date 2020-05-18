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
    minWidth: 160,
    marginTop: 50,
  },
}));

const Form = ({ handleChange, typeObj, measurements, selectedType }) => {
  const classes = useStyles();

  return (
    <FormControl className={classes.formControl}>
      <InputLabel shrink id="demo-simple-select-placeholder-label-label">
        {selectedType}
      </InputLabel>
      <Select
        labelId="demo-simple-select-placeholder-label-label"
        id="demo-simple-select-placeholder-label"
        defaultValue={20}
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
