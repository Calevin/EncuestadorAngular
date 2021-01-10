import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { ComponentesModule } from './componentes/componentes.module';

import { InicioComponent } from './paginas/inicio/inicio.component';
import { EncuestaComponent } from './paginas/encuesta/encuesta.component';

@NgModule({
  declarations: [
    AppComponent,
    InicioComponent,
    EncuestaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ComponentesModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
