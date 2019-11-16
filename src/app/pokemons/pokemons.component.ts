import { Component, OnInit, OnDestroy } from '@angular/core';

import { Subscription } from 'rxjs';
import { PokeResume } from '../shared/models/poke-resume.model';
import { PokemonService } from '../shared/services/pokemon.service';

@Component({
  selector: 'app-pokemons',
  templateUrl: './pokemons.component.html',
  styleUrls: ['./pokemons.component.scss']
})
export class PokemonsComponent implements OnInit, OnDestroy {

  sub: Subscription;

  loader = false;

  pokemons: PokeResume[] = [];

  constructor(
    private pokeService: PokemonService
  ) { }

  ngOnInit() {
    this.loader = true;

    this.catchEmAll();
  }

  ngOnDestroy() {
    this.sub.unsubscribe();
  }

  catchEmAll() {
    this.loader = true;

    this.sub = this.pokeService
      .catchEmAll()
      .subscribe(pokemons => {
        this.pokemons = pokemons;
        this.loader = false;
      }, () => {
        this.loader = false;
      });
  }

}
