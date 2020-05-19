import React, { useState } from "react";
import { Typography, makeStyles } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  container: {
    display: "flex",
    width: "100%",
    justifyContent: "center",
    marginLeft: "0px",
    [theme.breakpoints.up("md")]: {
      marginLeft: "-160px",
    },
  },
  label: {
    textAlign: "left",
    padding: "0 10px",
    color: "hsl(41, 9%, 35%)",
  },
  value: {
    float: "right",
    padding: "0 10px",
    color: "hsl(360, 79%, 32%)",
  },
}));

const Results = ({ measurements }) => {
  const classes = useStyles();
  const [types, typesSet] = useState([
    "Diameter (inch)",
    "Diameter (mm)",
    "Circumference (inch)",
    "Circumference (mm)",
    "British/Australia",
    "USA/Canada",
    "French",
    "German",
    "Japanese",
    "Swiss",
  ]);

  return (
    <section className={classes.container}>
      <div className={classes.label}>
        {types.map((val) => {
          return (
            <Typography
              style={{
                padding: "0 10px",
                margin: "35px 0",
                fontSize: 18,
              }}
              key={val}
            >
              {val}
            </Typography>
          );
        })}
      </div>

      <div className={classes.value}>
        {Object.values(measurements).map((val, index) => {
          return (
            <Typography
              style={{
                padding: "0 10px",
                margin: "35px 0",
                fontSize: 18,
                fontWeight: 600,
              }}
              key={index}
            >
              {val}
            </Typography>
          );
        })}
      </div>
    </section>
  );
};
export default Results;
