// src/App.jsx

import React, { useState, useEffect } from 'react';
import TrackForm from './components/TrackForm';
import TrackList from './components/TrackList';
import NowPlaying from './components/NowPlaying';
import { getAllTracks } from './services/trackService';

const App = () => {
  const [tracks, setTracks] = useState([]);
  const [currentTrack, setCurrentTrack] = useState(null);

  // Fetch tracks from the backend
  const fetchTracks = async () => {
    const fetchedTracks = await getAllTracks();
    setTracks(fetchedTracks);
  };

  // Call fetchTracks on mount
  useEffect(() => {
    fetchTracks();
  }, []);

  const handlePlayTrack = (track) => {
    setCurrentTrack(track); // Set the track as currently playing
  };

  const handleAddTrack = (newTrack) => {
    setTracks((prevTracks) => [...prevTracks, newTrack]);
  };

  const handleDeleteTrack = (trackId) => {
    setTracks((prevTracks) => prevTracks.filter((track) => track._id !== trackId));
  };

  return (
    <div className="App">
      <h1>REACTVILLE JUKEBOX</h1>
      <TrackForm addTrack={handleAddTrack} />
      <TrackList
        tracks={tracks}
        onPlayTrack={handlePlayTrack}
        onDeleteTrack={handleDeleteTrack}
      />
      <NowPlaying track={currentTrack} /> {/* Pass the current track to NowPlaying */}
    </div>
  );
};

export default App;
