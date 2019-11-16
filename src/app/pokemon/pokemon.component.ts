import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { Subscription } from 'rxjs';
import { switchMap } from 'rxjs/operators';
import { Pokemon } from '../shared/models/pokemon.model';
import { PokemonService } from '../shared/services/pokemon.service';

@Component({
  selector: 'app-pokemon',
  templateUrl: './pokemon.component.html',
  styleUrls: ['./pokemon.component.scss']
})
export class PokemonComponent implements OnInit, OnDestroy {

  sub: Subscription;

  loader = false;

  pokemon: Pokemon;

  constructor(
    private route: ActivatedRoute,
    private pokeService: PokemonService,
  ) { }

  ngOnInit() {
    this.loader = true;

    const pokeObs = this.route.paramMap
      .pipe(
        switchMap(params => {
          const name = params.get('name');

          return this.pokeService.iChooseYou(name);
        })
      );

    this.sub = pokeObs
      .subscribe(pokemon => {
        this.pokemon = pokemon;
        this.loader = false;
      });
  }

  ngOnDestroy() {
    this.sub.unsubscribe();
  }
}
