import { Attack } from './attack.model';

export interface PokemonAttack {
  fast: [Attack];
  special: [Attack];
}