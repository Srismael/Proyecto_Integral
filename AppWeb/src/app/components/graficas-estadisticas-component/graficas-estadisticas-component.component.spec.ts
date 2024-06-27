import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GraficasEstadisticasComponentComponent } from './graficas-estadisticas-component.component';

describe('GraficasEstadisticasComponentComponent', () => {
  let component: GraficasEstadisticasComponentComponent;
  let fixture: ComponentFixture<GraficasEstadisticasComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GraficasEstadisticasComponentComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GraficasEstadisticasComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
