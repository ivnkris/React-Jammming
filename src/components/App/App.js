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
  const [playlistName, setPlaylistName] = useState("My Awesome Playlist");
  const [playlistTracks, setPlaylistTracks] = useState([
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

  return (
    <div>
      <h1>
        Ja<span className="highlight">mmm</span>ing
      </h1>
      <div className="App">
        <SearchBar />
        <div className="App-playlist">
          <SearchResults searchResults={searchResults} />
          <Playlist
            playlistName={playlistName}
            playlistTracks={playlistTracks}
          />
        </div>
      </div>
    </div>
  );
}

export default App;
