import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TareaComponentComponent } from './tarea-component.component';

describe('TareaComponentComponent', () => {
  let component: TareaComponentComponent;
  let fixture: ComponentFixture<TareaComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TareaComponentComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TareaComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
