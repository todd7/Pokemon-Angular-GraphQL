import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from './material.module';
import { PokeLoaderComponent } from './components/poke-loader/poke-loader.component'


@NgModule({
  declarations: [PokeLoaderComponent],
  imports: [
    CommonModule,
    MaterialModule
  ],
  exports: [
    MaterialModule,
    PokeLoaderComponent
  ]
})
export class SharedModule { }
