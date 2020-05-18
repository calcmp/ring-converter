import React from "react";

import {
  FormControl,
  FormLabel,
  RadioGroup,
  FormControlLabel,
  Radio,
} from "@material-ui/core";

const RadioComponent = ({ handleChange, selectedType }) => {
  return (
    <FormControl component="fieldset">
      <FormLabel component="legend">Type</FormLabel>
      <RadioGroup
        aria-label="type"
        name="type"
        value={selectedType}
        onChange={handleChange}
      >
        <FormControlLabel value="British" control={<Radio />} label="British" />
        <FormControlLabel value="USA" control={<Radio />} label="USA" />
        <FormControlLabel value="French" control={<Radio />} label="French" />
        <FormControlLabel value="German" control={<Radio />} label="German" />
        <FormControlLabel
          value="Japanese"
          control={<Radio />}
          label="Japanese"
        />
        <FormControlLabel value="Swiss" control={<Radio />} label="Swiss" />
      </RadioGroup>
    </FormControl>
  );
};

export default RadioComponent;
