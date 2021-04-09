import { Component } from '@angular/core';
import { PersistenceService, StorageType } from 'angular-persistence';
import { IgxIconService } from 'igniteui-angular';
import { Usuario } from './paginas/modelos/usuario';
import { DialogService } from './servicios/dialog.service';
import { GlobalService } from './servicios/global.service';




@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'maven-app';

  opened = true;
  visible = false
  badgeProveedor: number
  validaParametro: boolean
  isSidebarVisible: boolean
  tipoUsuario: number
  usuario: Usuario
  // shouldRun = [/(^|\.)plnkr\.co$/, /(^|\.)stackblitz\.io$/].some(h => h.test(window.location.host));


  constructor(private dialog: DialogService, private persistenceService: PersistenceService, private iconService: IgxIconService, private globalService: GlobalService) {

    this.badgeProveedor = 0

    this.validaParametro = false

    this.usuario = this.persistenceService.get("user", StorageType.LOCAL)



  }

  entradaMenu() {

    console.log('EntradaMenu')

    if (this.visible) {
      this.visible = false
    } else {
      this.visible = true
    }

  }



  buscar() {

    console.log('Buscar')
  }

  refresh() {

    console.log('Begin async operation');


    console.log('Async operation has ended' + this.persistenceService.get("loaded", StorageType.LOCAL));
    if (this.persistenceService.get("loaded", StorageType.LOCAL) != undefined) {

      this.persistenceService.set("loader", true, { type: StorageType.LOCAL })
      window.location.reload();

    }


  }

  cerrar() {

    console.log('cierra sesión')
    this.persistenceService.removeAll(StorageType.LOCAL)
    this.persistenceService.clean(StorageType.LOCAL)
    this.isSidebarVisible = false
    this.dialog.dialog('Cierre de sesión', 'Has cerrado sesión correctamente', 'success', '')

  }



  public ngOnInit() {
    // register custom SVG icons
    console.log('valor sideBar ' , this.persistenceService.get("user", StorageType.LOCAL))
    if (this.persistenceService.get("user", StorageType.LOCAL) != undefined) {
     
      this.tipoUsuario = this.persistenceService.get("tipoUsuario", StorageType.LOCAL)
      console.log('Tipo usuario ' + this.tipoUsuario)
      this.isSidebarVisible = true
    } else {
      this.isSidebarVisible = false
    }
    this.iconService.addSvgIcon("cierre", "/assets/images/cierre_sesion.svg", "filter-icons");
    this.iconService.addSvgIcon("descarga", "/assets/images/descargar.svg", "filter-icons");
    this.iconService.addSvgIcon("roles", "/assets/images/roles.svg", "filter-icons");
    this.iconService.addSvgIcon("add", "/assets/images/person-add.svg", "filter-icons");
    this.iconService.addSvgIcon("log", "/assets/images/storage.svg", "filter-icons");
    this.iconService.addSvgIcon("config", "/assets/images/config.svg", "filter-icons");
    this.iconService.addSvgIcon("client", "/assets/images/clientes.svg", "filter-icons");
    this.iconService.addSvgIcon("proveedores", "/assets/images/proveedores.svg", "filter-icons");
    this.iconService.addSvgIcon("cliente", "/assets/images/cliente.svg", "filter-icons");
    this.iconService.addSvgIcon("anuncios", "/assets/images/anuncios.svg", "filter-icons");
    this.iconService.addSvgIcon("estadisticas", "/assets/images/estadisticas.svg", "filter-icons");
    this.iconService.addSvgIcon("catalogos", "/assets/images/catalogos.svg", "filter-icons");
    this.iconService.addSvgIcon("mapa", "/assets/images/map.svg", "filter-icons");
    this.iconService.addSvgIcon("dashboard", "/assets/images/dashboard.svg", "filter-icons");
    this.iconService.addSvgIcon("alta", "/assets/images/alta.svg", "filter-icons");
    this.iconService.addSvgIcon("reporte", "/assets/images/reporte.svg", "filter-icons");
  }
}
