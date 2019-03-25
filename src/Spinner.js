import React from "react";

const Spinner = () => {
  return (
    <div className="ui active dimmer">
      <div className="ui big text loader">Waiting For Permission to Locate Location...</div>
    </div>
  );
};

export default Spinner;
