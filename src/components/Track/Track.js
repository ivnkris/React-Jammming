import React from "react";

import "./Track.css";

function Track() {
  const renderAction = (isRemoval) => {
    return <button className="Track-action">{isRemoval ? "-" : "+"}</button>;
  };

  return (
    <div className="Track">
      <div className="Track-information">
        <h3>Track name</h3>
        <p>Artist | Album</p>
      </div>
      {renderAction(false)}
    </div>
  );
}

export default Track;
