import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GraficoBarraHorinzontalComponent } from './grafico-barra-horinzontal.component';

describe('GraficoBarraHorinzontalComponent', () => {
  let component: GraficoBarraHorinzontalComponent;
  let fixture: ComponentFixture<GraficoBarraHorinzontalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GraficoBarraHorinzontalComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GraficoBarraHorinzontalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
