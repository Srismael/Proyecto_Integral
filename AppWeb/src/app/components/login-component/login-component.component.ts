
import { Input, Component, Output, EventEmitter,  } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import {MatButtonModule} from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';
import {MatInputModule} from '@angular/material/input';


@Component({
  selector: 'app-login-component',
  standalone: true,
  imports: [MatCardModule, MatInputModule, MatButtonModule],
  templateUrl: './login-component.component.html',
  styleUrl: './login-component.component.css'
})


export class LoginComponentComponent {


}

