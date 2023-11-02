import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  favouritesEvents: [],
  isLoading:false,
};

const eventsSlice = createSlice({
  name: "eventsDataFavourites",
  initialState,
  reducers: {
    addFavoriteEvent: (state:any, action) => {
      // Check if the event is already in the favoritesEvents array
      if (!state.favouritesEvents.some((event:any) => event.id === action.payload.id)) {
        // If not, add it to the array
        state.favouritesEvents.push(action.payload);
      }
    },
    removeFavoriteEvent: (state, action) => {
      // Find the index of the event to remove
      const index = state.favouritesEvents.findIndex((event:any) => event.id === action.payload.id);
      if (index !== -1) {
        // If the event is found, remove it from the array
        state.favouritesEvents.splice(index, 1);
      }
    },
    setIsLoading: (state, action) => {
      state.isLoading = action.payload;
    },
  },
});

export const { addFavoriteEvent, removeFavoriteEvent } = eventsSlice.actions;
export default eventsSlice.reducer;

