import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-grafico-barra-horinzontal',
  templateUrl: './grafico-barra-horinzontal.component.html',
  styleUrls: ['./grafico-barra-horinzontal.component.css'],
})
export class GraficoBarraHorinzontalComponent implements OnInit {
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
  view: [number, number]  = [700, 400];

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

  constructor() {}

  onSelect(event: any) {
    console.log(event);
  }

  ngOnInit(): void {}
}
