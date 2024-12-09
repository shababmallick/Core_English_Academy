// src/components/Announcements.jsx
import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addAnnouncement } from '../redux/announcementsSlice'; // Adjust the path if needed

const Announcements = () => {
  const [newAnnouncement, setNewAnnouncement] = useState('');
  const announcements = useSelector((state) => state.announcements); // Access announcements from Redux store
  const dispatch = useDispatch();

  const handleAddAnnouncement = () => {
    if (newAnnouncement.trim()) {
      dispatch(addAnnouncement(newAnnouncement)); // Dispatch the action
      setNewAnnouncement(''); // Reset input field after adding announcement
    }
  };

  return (
    <div>
      <h2>Announcements</h2>
      <ul>
        {announcements.map((announcement, index) => (
          <li key={index}>{announcement}</li>
        ))}
      </ul>
      <input
        type="text"
        value={newAnnouncement}
        onChange={(e) => setNewAnnouncement(e.target.value)}
        placeholder="Add new announcement"
      />
      <button onClick={handleAddAnnouncement}>Add Announcement</button>
    </div>
  );
};

export default Announcements;

