import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { NavbarComponent } from './navbar/navbar.component';
import { GraficoBarraHorinzontalComponent } from './grafico-barra-horinzontal/grafico-barra-horinzontal.component';

@NgModule({
  declarations: [NavbarComponent
    , GraficoBarraHorinzontalComponent],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports: [NavbarComponent
    , GraficoBarraHorinzontalComponent]
})
export class ComponentesModule { }
