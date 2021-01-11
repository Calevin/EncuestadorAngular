import { Component, Input, OnDestroy, OnInit } from '@angular/core';

@Component({
  selector: 'app-grafico-barra-horinzontal',
  templateUrl: './grafico-barra-horinzontal.component.html',
  styleUrls: ['./grafico-barra-horinzontal.component.css'],
})
export class GraficoBarraHorinzontalComponent implements OnInit, OnDestroy {
  @Input()
  resultados: {name: string, value: number}[] = [];

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
  }

  onSelect(event: any) {
    console.log(event);
  }

  ngOnInit(): void {}

  ngOnDestroy(): void {
  }
}
