// src/redux/slices/announcementsSlice.js
import { createSlice } from '@reduxjs/toolkit';

const announcementsSlice = createSlice({
  name: 'announcements',
  initialState: [],
  reducers: {
    addAnnouncement: (state, action) => {
      state.push(action.payload);  // Add new announcement to the list
    },
    removeAnnouncement: (state, action) => {
      return state.filter((announcement, index) => index !== action.payload);
    },
  },
});

export const { addAnnouncement, removeAnnouncement } = announcementsSlice.actions;
export default announcementsSlice.reducer;
