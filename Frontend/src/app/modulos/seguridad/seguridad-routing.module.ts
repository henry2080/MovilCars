import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ErrorComponent } from 'src/app/plantilla/error/error.component';
import { CambioClaveComponent } from './cambio-clave/cambio-clave.component';
import { CerrarSesionComponent } from './cerrar-sesion/cerrar-sesion.component';
import { IdentificacionComponent } from './identificacion/identificacion.component';
import { RecuperarClaveComponent } from './recuperar-clave/recuperar-clave.component';
import { RegistroComponent } from './registro/registro.component';

const routes: Routes = [
  {
    path:'cambio-clave',
    component:CambioClaveComponent
  },
  {
    path:'cerrar-sesion',
    component:CerrarSesionComponent
  },
  {
    path:'identificacion',
    component:IdentificacionComponent
  },
  {
    path:'recuperar-clave',
    component:RecuperarClaveComponent
  },
  {
    path:'registro',
    component:RegistroComponent
  },
  {
    path:'**',
    component:ErrorComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SeguridadRoutingModule { }
