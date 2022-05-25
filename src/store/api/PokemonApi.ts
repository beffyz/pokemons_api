import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { PokemonModel, SinglePokemonModel } from '../../models/PokemonModel';

export const pokemonApi = createApi({
  reducerPath: 'pokemonApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'https://pokeapi.co/api/v2/' }),
  endpoints: (builder) => ({
    getPokemonByName: builder.query<SinglePokemonModel, string>({
      query: (name) => `pokemon/${name}`,
    }),
    getAllPokemon: builder.query<PokemonModel, void>({
      query: () => 'pokemon/',
    }),
  }),
});

export const { useGetPokemonByNameQuery, useGetAllPokemonQuery } = pokemonApi;

export default pokemonApi;
