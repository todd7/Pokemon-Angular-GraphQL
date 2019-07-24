import qgl from 'graphql-tag';
import { PokeResume } from '../models/poke-resume.model';

export interface Pokemons {
  pokemons: PokeResume[]
}

export const POKE_RESUME_QUERY = qgl`
  query pokemons($first: Int!) {
    pokemons(first: $first) {
      id
      number
      name
      image
      types
    }
  }
`;