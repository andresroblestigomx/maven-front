import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AltaClientesComponent } from './paginas/cliente/alta-clientes/alta-clientes.component';
import { InicioComponent } from './paginas/inicio/inicio.component';
import { LoginComponent } from './paginas/login/login.component';
import { AltaEtapasComponent } from './paginas/pozos/alta-etapas/alta-etapas.component';
import { AltaPozoComponent } from './paginas/pozos/alta-pozo/alta-pozo.component';
import { AltaPozozPrComponent } from './paginas/pozos/alta-pozoz-pr/alta-pozoz-pr.component';
import { EsquemaBombeoComponent } from './paginas/pozos/esquema-bombeo/esquema-bombeo.component';
import { AltaProveedoresComponent } from './paginas/proveedores/alta-proveedores/alta-proveedores.component';
import { AltaProyectoComponent } from './paginas/proyectos/alta-proyecto/alta-proyecto.component';

const routes: Routes = [

  { path: '*', redirectTo: '', pathMatch: 'full' },
  { path: '', component: LoginComponent },
  { path: 'inicio', component: InicioComponent },
  { path: 'alta-cliente', component: AltaClientesComponent },
  { path: 'alta-proyecto', component: AltaProyectoComponent },
  { path: 'alta-pozos', component: AltaPozoComponent },
  { path: 'alta-pozos-pr', component: AltaPozozPrComponent },
  { path: 'alta-etapa', component: AltaEtapasComponent },
  { path: 'alta-bombeo', component: EsquemaBombeoComponent },
  { path: 'alta-proveedores', component: AltaProveedoresComponent },
  
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true }),],
  exports: [RouterModule]
})
export class AppRoutingModule { }
