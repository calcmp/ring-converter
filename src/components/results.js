import React, { useState } from "react";
import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  container: {
    display: "flex",
    marginTop: 30,
    width: "100%",
    justifyContent: "center",
  },
  label: {
    textAlign: "left",
    padding: "0 20px",
  },
  value: {
    float: "right",
    padding: "0 20px",
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
          return <p key={val}>{val}</p>;
        })}
      </div>
      <div className={classes.value}>
        {Object.values(measurements).map((val, index) => {
          return <p key={index}>{val}</p>;
        })}
      </div>
    </section>
  );
};
export default Results;
