// src/components/NowPlaying.jsx

import React from 'react';

const NowPlaying = ({ track }) => {
  if (!track) {
    return <div>No track is currently playing.</div>;
  }

  return (
    <div className="NowPlaying">
      
      <div>
        {track.title} by {track.artist}
      </div>
    </div>
  );
};

export default NowPlaying;
