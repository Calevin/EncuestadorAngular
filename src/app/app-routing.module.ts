import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { InicioComponent } from './paginas/inicio/inicio.component';
import { EncuestaComponent } from './paginas/encuesta/encuesta.component';

const routes: Routes = [
  {path: 'inicio', component: InicioComponent},
  {path: 'encuesta', component: EncuestaComponent},
  {path: '**', pathMatch: 'full', redirectTo: '/inicio'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
