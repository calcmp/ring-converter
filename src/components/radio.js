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
        <FormControlLabel
          value="DiamInch"
          control={<Radio />}
          label="Inside Diamater (inches)"
        />
        <FormControlLabel
          value="DiamMM"
          control={<Radio />}
          label="Inside Diameter (mm)"
        />
        <FormControlLabel
          value="CircInch"
          control={<Radio />}
          label="Inside Circumfrance (inches)"
        />
        <FormControlLabel
          value="CircMM"
          control={<Radio />}
          label="Inside Circumfrance (mm)"
        />
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
