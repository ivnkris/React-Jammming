import React from "react";

import "./TrackList.css";
import Track from "../Track/Track";

function TrackList({ tracks, isRemoval }) {
  return (
    <div className="TrackList">
      {tracks
        ? tracks.map((track) => (
            <Track
              key={track.id}
              name={track.name}
              artist={track.artist}
              album={track.album}
              isRemoval={isRemoval}
            />
          ))
        : null}
    </div>
  );
}

export default TrackList;
