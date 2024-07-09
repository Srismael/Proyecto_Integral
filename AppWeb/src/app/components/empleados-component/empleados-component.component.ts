import { Component } from '@angular/core';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import {MatButtonModule} from '@angular/material/button';

@Component({
  selector: 'app-empleados-component',
  standalone: true,
  imports: [MatSlideToggleModule, MatButtonModule],
  templateUrl: './empleados-component.component.html',
  styleUrl: './empleados-component.component.css'
})
export class EmpleadosComponentComponent {

}
