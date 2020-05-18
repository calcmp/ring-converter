import React from "react";

const Results = ({ measurements }) => {
  return (
    <div>
      {Object.entries(measurements).map((val, key) => {
        return <p key={key}>{val}</p>;
      })}
    </div>
  );
};
export default Results;
