import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FullComponent } from './layouts/full/full.component';
import { PokemonsComponent } from './pokemons/pokemons.component';

const routes: Routes = [{
  path: '',
  component: FullComponent,
  children: [
    {
      path: '',
      component: PokemonsComponent
    }
  ]
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
