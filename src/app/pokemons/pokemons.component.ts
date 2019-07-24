import { Component, OnInit, OnDestroy } from '@angular/core';

import { Subject } from 'rxjs';

import { PokemonService } from '../shared/services/pokemon.service';
import { takeUntil } from 'rxjs/operators';
import { PokeResume } from '../shared/models/poke-resume.model';

@Component({
  selector: 'app-pokemons',
  templateUrl: './pokemons.component.html',
  styleUrls: ['./pokemons.component.scss']
})
export class PokemonsComponent implements OnInit, OnDestroy {

  private ngUnsubscribe: Subject<object> = new Subject();

  pokemons: PokeResume[] = [];

  constructor(
    private pokeService: PokemonService
  ) { }

  ngOnInit() {
    this.catchEmAll();
  }

  ngOnDestroy() {
    this.ngUnsubscribe.next();
    this.ngUnsubscribe.complete();
  }

  catchEmAll() {

    this.pokeService
    .catchEmAll()
    .pipe(takeUntil(this.ngUnsubscribe))
    .subscribe(res => {
      console.log(res)
      this.pokemons = res;
    });

  }

}
