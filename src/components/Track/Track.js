import React from "react";

import "./Track.css";

function Track({ name, artist, album, isRemoval }) {
  const renderAction = (isRemoval) => {
    return <button className="Track-action">{isRemoval ? "-" : "+"}</button>;
  };

  return (
    <div className="Track">
      <div className="Track-information">
        <h3>{name}</h3>
        <p>
          {artist} | {album}
        </p>
      </div>
      {renderAction(isRemoval)}
    </div>
  );
}

export default Track;
