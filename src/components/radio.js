import React from "react";

import {
  FormControl,
  RadioGroup,
  FormControlLabel,
  Radio,
  makeStyles,
  Divider,
} from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  formControl: {
    minWidth: 160,
  },
  label: {},
  radio: {
    color: "hsl(39, 11%, 69%)",
    "&$checked": {
      color: "hsl(36, 77%, 49%)",
    },
  },
  checked: {},
  checkboxLabel: {
    color: "hsl(41, 8%, 48%)",
    fontSize: 17,
    marginLeft: 6,
    marginBottom: 18,
    marginTop: 18,
  },
}));

const RadioComponent = ({ handleRadioButtonChange, selectedType }) => {
  const classes = useStyles();

  return (
    <FormControl component="fieldset" className={classes.formControl}>
      <RadioGroup
        aria-label="type"
        name="type"
        value={selectedType}
        onChange={handleRadioButtonChange}
      >
        <FormControlLabel
          classes={{
            label: classes.checkboxLabel,
          }}
          value="Diameter (inch)"
          control={
            <Radio
              classes={{ root: classes.radio, checked: classes.checked }}
            />
          }
          label="Diameter (inch)"
        />
        <Divider />
        <FormControlLabel
          classes={{
            label: classes.checkboxLabel,
          }}
          value="Diameter (mm)"
          control={
            <Radio
              classes={{ root: classes.radio, checked: classes.checked }}
            />
          }
          label="Diameter (mm)"
        />
        <Divider />
        <FormControlLabel
          classes={{
            label: classes.checkboxLabel,
          }}
          value="Circumference (inch)"
          control={
            <Radio
              classes={{ root: classes.radio, checked: classes.checked }}
            />
          }
          label="Circumference (inch)"
        />
        <Divider />
        <FormControlLabel
          classes={{
            label: classes.checkboxLabel,
          }}
          value="Circumference (mm)"
          control={
            <Radio
              classes={{ root: classes.radio, checked: classes.checked }}
            />
          }
          label="Circumference (mm)"
        />
        <Divider />
        <FormControlLabel
          classes={{
            label: classes.checkboxLabel,
          }}
          value="British"
          control={
            <Radio
              classes={{ root: classes.radio, checked: classes.checked }}
            />
          }
          label="British"
        />
        <Divider />
        <FormControlLabel
          classes={{
            label: classes.checkboxLabel,
          }}
          value="USA"
          control={
            <Radio
              classes={{ root: classes.radio, checked: classes.checked }}
            />
          }
          label="USA"
        />
        <Divider />
        <FormControlLabel
          classes={{
            label: classes.checkboxLabel,
          }}
          value="French"
          control={
            <Radio
              classes={{ root: classes.radio, checked: classes.checked }}
            />
          }
          label="French"
        />
        <Divider />
        <FormControlLabel
          classes={{
            label: classes.checkboxLabel,
          }}
          value="German"
          control={
            <Radio
              classes={{ root: classes.radio, checked: classes.checked }}
            />
          }
          label="German"
        />
        <Divider />
        <FormControlLabel
          classes={{
            label: classes.checkboxLabel,
          }}
          value="Japanese"
          control={
            <Radio
              classes={{ root: classes.radio, checked: classes.checked }}
            />
          }
          label="Japanese"
        />
        <Divider />
        <FormControlLabel
          classes={{
            label: classes.checkboxLabel,
          }}
          value="Swiss"
          control={
            <Radio
              classes={{ root: classes.radio, checked: classes.checked }}
            />
          }
          label="Swiss"
        />
      </RadioGroup>
    </FormControl>
  );
};

export default RadioComponent;
