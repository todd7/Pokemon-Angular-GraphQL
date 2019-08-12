import gql from 'graphql-tag';
import { PokeResume } from '../models/poke-resume.model';
import { Pokemon } from '../models/pokemon.model';

export interface PokemonsQuery {
  pokemons: PokeResume[]
}

export interface PokemonQuery {
  pokemon: Pokemon
}

export const PokemonFragment = gql`
  fragment PokemonFragment on Pokemon {
    id
    number
    name
    weight {
      minimum
      maximum
    }
    height {
      minimum
      maximum
    }
    classification
    types
    resistant
    attacks {
      fast {
        name
        type
        damage
      }
      special {
        name
        type
        damage
      }
    }
    weaknesses
    fleeRate
    maxCP
    evolutionRequirements {
      amount
      name
    }
    maxHP
    image
  }
`;

export const PokemonResumeFragment = gql`
fragment PokemonResumeFragment on Pokemon {
  id
  number
  name
  image
  types
}
`;

export const POKE_RESUME_QUERY = gql`
  query pokemons($first: Int!) {
    pokemons(first: $first) {
      ...PokemonResumeFragment
    }
  }
  ${PokemonResumeFragment}
`;

export const POKEMON_QUERY = gql`
  query pokemon($name: String) {
    pokemon(name: $name) {
      ...PokemonFragment
      evolutions { 
        ...PokemonResumeFragment
      }
    }
  }
  ${PokemonFragment}
  ${PokemonResumeFragment}
`;