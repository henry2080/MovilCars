import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ErrorComponent } from 'src/app/plantilla/error/error.component';
import { BuscarPersonaComponent } from './personas/buscar-persona/buscar-persona.component';
import { CrearPersonaComponent } from './personas/crear-persona/crear-persona.component';
import { EditarPersonaComponent } from './personas/editar-persona/editar-persona.component';
import { EliminarPersonaComponent } from './personas/eliminar-persona/eliminar-persona.component';
import { BuscarProductoComponent } from './productos/buscar-producto/buscar-producto.component';
import { CrearProductoComponent } from './productos/crear-producto/crear-producto.component';
import { EditarProductoComponent } from './productos/editar-producto/editar-producto.component';
import { EliminarProductoComponent } from './productos/eliminar-producto/eliminar-producto.component';

const routes: Routes = [
  {
    path:'crear-persona',
    component:CrearPersonaComponent
  },
  {
    path:'editar-persona/:id',
    component:EditarPersonaComponent
  },
  {
    path:'eliminar-persona/:id',
    component:EliminarPersonaComponent
  },
  {
    path:'buscar-persona',
    component:BuscarPersonaComponent
  },
  {
    path:'crear-producto',
    component:CrearProductoComponent
  },
  {
    path:'editar-producto/:id',
    component:EditarProductoComponent
  },
  {
    path:'eliminar-producto/:id',
    component:EliminarProductoComponent
  },
  {
    path:'buscar-producto',
    component:BuscarProductoComponent
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
export class AdministracionRoutingModule { }
