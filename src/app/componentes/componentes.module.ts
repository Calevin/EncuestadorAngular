import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { NgxChartsModule } from '@swimlane/ngx-charts';

import { NavbarComponent } from './navbar/navbar.component';
import { GraficoBarraHorinzontalComponent } from './grafico-barra-horinzontal/grafico-barra-horinzontal.component';

@NgModule({
  declarations: [NavbarComponent
    , GraficoBarraHorinzontalComponent],
  imports: [
    CommonModule,
    RouterModule,    
    NgxChartsModule,
    BrowserAnimationsModule 
  ],
  exports: [NavbarComponent
    , GraficoBarraHorinzontalComponent]
})
export class ComponentesModule { }
