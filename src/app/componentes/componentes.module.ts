import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './navbar/navbar.component';
import { GraficoBarraHorinzontalComponent } from './grafico-barra-horinzontal/grafico-barra-horinzontal.component';



@NgModule({
  declarations: [NavbarComponent, GraficoBarraHorinzontalComponent],
  imports: [
    CommonModule
  ],
  exports: [NavbarComponent, GraficoBarraHorinzontalComponent]
})
export class ComponentesModule { }
