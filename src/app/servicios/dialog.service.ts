import { Injectable } from '@angular/core';
import Swal from 'sweetalert2';
import { Router } from '@angular/router';
import { PersistenceService, StorageType } from 'angular-persistence';


@Injectable({
  providedIn: 'root'
})
export class DialogService {


  constructor(private router: Router, private persitenceService: PersistenceService) {



  }


  navegar(ruta: string) {

    this.router.navigate(['/' + ruta])

  }


  crearPersistencia(valorClave: string, data: any) {

    this.persitenceService.set(valorClave, data, { type: StorageType.LOCAL })

  }

  obtenerPersistencia(valorClave: string) {

    return this.persitenceService.get(valorClave, StorageType.LOCAL)

  }


  navigateWhitParameters(ruta: string, data: any) {


    console.log('Los parametros son ', data)
    this.router.navigate([ruta], { queryParams: { ...data }, skipLocationChange: true })

  }


  dialog(title: string, text: string, icon: any, ruta) {

    Swal.fire({
      allowOutsideClick: false,
      title: '<img src="https://plataforma.psigoadelante.com/doc-dq/portada-login.png" alt="Smiley face" height="200" width="200">',
      text: text,
      icon: icon,
      confirmButtonColor: '#8325B9',
      confirmButtonText: 'Aceptar',
      buttonsStyling: false,
      customClass: {
        confirmButton: 'button-dialog',
        container: 'container-final'


      }
    }).then(result => {
      if (result.value) {

        if (title != 'Error')
          this.router.navigate(['/' + ruta])

      }
    })


  }



  dialogSinRuta(title: string, text: string, icon: any) {

    Swal.fire({

      allowOutsideClick: false,
      title: '<img src="https://plataforma.psigoadelante.com/doc-dq/portada-login.png" alt="Smiley face" height="200" width="200">',
      text: text,
      icon: icon,
      confirmButtonColor: '#8325B9',
      confirmButtonText: 'Aceptar',
      buttonsStyling: false,
      customClass: {
        confirmButton: 'button-dialog',
        container: 'container-final'


      }
    }).then(result => {
      if (result.value) {


      }


    })


  }




  dialogParametro(title: string, text: string, icon: any, ruta, idParametro: number) {

    Swal.fire({
      allowOutsideClick: false,
      title: '<img src="https://plataforma.psigoadelante.com/doc-dq/portada-login.png" alt="Smiley face" height="200" width="200">',
      text: text,
      icon: icon,
      confirmButtonColor: '#8325B9',
      confirmButtonText: 'Aceptar',
      buttonsStyling: false,
      customClass: {
        confirmButton: 'button-dialog',
        container: 'container-final'


      }
    }).then(result => {
      if (result.value) {

        if (title != 'Error')
          console.log('Redirige correctamente ' + ruta)
        this.router.navigate(['../' + ruta], { queryParams: { idReq: idParametro, ubicacionFinal: ruta } })

      }
    })


  }


  dialogConfirmacion(title: string, text: string, icon: any, ruta, idParametro: number) {


    Swal.fire({
      allowOutsideClick: false,
      title: '<img src="https://plataforma.psigoadelante.com/doc-dq/portada-login.png" alt="Smiley face" height="200" width="200">',
      text: text,
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#8325B9',
      cancelButtonColor: '#f4742c',
      confirmButtonText: 'Aceptar',
      buttonsStyling: false,
      customClass: {
        confirmButton: 'button-dialog',
        container: 'container-final'


      }
    }).then((result) => {
      if (result.value) {



      } else {

        if (1) {
          console.log('Redirige correctamente ')
          this.router.navigate(['/' + ruta])

        }

      }
    })



  }

  dialogConfirmacionTerapia(title: string, text: string, icon: any, ruta, idParametro: number, idTerapeuta: number) {


    Swal.fire({
      allowOutsideClick: false,
      title: '<img src="https://plataforma.psigoadelante.com/doc-dq/portada-login.png" alt="Smiley face" height="200" width="200">',
      text: text,
      icon: 'success',
      showCancelButton: true,
      confirmButtonColor: '#8325B9',
      cancelButtonColor: '#8325B9',
      confirmButtonText: 'Aceptar',
      cancelButtonText: 'Cancelar',
      buttonsStyling: false,
      customClass: {
        confirmButton: 'button-dialog',
        cancelButton: 'button-dialog',
        container: 'container-final'


      }
    }).then((result) => {
      if (result.value) {

        console.log('Redirige correctamente ')
        this.router.navigate(['/' + ruta], { queryParams: { idTerapeutaFinal: idTerapeuta } })



      } else {

        if (1) {


        }

      }
    })



  }
}
