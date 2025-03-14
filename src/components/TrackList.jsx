import React from 'react';

const TrackList = ({ tracks, onPlayTrack, onDeleteTrack }) => {
  return (
    <div className="TrackList">
      <h2>Track List</h2>
      <ul>
        {tracks.map((track) => (
          <li key={track._id}>
            <div>
              <strong>{track.title}</strong> by {track.artist}
            </div>
            <button onClick={() => onPlayTrack(track)}>Play</button>
            <button onClick={() => onDeleteTrack(track._id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TrackList;
