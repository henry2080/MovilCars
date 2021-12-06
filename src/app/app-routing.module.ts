import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ClienteBusquedaComponent } from './plantilla/cliente-busqueda/cliente-busqueda.component';
import { ClienteComponent } from './plantilla/cliente/cliente.component';
import { ErrorComponent } from './plantilla/error/error.component';
import { InicioComponent } from './plantilla/inicio/inicio.component';
import { VendedorComponent } from './plantilla/vendedor/vendedor.component';

const routes: Routes = [
  {
    path:"inicio",
    component:InicioComponent
  },
  {
    path:'cliente',
    component:ClienteComponent
  },
  {
    path:'cliente-busqueda',
    component:ClienteBusquedaComponent
  },
  {
    path:'vendedor',
    component:VendedorComponent
  },
  {
  path:"",
  pathMatch: 'full',
  redirectTo:'/inicio'
  },
  {
    path:'seguridad',
    loadChildren: () => import("./modulos/seguridad/seguridad.module").then(x => x.SeguridadModule)
  },
  {
    path:'administracion',
    loadChildren: () => import("./modulos/administracion/administracion.module").then(x => x.AdministracionModule)
  },
  {
    path:'pedidos',
    loadChildren: () => import("./modulos/pedidos/pedidos.module").then(x => x.PedidosModule)
  },
  {
    path:'**',
    component:ErrorComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }