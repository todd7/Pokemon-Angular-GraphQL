import { NgModule } from '@angular/core';

import { MatToolbarModule } from '@angular/material/toolbar';
import { MatCardModule } from '@angular/material/card';
import { MatChipsModule } from '@angular/material/chips';

@NgModule({
  declarations: [],
  imports: [
    MatToolbarModule,
    MatCardModule,
    MatChipsModule
  ],
  exports: [
    MatToolbarModule,
    MatCardModule,
    MatChipsModule
  ]
})
export class MaterialModule { }
