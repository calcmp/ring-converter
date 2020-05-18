import React from "react";

import {
  FormControl,
  FormLabel,
  RadioGroup,
  FormControlLabel,
  Radio,
  makeStyles,
} from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  formControl: {
    minWidth: 160,
  },
  label: {
    marginBottom: -6,
  },
}));

const RadioComponent = ({ handleChange, selectedType }) => {
  const classes = useStyles();

  return (
    <FormControl component="fieldset" className={classes.formControl}>
      <RadioGroup
        aria-label="type"
        name="type"
        value={selectedType}
        onChange={handleChange}
      >
        <FormControlLabel
          className={classes.label}
          value="Diameter (inch)"
          control={<Radio />}
          label="Diameter (inch)"
        />
        <FormControlLabel
          className={classes.label}
          value="Diameter (mm)"
          control={<Radio />}
          label="Diameter (mm)"
        />
        <FormControlLabel
          className={classes.label}
          value="Circumference (inch)"
          control={<Radio />}
          label="Circumference (inch)"
        />
        <FormControlLabel
          className={classes.label}
          value="Circumference (mm)"
          control={<Radio />}
          label="Circumference (mm)"
        />
        <FormControlLabel
          className={classes.label}
          value="British"
          control={<Radio />}
          label="British"
        />
        <FormControlLabel
          className={classes.label}
          value="USA"
          control={<Radio />}
          label="USA"
        />
        <FormControlLabel
          className={classes.label}
          value="French"
          control={<Radio />}
          label="French"
        />
        <FormControlLabel
          className={classes.label}
          value="German"
          control={<Radio />}
          label="German"
        />
        <FormControlLabel
          className={classes.label}
          value="Japanese"
          control={<Radio />}
          label="Japanese"
        />
        <FormControlLabel
          className={classes.label}
          value="Swiss"
          control={<Radio />}
          label="Swiss"
        />
      </RadioGroup>
    </FormControl>
  );
};

export default RadioComponent;
