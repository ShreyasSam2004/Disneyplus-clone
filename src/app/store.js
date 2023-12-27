import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';
import userSlice from "../feautres/user/userSlice"
import movieSlice from '../feautres/movie/movieSlice';

const store = configureStore({
  reducer: {
    user: userSlice.reducer,
    movie: movieSlice.reducer,
  },
  middleware: (getDefaultMiddleware) => {
    return getDefaultMiddleware({
      serializableCheck: false,
    });
  },
});

export default store;
