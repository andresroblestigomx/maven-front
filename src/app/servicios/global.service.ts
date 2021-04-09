import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { Usuario } from '../paginas/modelos/usuario';
import { DialogService } from './dialog.service';
import { PersistenceService, StorageType } from 'angular-persistence';

@Injectable({
  providedIn: 'root'
})
export class GlobalService {

  isSidebarVisible: boolean;

  sidebarVisibilityChange: Subject<boolean> = new Subject<boolean>();

  username: Usuario

  rolUsuario: string

  rutaAvatar: string

  tipoUsuario: number

  cancelarTerminos: boolean


  constructor(private persistenceService: PersistenceService, private dialogService: DialogService) {

    this.isSidebarVisible = false

    this.cancelarTerminos = false

    this.sidebarVisibilityChange.subscribe((value) => {
      this.isSidebarVisible = value
    });

  }

  toggleSidebarVisibility() {
    console.log('Cambia el side bar ' + this.isSidebarVisible)
    this.sidebarVisibilityChange.next(!this.isSidebarVisible);
    console.log('Cambia el sidebar a next ' + this.isSidebarVisible)
  }

  cambiarUsuario(usuario: Usuario) {
    this.username = usuario

  }

  asignarTipoUsuario(tipoUsuario: number) {


    this.tipoUsuario = tipoUsuario
    console.log('Se asigna el tipo de usuario ' + tipoUsuario)

  }

  cambiarTerminos(valor: boolean) {

    this.cancelarTerminos = valor

  }




  refresh(ruta: string) {


    if (this.persistenceService.get("user", StorageType.LOCAL) != undefined) {
      var loader = this.persistenceService.get("loader", StorageType.LOCAL)
      console.log('Async operation has ended ' + loader);
      if (loader == undefined) {

        this.persistenceService.set("loader", true, { type: StorageType.LOCAL })
        console.log('Begin async operation ' + this.persistenceService.get("loaded", StorageType.LOCAL));
        window.location.reload();

      } else {
        console.log('No es undefined')
      }
    } else {
      this.dialogService.navegar(ruta)
    }



  }


  cambiarRol(rolVentas: string) {
    this.rolUsuario = rolVentas
  }

  asignarAvatarRuta(ruta: string) {

    this.rutaAvatar = ruta

  }

  obtenerUsuario() {

    return this.username

  }



  obtenerTerminos() {

    return this.cancelarTerminos

  }

  obtenerRol() {

    return this.rolUsuario

  }

  obtenerNombreUsuario() {
    if (this.username != null) {
      return this.username.nombre + " " + this.username.apellidoPaterno + " " + this.username.apellidoMaterno
    } else {
      return null
    }
  }


}
