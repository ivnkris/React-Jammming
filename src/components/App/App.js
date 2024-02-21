import React from "react";
import { useState } from "react";

import "./App.css";

import SearchBar from "../SearchBar/SearchBar";
import SearchResults from "../SearchResults/SearchResults";
import Playlist from "../Playlist/Playlist";

function App() {
  const [searchResults, setSearchResults] = useState([
    {
      id: 1,
      name: "Uptown Funk",
      artist: "Mark Ronson",
      album: "Uptown Special",
    },
    {
      id: 2,
      name: "Fast Car",
      artist: "Luke Combs",
      album: "Gettin' Old",
    },
    {
      id: 3,
      name: "SHAQ & KOBE",
      artist: "Rick Ross & Meek Mill",
      album: "Too Good To Be True",
    },
  ]);
  const [playlistName, setPlaylistName] = useState("New Playlist");
  const [playlistTracks, setPlaylistTracks] = useState([]);

  const addTrack = (track) => {
    if (playlistTracks.find((savedTrack) => savedTrack.id === track.id)) {
      return;
    } else {
      setPlaylistTracks((prev) => [...prev, track]);
    }
  };

  const removeTrack = (track) => {
    setPlaylistTracks((prev) =>
      prev.filter((savedTrack) => savedTrack.id !== track.id)
    );
  };

  const updatePlaylistName = (name) => {
    setPlaylistName(name);
  };

  return (
    <div>
      <h1>
        Ja<span className="highlight">mmm</span>ing
      </h1>
      <div className="App">
        <SearchBar />
        <div className="App-playlist">
          <SearchResults searchResults={searchResults} onAdd={addTrack} />
          <Playlist
            playlistName={playlistName}
            playlistTracks={playlistTracks}
            onRemove={removeTrack}
            onNameChange={updatePlaylistName}
          />
        </div>
      </div>
    </div>
  );
}

export default App;
