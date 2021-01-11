import { Component, OnInit, Output } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { map } from 'rxjs/operators';
import { Juego } from 'src/app/interfaces/interfaces';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css']
})
export class InicioComponent implements OnInit {

  @Output()
  juegos: {name: string, value: number}[] = [];

  constructor(private db: AngularFirestore) { }

  ngOnInit(): void {
    this.db.collection<Juego>('encuesta').valueChanges()
      .pipe(
        map( (rta: Juego[]) => rta.map( j => {
            return { 
              name: j.nombre
              , value: j.votos
            };
          })
        )
      )
      .subscribe( rta => {
        this.juegos = rta;
      });
  }

}
