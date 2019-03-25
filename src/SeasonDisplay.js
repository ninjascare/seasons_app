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
  const text = season === "winter" ? "Burr It's Chilly" : "Let's Hit the Beach";
  const icon = season === "winter" ? "snowflake" : "sun";

  return (
    <div>
      <i className={`${icon} icon`} />
      <h1>{text}</h1>
      <i className={`${icon} icon`} />
    </div>
  );
};

export default SeasonDisplay;
