import { Injectable } from '@angular/core';

import { Apollo } from 'apollo-angular';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { POKE_RESUME_QUERY, PokemonsQuery, POKEMON_QUERY, PokemonQuery } from './pokemon.graphql';
import { PokeResume } from '../models/poke-resume.model';
import { Pokemon } from '../models/pokemon.model';

@Injectable({
  providedIn: 'root'
})
export class PokemonService {

  constructor(
    private apollo: Apollo
  ) { }

  catchEmAll(): Observable<PokeResume[]> {
    return this.apollo.query<PokemonsQuery>({
      query: POKE_RESUME_QUERY,
      variables: {
        first: 151
      }
    }).pipe(
      map(res => res.data.pokemons)
    );
  }

  iChooseYou(name: string): Observable<Pokemon> {
    return this.apollo.query<PokemonQuery>({
      query: POKEMON_QUERY,
      variables: {
        name
      }
    }).pipe(
      map(res => res.data.pokemon)
    );
  }



}
