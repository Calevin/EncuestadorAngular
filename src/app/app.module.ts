import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { AngularFireModule } from '@angular/fire';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { AngularFireAuthModule } from '@angular/fire/auth';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { ComponentesModule } from './componentes/componentes.module';

import { InicioComponent } from './paginas/inicio/inicio.component';
import { EncuestaComponent } from './paginas/encuesta/encuesta.component';
import { environment } from 'src/environments/environment';
import { LoginComponent } from './paginas/login/login.component';

@NgModule({
  declarations: [
    AppComponent,
    InicioComponent,
    EncuestaComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ComponentesModule,
    HttpClientModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFirestoreModule,
    AngularFireAuthModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
