import { PokemonDimension } from './pokemon-dimension.model';
import { PokemonAttack } from './pokemon-attack.model';
import { PokeResume } from './poke-resume.model';
import { PokemonEvolutionRequirement } from './pokemon-evolution-requirement.model';

export interface Pokemon {
  id: string;
  number: string;
  name: string;
  weight: PokemonDimension;
  height: PokemonDimension;
  classification: string;
  types: [string];
  resistant: [string];
  attacks: PokemonAttack;
  weaknesses: [string];
  fleeRate: number;
  maxCP: number;
  evolutions: [PokeResume];
  evolutionRequirements: PokemonEvolutionRequirement;
  maxHP: number;
  image: string;
}