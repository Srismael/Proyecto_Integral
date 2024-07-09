import { Component } from '@angular/core';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatGridListModule } from '@angular/material/grid-list';

@Component({
  selector: 'app-landing-page-component',
  standalone: true,
  imports: [MatToolbarModule, MatButtonModule, MatCardModule, MatGridListModule],
  templateUrl: './landing-page-component.component.html',
  styleUrl: './landing-page-component.component.css'
})
export class LandingPageComponentComponent {
  services = [
    {
      title: 'Limpieza Residencial',
      description: 'Ofrecemos servicios de limpieza para hogares, asegurando que tu espacio esté siempre limpio y ordenado.',
      image: 'assets/limpieza-residencial.jpg'
    },
    {
      title: 'Limpieza de Oficinas',
      description: 'Mantenemos tu lugar de trabajo limpio y profesional para mejorar el ambiente laboral.',
      image: 'assets/limpieza-oficinas.jpg'
    },
    {
      title: 'Limpieza Profunda',
      description: 'Servicios de limpieza profunda para aquellas ocasiones en que necesitas una limpieza más exhaustiva.',
      image: 'assets/limpieza-profunda.jpg'
    }
  ];
}
