export type PokemonModel = {
  count: number
  next: string
  previous: null | string
  results: PokemonResultsModel[]
}

export type PokemonResultsModel = {
  name: string
  url: string
}

export type SinglePokemonModel = {
  abilities: SinglePokemonAbilitiesModel[],
  'held_items': [],
  types: [],
  'past_types': [],
  moves: [],
  sprites: {
    other: any;
  },
  species: {
    name: string,
    url: string
  }
  name: string,
  id: number,
  weight: number
  height: number,
}

export type SinglePokemonAbilitiesModel = {
  ability: {
    name: string,
    url: string,
  }
}
