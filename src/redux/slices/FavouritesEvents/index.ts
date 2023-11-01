import {  createSlice } from "@reduxjs/toolkit";

const initialState = {
  favouritesEvents: [],

};



const eventsSlice = createSlice({
  name: "eventsDataFavourites",
  initialState,
  reducers: {
    eventsDataFavourites(state, action) {
      state.favouritesEvents = action.payload;
    },
  },
 
});

export const { eventsDataFavourites } = eventsSlice.actions;
export default eventsSlice;
