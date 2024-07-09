import { Component } from '@angular/core';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import {MatButtonModule} from '@angular/material/button';
import {MatInputModule} from '@angular/material/input';
import {MatBottomSheetModule} from '@angular/material/bottom-sheet';4


@Component({
  selector: 'app-empleados-component',
  standalone: true,
  imports: [MatSlideToggleModule, MatButtonModule, MatInputModule, MatBottomSheetModule],
  templateUrl: './empleados-component.component.html',
  styleUrl: './empleados-component.component.css'
})
export class EmpleadosComponentComponent {

}
