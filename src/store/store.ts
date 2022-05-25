import { configureStore } from '@reduxjs/toolkit';
import pokemonApi from './api/PokemonApi';

export const store = configureStore({
  middleware: ((getDefaultMiddleware) => getDefaultMiddleware().concat(pokemonApi.middleware)),
  reducer: {
    [pokemonApi.reducerPath]: pokemonApi.reducer,
  },
});

export type RootState = ReturnType<typeof store.getState>

export type AddDispatch = typeof store.dispatch

export default store;
