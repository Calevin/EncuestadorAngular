import { Component, OnInit } from '@angular/core';
import { EncuestaService } from '../../servicios/encuesta.service';
import { Juego } from '../../interfaces/interfaces';


@Component({
  selector: 'app-encuesta',
  templateUrl: './encuesta.component.html',
  styleUrls: ['./encuesta.component.css']
})
export class EncuestaComponent implements OnInit {

  juegos: Juego[] = [];
  constructor(private servicio: EncuestaService) { }

  ngOnInit(): void {
    this.servicio.getEncuesta()
    .subscribe( resp => {
      this.juegos = resp;
    });
  }
}
