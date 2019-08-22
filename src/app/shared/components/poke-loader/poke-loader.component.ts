import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'poke-loader',
  template: `<div class="poke">
              <div class="ball"></div>
            </div>
  `,
  styleUrls: ['./poke-loader.component.scss']
})
export class PokeLoaderComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
