import React from "react";

import "./Track.css";

function Track({ track, isRemoval, onAdd }) {
  const renderAction = (isRemoval) => {
    return (
      <button className="Track-action" onClick={addTrack}>
        {isRemoval ? "-" : "+"}
      </button>
    );
  };

  const addTrack = () => {
    onAdd(track);
  };

  return (
    <div className="Track">
      <div className="Track-information">
        <h3>{track.name}</h3>
        <p>
          {track.artist} | {track.album}
        </p>
      </div>
      {renderAction(isRemoval)}
    </div>
  );
}

export default Track;
