import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { takeUntil } from 'rxjs/operators';
import { Subject } from 'rxjs';
import { PokemonService } from '../shared/services/pokemon.service';
import { Pokemon } from '../shared/models/pokemon.model';

@Component({
  selector: 'app-pokemon',
  templateUrl: './pokemon.component.html',
  styleUrls: ['./pokemon.component.scss']
})
export class PokemonComponent implements OnInit, OnDestroy {

  private ngUnsubscribe: Subject<object> = new Subject();

  pokemon: Pokemon;

  constructor(
    private route: ActivatedRoute,
    private pokeService: PokemonService,
  ) { }

  ngOnInit() {

    this.route.params.subscribe(routeParams => {
      this.iChooseYou(routeParams.name);
    });

  }

  ngOnDestroy() {
    this.ngUnsubscribe.next();
    this.ngUnsubscribe.complete();
  }

  iChooseYou(pokemonName: string) {

    this.pokeService
      .iChooseYou(pokemonName)
      .pipe(takeUntil(this.ngUnsubscribe))
      .subscribe(res => {
        this.pokemon = res;
        console.log(this.pokemon);
      });

  }

}
