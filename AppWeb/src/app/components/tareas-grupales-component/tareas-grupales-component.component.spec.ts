import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TareasGrupalesComponentComponent } from './tareas-grupales-component.component';

describe('TareasGrupalesComponentComponent', () => {
  let component: TareasGrupalesComponentComponent;
  let fixture: ComponentFixture<TareasGrupalesComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TareasGrupalesComponentComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TareasGrupalesComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
