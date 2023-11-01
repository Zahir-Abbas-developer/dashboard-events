"use client"
import { baseAPI } from '@/services/base-api';
import { configureStore } from '@reduxjs/toolkit';
import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux';
import eventsSlice from './slices/FavouritesEvents';

// Define an action to set store initialization
// export const setStoreInitialized = createAction("store/setInitialized");

const store = configureStore({
  reducer: {
    [baseAPI.reducerPath]: baseAPI.reducer,
    favouriteEvents:eventsSlice.reducer
  },
  middleware: (defaultMiddleware) =>
    defaultMiddleware().concat(baseAPI.middleware),
});



export type AppDispatch = typeof store.dispatch;
export const useAppDispatch: () => AppDispatch = useDispatch;
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
export type RootState = ReturnType<typeof store.getState>;
export default store;
