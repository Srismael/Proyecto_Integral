import { Routes } from '@angular/router';
import { LandingPageComponentComponent } from './components/landing-page-component/landing-page-component.component';
import { EmpleadosComponentComponent } from './components/empleados-component/empleados-component.component';
import { PerfilComponentComponent } from './components/perfil-component/perfil-component.component';


export const routes: Routes = [
    {path: '', component:LandingPageComponentComponent},
    {path: 'Empleados', component:EmpleadosComponentComponent},
    {path: 'perfil', component:PerfilComponentComponent}

];
