import { Routes } from '@angular/router';
import { LandingPageComponentComponent } from './components/landing-page-component/landing-page-component.component';
import { EmpleadosComponentComponent } from './components/empleados-component/empleados-component.component';
import { RegistroComponentComponent } from './components/registro-component/registro-component.component';


export const routes: Routes = [
    {path: '', component:LandingPageComponentComponent},
    {path: 'empleados', component:EmpleadosComponentComponent},
    {path: 'registro', component:RegistroComponentComponent}
];
