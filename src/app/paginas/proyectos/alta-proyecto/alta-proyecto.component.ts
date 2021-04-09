import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Catalogo } from '../../modelos/catalogo';
import { Cliente } from '../../modelos/Cliente';
import { Proyecto } from '../../modelos/Proyecto';
import { Usuario } from '../../modelos/usuario';

@Component({
  selector: 'app-alta-proyecto',
  templateUrl: './alta-proyecto.component.html',
  styleUrls: ['./alta-proyecto.component.scss']
})
export class AltaProyectoComponent implements OnInit {

  formUsuario: FormGroup;

  proyecto: Proyecto = new Proyecto()


  editar: boolean = false


  listaState: Catalogo[] = [
    { descripcion: 'Chicago', id: 1 },
    { descripcion: 'Texas', id: 2 },


  ];


  listaCounty: Catalogo[] = [
    { descripcion: 'Permian Basin ', id: 1 },
    { descripcion: 'Illinois', id: 2 },


  ];


  listaProfile: Catalogo[] = [
    { descripcion: 'Profile One', id: 1 },
    { descripcion: 'Profile Two', id: 2 },


  ];

  




  constructor(private fb: FormBuilder) {


    this.formUsuario = fb.group({
      padName: [''],
      numberOfWells: [''],
      field: [''],
      state: [''],
      county: [''],
      latitude: [''],
      longitude: [''],
      pumplingSerivcesNpt: [0],
      wirelineSerivcesNpt: [0],
      accepatableChem: [0],
      acceptableSanf: [0],
      accetableChemRate: [0],


    });

  }

  asignarValor(evento) {

    console.log('Cmbios nuevos evento ', evento)
    console.log('Cmbios nuevos ' + this.formUsuario.value.sucursal)

  }


  ngOnInit(): void {
  }

}
