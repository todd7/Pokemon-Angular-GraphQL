import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FullComponent } from './layouts/full/full.component';
import { PokemonsComponent } from './pokemons/pokemons.component';
import { PokemonComponent } from './pokemon/pokemon.component';

const routes: Routes = [{
  path: '',
  component: FullComponent,
  children: [
    {
      path: '',
      component: PokemonsComponent
    },
    {
      path: 'pokemon/:name',
      component: PokemonComponent
    }
  ]
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
