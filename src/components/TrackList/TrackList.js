import React from "react";

import "./TrackList.css";
import Track from "../Track/Track";

function TrackList({ tracks, isRemoval, onAdd }) {
  return (
    <div className="TrackList">
      {tracks
        ? tracks.map((track) => (
            <Track
              key={track.id}
              track={track}
              isRemoval={isRemoval}
              onAdd={onAdd}
            />
          ))
        : null}
    </div>
  );
}

export default TrackList;
