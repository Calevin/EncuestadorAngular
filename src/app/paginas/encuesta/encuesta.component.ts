import { Component, OnInit } from '@angular/core';
import { EncuestaService } from '../../servicios/encuesta.service';
import { Juego } from '../../interfaces/interfaces';
import Swal from 'sweetalert2';


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

  votarJuego(juego: Juego){
    this.servicio.votarJuego( juego.id )
      .subscribe( ( rta: {ok: boolean, mensaje:string} ) => {
        Swal.fire('Gracias', rta.mensaje, 'success');
      });
  }
}
