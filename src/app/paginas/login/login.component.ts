import { Component, ViewChild, ElementRef, OnInit, Inject } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { LoginService } from 'src/app/servicios/login/login.service';
import { PersistenceService, StorageType } from 'angular-persistence';
import { GlobalService } from 'src/app/servicios/global.service';
import { Usuario } from '../modelos/usuario';
import { DialogService } from 'src/app/servicios/dialog.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  formCuestionario: FormGroup
  usuario: Usuario
  userName: string

  constructor(private fb: FormBuilder, private loginService: LoginService, private persistenceService: PersistenceService, private globalService: GlobalService, private dialogService: DialogService) {


    this.formCuestionario = fb.group({
      correo: ['', Validators.email],
      contrasena: [''],

    });


    if (this.globalService.isSidebarVisible) {
      this.globalService.toggleSidebarVisibility()
    }



  }

  get correo() {
    return this.formCuestionario.get('correo');
  }


  login() {

    const formData = new FormData();

    formData.append('username', this.formCuestionario.value.correo);
    formData.append('password', this.formCuestionario.value.contrasena);

    this.loginService.login(formData).subscribe(

      res => {


        this.loginService.obtenerDatoCliente().subscribe(

          res => {

            console.log('datos cliente res ', res)
            this.usuario = res.datos
            console.log('datos cliente ', this.usuario)
            this.persistenceService.set("user", this.usuario, { type: StorageType.LOCAL })
            this.userName = this.usuario.nombre + " " + this.usuario.apellidoPaterno + " " + this.usuario.apellidoMaterno
            this.globalService.cambiarUsuario(this.usuario)
            this.globalService.cambiarRol(res.p.authorities[0].authority)


            if (res.p.authorities[0].authority == 'MAVEN') {
              if (this.usuario.banderaGeneral) {
                this.globalService.asignarTipoUsuario(7)
                this.persistenceService.set("tipoUsuario", 7, { type: StorageType.LOCAL })
                this.globalService.toggleSidebarVisibility()

                this.dialogService.dialog("Éxito", "¡Bienvenido, " + this.usuario.nombre + " " + this.usuario.apellidoPaterno + " " + this.usuario.apellidoMaterno + "!", "", "inicio")

              } else {
                this.dialogService.dialog("Éxito", "¡Bienvenido, " + this.usuario.nombre + " " + this.usuario.apellidoPaterno + " " + this.usuario.apellidoMaterno + "!", "", "inicio")
              }
            } else if (res.p.authorities[0].authority == 'VENTA') {

              this.globalService.asignarTipoUsuario(5)
              this.persistenceService.set("tipoUsuario", 5, { type: StorageType.LOCAL })
              this.dialogService.dialog("Éxito", "¡Bienvenido, " + this.usuario.nombre + " " + this.usuario.apellidoPaterno + " " + this.usuario.apellidoMaterno + "!", "", "inicio")

            } else if (res.p.authorities[0].authority == 'ADMIN') {

              this.globalService.asignarTipoUsuario(1)
              this.persistenceService.set("tipoUsuario", 1, { type: StorageType.LOCAL })
              this.dialogService.dialog("Éxito", "¡Bienvenido, " + this.usuario.nombre + " " + this.usuario.apellidoPaterno + " " + this.usuario.apellidoMaterno + "!", "", "inicio")

            }



          }, err => {


            console.log('error al obtener los datos del cliente ', err)

          }
        )




      }, err => {

        if (err.status == 406) {

          this.dialogService.dialog("Usuario Inactivo", "Tu usuario ha sido dado de baja", "error", "cuestionario")

        } else {
          this.dialogService.dialogSinRuta("Login Incorrecto", "El usuario o contraseña ingresado son incorrectos.", "")
        }

      }


    )

  }




  refresh() {



    var loader = this.persistenceService.get("loader", StorageType.LOCAL)
    console.log('Async operation has ended ' + loader);
    if (loader == undefined) {

      this.persistenceService.set("loader", true, { type: StorageType.LOCAL })
      console.log('Begin async operation ' + this.persistenceService.get("loaded", StorageType.LOCAL));
      window.location.reload();

    } else {
      console.log('No es undefined')
    }



  }


  ngOnInit() {

    //this.refresh()
  }



}
