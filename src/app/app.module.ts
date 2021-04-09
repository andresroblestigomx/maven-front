
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LoginComponent } from './paginas/login/login.component';
import { PersistenceModule } from 'angular-persistence';
import { IgxNavbarModule, IgxNavigationDrawerModule, IgxNavigationDrawerComponent, IgxSelectModule, IgxTreeGridModule, IgxGridModule, IgxIconModule } from 'igniteui-angular';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { InicioComponent } from './paginas/inicio/inicio.component';
import { MatBadgeModule }  from '@angular/material/badge';
import { MatFormFieldModule }  from '@angular/material/form-field';
import { MatInputModule }  from '@angular/material/input';
import { MatSelectModule }  from '@angular/material/select';
import { MatDatepickerModule }  from '@angular/material/datepicker';
import { MatSidenavModule }  from '@angular/material/sidenav';
import { AltaClientesComponent } from './paginas/cliente/alta-clientes/alta-clientes.component';
import { AltaPozoComponent } from './paginas/pozos/alta-pozo/alta-pozo.component';
import { AltaEtapasComponent } from './paginas/pozos/alta-etapas/alta-etapas.component';
import { EsquemaBombeoComponent } from './paginas/pozos/esquema-bombeo/esquema-bombeo.component';
import { AltaProveedoresComponent } from './paginas/proveedores/alta-proveedores/alta-proveedores.component';
import { AltaProyectoComponent } from './paginas/proyectos/alta-proyecto/alta-proyecto.component';
import { BrowserModule } from '@angular/platform-browser';
import { AltaPozozPrComponent } from './paginas/pozos/alta-pozoz-pr/alta-pozoz-pr.component';

  


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    AltaProyectoComponent,
    InicioComponent,
    AltaClientesComponent,
    AltaPozoComponent,
    AltaEtapasComponent,
    EsquemaBombeoComponent,
    AltaProveedoresComponent,
    AltaPozozPrComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    FormsModule,
    IgxIconModule,
    IgxNavbarModule,
    IgxSelectModule,
    IgxTreeGridModule,
    IgxNavigationDrawerModule,
    MatBadgeModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    IgxGridModule,
    MatDatepickerModule,
    MatSidenavModule,
    PersistenceModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
