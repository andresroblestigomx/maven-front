import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { IgxGridComponent } from 'igniteui-angular';
import { DialogService } from 'src/app/servicios/dialog.service';
import { Catalogo } from '../../modelos/catalogo';
import { Cliente } from '../../modelos/Cliente';
import { CompletionDesign, DiagnosticsInformation, GeneralWell, GeologyRelatedInfo, PerforationGunDesign, PerforationInformation, PumpSchedule, wellboreConfiguration } from '../../modelos/Pozo';
import { Proyecto } from '../../modelos/Proyecto';
import { Usuario } from '../../modelos/usuario';

@Component({
  selector: 'app-alta-pozoz-pr',
  templateUrl: './alta-pozoz-pr.component.html',
  styleUrls: ['./alta-pozoz-pr.component.scss']
})
export class AltaPozozPrComponent implements OnInit {

 
  @ViewChild("grid1", { read: IgxGridComponent, static: true })
  public grid1: IgxGridComponent;

  formGeneralWell: FormGroup;

  formCompletionDesign: FormGroup;

  formPerforationGun: FormGroup;

  formWellboreConfiguration: FormGroup;

  formGeologyRelated: FormGroup;

  formDiagnosticsInformation: FormGroup;

  formPerforationInfo: FormGroup;

  formNumberOfPump: FormGroup



  generalWell: boolean

  completionDesignFlag: boolean

  perforationDesignFlag: boolean

  wellboreConfigurationFlag: boolean

  geologyRelatedConfigFlag: boolean

  diagnosticsInformationFlag: boolean

  perforationInformationFlag: boolean

  pumpSchedulePrevFlag: boolean

  pumpScheduleFlag: boolean




  proyecto: Proyecto = new Proyecto()

  generalWellInfo: GeneralWell = new GeneralWell()

  completionDesign: CompletionDesign = new CompletionDesign()

  perforationDesign: PerforationGunDesign = new PerforationGunDesign()

  wellboreConfiration: wellboreConfiguration = new wellboreConfiguration()

  geologyRelatedConfig: GeologyRelatedInfo = new GeologyRelatedInfo()

  diagnosticsInformation: DiagnosticsInformation = new DiagnosticsInformation()


  perforationList: Array<PerforationInformation>

  pumpScheduleList: Array<PumpSchedule>




  editar: boolean = false


  listaJobType: Catalogo[] = [
    { descripcion: 'Chicago', id: 1 },
    { descripcion: 'Texas', id: 2 },


  ];


  listaSandSource: Catalogo[] = [
    { descripcion: 'Permian Basin ', id: 1 },
    { descripcion: 'Illinois', id: 2 },


  ];


  listaSimulation: Catalogo[] = [
    { descripcion: 'Profile One', id: 1 },
    { descripcion: 'Profile Two', id: 2 },


  ];


  listaPropantType: Catalogo[] = [
    { descripcion: 'Profile One', id: 1 },
    { descripcion: 'Profile Two', id: 2 },


  ];


  listaPerforationTechnique: Catalogo[] = [
    { descripcion: 'Profile One', id: 1 },
    { descripcion: 'Profile Two', id: 2 },


  ];

  listaChemType: Catalogo[] = [
    { descripcion: 'KvFR-18 - 0.5', id: 1 },
    { descripcion: 'Bio-36 - 0.25', id: 2 },
    { descripcion: 'SC-534 - 1', id: 2 },


  ];




  constructor(private fb: FormBuilder, private dialogService: DialogService) {


    this.dialogService.crearPersistencia("generalInfo", true)



    this.generalWell = true
    this.completionDesignFlag = false
    this.perforationDesignFlag = false


    this.formGeneralWell = fb.group({
      wellName: [''],
      apiNumber: [0],
      afeNumber: [0],
      latitudeTop: [''],
      longitudeTop: [''],
      pumpingServiceCompany: [''],
      wireLineCompany: [''],
      jobType: [''],
      sandSource: [''],

    });


    this.formCompletionDesign = fb.group({
      plannedNumberStages: [1],
      plannedNumberStagesPerDay: [0],
      plannedClusterSpacing: [0],
      planneedCompletedLateral: [0],
      simulationFluid: [''],
      surfaceVolume: [0],
      overFlush: [0],
      hidraulicHorsePower: [0],
      proppantTypeMesh: [''],
      proppantSpecificGravity: [0],
      proppantSupplier: [''],
      proppantCommercialName: [''],

    });



    this.formPerforationGun = fb.group({
      perforationTechnique: [0],
      perforationDiameter: [0],
      CorrectedPerfDiameter: [0],
    });


    this.formWellboreConfiguration = fb.group({

      casingType: [0],
      casingWeigth: [0],
      capactity: [0],
      casingOD: [0],
      casingID: [''],
      length: [0],
      casingYield: [0],
      burst: [0],
      collapse: [0],
      casingBrinellHardness: [0],
      injectionPAth: [''],
      shortJoint: [0],
      groundLevelElevation: [0],
      kellyBushingElevation: [0],
      kopDepth: [0],
      thirtyDegDepth: [''],
      sixtydegDepth: [0],
      ninetyDegDepth: [0],
      plugBackTotalDepth: [''],
      totalMeasuredDepth: [0],
      trueVerticalDepth: [''],

    });


    this.formGeologyRelated = fb.group({
      formation: [''],
      fluidTemperature: [0],
      bottomholeTemperature: [0],
      bottomholePressure: [0],
      minimumStressGradient: [0],

    });


    this.formDiagnosticsInformation = fb.group({
      miroSeismic: [''],
      fluidOrOil: [''],
      opticFiber: [''],
      otherDiagnostics: [''],
      chemType: [''],

    });


    this.formDiagnosticsInformation = fb.group({
      miroSeismic: [''],
      fluidOrOil: [''],
      opticFiber: [''],
      otherDiagnostics: [''],
      chemType: [''],

    });


    this.formNumberOfPump = fb.group({
      numberOfPumps: [0],


    });




    this.formPerforationInfo = fb.group({

      perforationPhasing: [''],
      numOflusters: [0],
      clusterSpacing: [0],
      numOfPerfs: [0],
      stageSpacing: [0],
      perforationCoverage: [0],
      pipeCap: [0],
      midPerforation: [0],
      topPerforation: [0],
      bottomPerf: [0],
      plugSettingDepth: [0],

    });




  }


  crearTablaPerforationInfo() {


    this.perforationList = new Array<PerforationInformation>()

    var numberOfStages = this.formCompletionDesign.value.plannedNumberStages

    for (var i = 1; i <= numberOfStages; i++) {

      var perforationInfo = new PerforationInformation()

      perforationInfo.idStage = i

      this.perforationList.push(perforationInfo)


    }

  }


  crearTablaPumpSchedule() {


    this.pumpScheduleList = new Array<PumpSchedule>()

    console.log('Number of pumps ' + this.formNumberOfPump.value.numberOfPumps)
    var numberOfStages = this.formNumberOfPump.value.numberOfPumps

    for (var i = 1; i <= numberOfStages; i++) {

      var pumpSchedule = new PumpSchedule()

      pumpSchedule.idPump = i

      this.pumpScheduleList.push(pumpSchedule)


    }

  }



  public cellEdit(evt) {

    console.log('Cell Edit ', evt.newValue + "/ ID ", evt)
  }

  siguiente() {

    if (this.dialogService.obtenerPersistencia("generalInfo")) {

      this.dialogService.crearPersistencia("generalInfo", false)
      this.generalWell = false
      this.completionDesignFlag = true
      this.dialogService.crearPersistencia("completionDesign", true)
    } else if (this.dialogService.obtenerPersistencia("completionDesign")) {

      this.dialogService.crearPersistencia("completionDesign", false)
      this.completionDesignFlag = false
      this.perforationDesignFlag = true
      this.dialogService.crearPersistencia("perforationDesign", true)
    } else if (this.dialogService.obtenerPersistencia("perforationDesign")) {

      this.dialogService.crearPersistencia("perforationDesign", false)
      this.perforationDesignFlag = false
      this.wellboreConfigurationFlag = true
      this.dialogService.crearPersistencia("wellboreConfiguration", true)
    } else if (this.dialogService.obtenerPersistencia("wellboreConfiguration")) {

      this.dialogService.crearPersistencia("wellboreConfiguration", false)
      this.wellboreConfigurationFlag = false
      this.geologyRelatedConfigFlag = true
      this.dialogService.crearPersistencia("geologyRelatedConfig", true)
    } else if (this.dialogService.obtenerPersistencia("geologyRelatedConfig")) {

      this.dialogService.crearPersistencia("geologyRelatedConfig", false)
      this.geologyRelatedConfigFlag = false
      this.diagnosticsInformationFlag = true
      this.dialogService.crearPersistencia("diagnosticsInformation", true)
    } else if (this.dialogService.obtenerPersistencia("diagnosticsInformation")) {

      this.dialogService.crearPersistencia("diagnosticsInformation", false)
      this.diagnosticsInformationFlag = false
      this.perforationInformationFlag = true
      this.dialogService.crearPersistencia("perforationInformation", true)
      this.crearTablaPerforationInfo()

    } else if (this.dialogService.obtenerPersistencia("perforationInformation")) {
      console.log('Entro a perf')
      this.dialogService.crearPersistencia("perforationInformation", false)
      this.perforationInformationFlag = false
      this.pumpSchedulePrevFlag = true
      this.dialogService.crearPersistencia("pumpSchedulePrev", true)


    } else if (this.dialogService.obtenerPersistencia("pumpSchedulePrev")) {

      console.log('Entro a prev pump')

      this.dialogService.crearPersistencia("pumpSchedulePrev", false)
      this.pumpSchedulePrevFlag = false
      this.pumpScheduleFlag = true
      this.dialogService.crearPersistencia("pumpSchedule", true)
      this.crearTablaPumpSchedule()


    }



  }

  back() {

    if (this.dialogService.obtenerPersistencia("generalInfo")) {



    } else if (this.dialogService.obtenerPersistencia("completionDesign")) {

      this.dialogService.crearPersistencia("generalInfo", true)
      this.completionDesignFlag = false
      this.generalWell = true
      this.dialogService.crearPersistencia("completionDesign", false)

    } else if (this.dialogService.obtenerPersistencia("perforationDesign")) {

      this.dialogService.crearPersistencia("completionDesign", true)
      this.perforationDesignFlag = false
      this.completionDesignFlag = true
      this.dialogService.crearPersistencia("perforationDesign", false)
    } else if (this.dialogService.obtenerPersistencia("wellboreConfiguration")) {

      this.dialogService.crearPersistencia("perforationDesign", true)
      this.wellboreConfigurationFlag = false
      this.perforationDesignFlag = true
      this.dialogService.crearPersistencia("wellboreConfiguration", false)
    } else if (this.dialogService.obtenerPersistencia("geologyRelatedConfig")) {

      this.dialogService.crearPersistencia("geologyRelatedConfig", false)
      this.geologyRelatedConfigFlag = false
      this.wellboreConfigurationFlag = true
      this.dialogService.crearPersistencia("wellboreConfiguration", true)
    } else if (this.dialogService.obtenerPersistencia("diagnosticsInformation")) {

      this.dialogService.crearPersistencia("diagnosticsInformation", false)
      this.diagnosticsInformationFlag = false
      this.geologyRelatedConfigFlag = true
      this.dialogService.crearPersistencia("geologyRelatedConfig", true)
    } else if (this.dialogService.obtenerPersistencia("perforationInformation")) {

      this.dialogService.crearPersistencia("perforationInformation", false)
      this.perforationInformationFlag = false
      this.diagnosticsInformationFlag = true
      this.dialogService.crearPersistencia("diagnosticsInformation", true)

    } else if (this.dialogService.obtenerPersistencia("pumpSchedulePrev")) {

      this.dialogService.crearPersistencia("pumpSchedulePrev", false)
      this.pumpSchedulePrevFlag = false
      this.perforationInformationFlag = true
      this.dialogService.crearPersistencia("perforationInformation", true)

    } else if (this.dialogService.obtenerPersistencia("pumpSchedule")) {

      this.dialogService.crearPersistencia("pumpSchedule", false)
      this.pumpScheduleFlag = false
      this.pumpSchedulePrevFlag = true
      this.dialogService.crearPersistencia("pumpSchedulePrev", true)

    }



  }

  asignarValor(evento) {

    console.log('Cmbios nuevos evento ', evento)
    console.log('Cmbios nuevos ' + this.formGeneralWell.value.sucursal)

  }


  ngOnInit(): void {
  }

}
