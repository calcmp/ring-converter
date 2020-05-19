import React from "react";

import {
  Select,
  FormControl,
  InputLabel,
  MenuItem,
  makeStyles,
} from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  container: {
    marginTop: 10,
    display: "flex",
    textAlign: "center",
    justifyContent: "center",
    [theme.breakpoints.up("sm")]: {
      justifyContent: "flex-start",
    },
  },
  formControl: {
    margin: theme.spacing(1),
    minWidth: 160,
    marginTop: 20,
  },
}));

const Form = ({
  handleFormValueChange,
  typeObj,
  measurements,
  selectedType,
}) => {
  const classes = useStyles();

  return (
    <section className={classes.container}>
      <FormControl className={classes.formControl}>
        <InputLabel
          style={{ fontSize: 16, color: "hsl(184, 91%, 17%)" }}
          shrink
          id="demo-simple-select-placeholder-label-label"
        >
          {selectedType}
        </InputLabel>
        <Select
          labelId="demo-simple-select-placeholder-label-label"
          id="demo-simple-select-placeholder-label"
          defaultValue={20}
          value={measurements.selectedType}
          onChange={handleFormValueChange}
          label={selectedType}
          style={{ fontSize: 18, color: "hsl(184, 91%, 17%)" }}
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
    </section>
  );
};
export default Form;
