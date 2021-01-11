import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Juego } from '../interfaces/interfaces';

@Injectable({
  providedIn: 'root'
})
export class EncuestaService {

  constructor(private http: HttpClient) { }

  getEncuesta(){
    return this.http.get<Juego[]>(`${ environment.urlServicio }/api/encuesta`);
  }

  votarJuego( id: string) {
    return this.http.post(`${ environment.urlServicio }/api/encuesta/${ id }`, {});
  }
}
