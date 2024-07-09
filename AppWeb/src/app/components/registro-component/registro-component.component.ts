import { Component } from '@angular/core';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import {MatButtonModule} from '@angular/material/button';
import {MatInputModule} from '@angular/material/input';
import {MatBottomSheetModule} from '@angular/material/bottom-sheet';4

@Component({
  selector: 'app-registro-component',
  standalone: true,
  imports: [MatSlideToggleModule, MatButtonModule, MatInputModule, MatBottomSheetModule],
  templateUrl: './registro-component.component.html',
  styleUrl: './registro-component.component.css'
})
export class RegistroComponentComponent {

}
