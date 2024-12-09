import { configureStore } from '@reduxjs/toolkit';
import announcementsReducer from './slices/announcementsSlice'; // Adjusted import path

const store = configureStore({
  reducer: {
    announcements: announcementsReducer,
  },
});

export default store;
