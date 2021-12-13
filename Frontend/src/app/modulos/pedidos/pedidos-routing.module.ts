import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ErrorComponent } from 'src/app/plantilla/error/error.component';
import { AsignarPedidoComponent } from './asignar-pedido/asignar-pedido.component';

const routes: Routes = [
  {
    path:'asignar-pedido',
    component:AsignarPedidoComponent
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
export class PedidosRoutingModule { }
