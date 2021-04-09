import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Catalogo } from '../../modelos/catalogo';
import { Cliente } from '../../modelos/Cliente';
import { Usuario } from '../../modelos/usuario';

@Component({
  selector: 'app-alta-clientes',
  templateUrl: './alta-clientes.component.html',
  styleUrls: ['./alta-clientes.component.scss']
})
export class AltaClientesComponent implements OnInit {


  formUsuario: FormGroup;

  usuario: Cliente = new Cliente()

  editar: boolean = false


  listaOpciones: Catalogo[] = [
    { descripcion: 'Tigo Energy', id: 1 },
    { descripcion: 'Maven', id: 2 },


  ];


  listaRegion: Catalogo[] = [
    { descripcion: 'Permian Basin ', id: 1 },
    { descripcion: 'Chicago', id: 2 },


  ];

  
  listaProfile: Catalogo[] = [
    { descripcion: 'Profile One', id: 1 },
    { descripcion: 'Profile Two', id: 2 },


  ];




  constructor(private fb: FormBuilder) {


    this.formUsuario = fb.group({
      email: [''],
      operatorName: [''],
      firstName: [''],
      lastName: [''],
      region: [''],
      profesion: [''],
      company: [''],
      title: [''],
      profileType: [],


    });

  }

  asignarValor(evento) {

    console.log('Cmbios nuevos evento ', evento)
    console.log('Cmbios nuevos ' + this.formUsuario.value.sucursal)

  }


  ngOnInit(): void {
  }

}
