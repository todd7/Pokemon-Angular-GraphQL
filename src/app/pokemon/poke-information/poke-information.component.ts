import { Component, OnInit, Input } from '@angular/core';

import { Pokemon } from 'src/app/shared/models/pokemon.model';

@Component({
  selector: 'app-poke-information',
  templateUrl: './poke-information.component.html',
  styleUrls: ['./poke-information.component.scss']
})
export class PokeInformationComponent implements OnInit {

  @Input() pokemon: Pokemon;

  constructor() { }

  ngOnInit() {
  }

}
