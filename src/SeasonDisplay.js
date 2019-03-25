import React from "react";

const determineSeason = (lat, month) => {
  if (month > 2 && month < 9) {
    return lat > 0 ? "summer" : "winter";
  } else {
    return lat > 0 ? "winter" : "summer";
  }
};

const SeasonDisplay = props => {
  const season = determineSeason(props.lat, new Date().getMonth());
  return <div>{}</div>;
};

export default SeasonDisplay;
