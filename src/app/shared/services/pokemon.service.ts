import { Injectable } from '@angular/core';

import { Apollo } from 'apollo-angular';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { POKE_RESUME_QUERY, Pokemons } from './pokemon.graphql';
import { PokeResume } from '../models/poke-resume.model';

@Injectable({
  providedIn: 'root'
})
export class PokemonService {

  constructor(
    private apollo: Apollo
  ) { }

  catchEmAll(): Observable<PokeResume[]> {

    return this.apollo.query<Pokemons>({
      query: POKE_RESUME_QUERY,
      variables: {
        first: 151
      }
    }).pipe(
        map(res => res.data.pokemons)
    );

  }

}
