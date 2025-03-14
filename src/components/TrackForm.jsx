import React, { useState } from 'react';
import { createTrack } from '../services/trackService'; // Import the createTrack function

const TrackForm = ({ addTrack }) => { // Destructure addTrack from props
  const [title, setTitle] = useState('');
  const [artist, setArtist] = useState('');
  const [error, setError] = useState('');

  // Function to handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!title || !artist) {
      setError('Title and Artist are required!');
      return;
    }

    const newTrack = { title, artist };
    try {
      const createdTrack = await createTrack(newTrack); // Call createTrack to add the track to the backend
      addTrack(createdTrack); // Add the new track to the front-end state
      setTitle(''); // Clear the form fields
      setArtist('');
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Add New Track</h2>
      {error && <p style={{ color: 'red' }}>{error}</p>}
      <label>
        Title:
        <input
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
      </label>
      <br />
      <label>
        Artist:
        <input
          type="text"
          value={artist}
          onChange={(e) => setArtist(e.target.value)}
        />
      </label>
      <br />
      <button type="submit">Add Track</button>
    </form>
  );
};

export default TrackForm;
