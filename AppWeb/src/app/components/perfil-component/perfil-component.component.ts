// perfil-component.component.ts
import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';


@Component({
  selector: 'app-perfil-component',
  standalone: true,
  imports: [MatButtonModule, MatCardModule],
            
  templateUrl: './perfil-component.component.html',
  styleUrls: ['./perfil-component.component.css']
})
export class PerfilComponentComponent {
  nombre = 'Juan Diego';
  apellidos = 'Martínez Romo';
  correo = 'juan.34mr@.com';
  direccion = 'Emiliano Zapata 546-C';
}
