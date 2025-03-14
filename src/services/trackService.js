const BASE_URL = `${import.meta.env.VITE_BACK_END_SERVER_URL}/tracks`;

export const getAllTracks = async () => {
  try {
    const response = await fetch(BASE_URL);
    return await response.json();
  } catch (error) {
    console.error('Error fetching tracks:', error);
    return [];
  }
};
export const createTrack = async (trackData) => {
    const response = await fetch(BASE_URL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(trackData),
    });
  
    if (response.ok) {
      const newTrack = await response.json();
      return newTrack; // Return the newly created track
    } else {
      throw new Error('Error creating track');
    }
  };
  export const deleteTrack = async (trackId) => {
    const response = await fetch(`${BASE_URL}/${trackId}`, {
      method: 'DELETE',
    });
  
    if (response.ok) {
      return trackId; // Return the id of the deleted track
    } else {
      throw new Error('Error deleting track');
    }
  };
  
  
