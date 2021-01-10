import { Component, OnDestroy, OnInit } from '@angular/core';

@Component({
  selector: 'app-grafico-barra-horinzontal',
  templateUrl: './grafico-barra-horinzontal.component.html',
  styleUrls: ['./grafico-barra-horinzontal.component.css'],
})
export class GraficoBarraHorinzontalComponent implements OnInit, OnDestroy {
  resultados = [
    {
      name: 'Opcion 1',
      value: 10,
    },
    {
      name: 'Opcion 2',
      value: 5,
    },
    {
      name: 'Opcion 3',
      value: 15,
    },
  ];

  // options
  showXAxis = true;
  showYAxis = true;
  gradient = false;
  showLegend = true;
  showXAxisLabel = true;
  xAxisLabel = 'Opciones';
  showYAxisLabel = true;
  yAxisLabel = 'Votos';

  colorScheme = 'nightLights';

  intervalo: any;

  constructor() {

    this.intervalo =  setInterval( () => {
      console.log('tick');

      const copiaResultados = [...this.resultados];

      for( let i in this.resultados ) {
        this.resultados[i].value = ( Math.round(Math.random() * 500)) ;
      }

      this.resultados = [...copiaResultados];

    }, 1500);
  }

  onSelect(event: any) {
    console.log(event);
  }

  ngOnInit(): void {}

  ngOnDestroy(): void {
    clearInterval(this.intervalo);
  }
}
