import { Proyecto } from "./Proyecto"

export class GeneralWell {



    constructor() {

    }

    idWell: number
    idProject: Proyecto
    wellName: string
    apiNumber: number
    afeNumber: number
    latitudeTop: string
    longitudeTop: string
    pumpingServiceCompany: string
    wireLineCompany: string
    jobType: string
    sandSource: string


}


export class CompletionDesign {



    constructor() {

    }

    idWell: GeneralWell
    plannedNumberStages: number
    plannedNumberStagesPerDay: number
    plannedClusterSpacing: number
    planneedCompletedLateral: number
    simulationFluid: string
    surfaceVolume: number
    overFlush: number
    hidraulicHorsePower: number
    proppantTypeMesh: string
    proppantSpecificGravity: number
    proppantSupplier: string
    proppantCommercialName: string


}


export class PerforationGunDesign {



    constructor() {

    }

    idWell: GeneralWell
    perforationTechnique: number
    perforationDiameter: number
    CorrectedPerfDiameter: number


}


export class wellboreConfiguration {



    constructor() {

    }


    idWell: GeneralWell
    casingType: number
    casingWeigth: number
    capactity: number
    casingOD: number
    casingID: number
    length: number
    casingYield: number
    burst: number
    collapse: number
    casingBrinellHardness: number
    injectionPAth: string
    shortJoint: number
    groundLevelElevation: number
    kellyBushingElevation: number
    kopDepth: number
    thirtyDegDepth: number
    sixtydegDepth: number
    ninetyDegDepth: number
    plugBackTotalDepth: number
    totalMeasuredDepth: number
    trueVerticalDepth: number




}


export class GeologyRelatedInfo {



    constructor() {

    }

    idWell: GeneralWell
    formation: string
    fluidTemperature: number
    bottomholeTemperature: number
    bottomholePressure: number
    minimumStressGradient: number


}

export class DiagnosticsInformation {



    constructor() {

    }

    idWell: GeneralWell
    miroSeismic: boolean
    fluidOrOil: boolean
    opticFiber: boolean
    otherDiagnostics: string
    chemType: string

}



export class PerforationInformation {



    constructor() {

    }

    idWell: GeneralWell
    idStage: number
    perforationPhasing: number
    numOflusters: number
    clusterSpacing: number
    numOfPerfs: number
    stageSpacing: number
    perforationCoverage: number
    pipeCap: number
    midPerforation: number
    topPerforation: number
    bottomPerf: number
    plugSettingDepth: number




}



export class PumpSchedule {



    constructor() {

    }

    idWell: GeneralWell
    idPump: number
    type: string
    fluidType: string
    propantType: string
    conc: number
    cleanVol: number
    slurryVol: number
    scale: number
    surf: number
    bio: number
    fr: number
    gel: number
    xLink: number
    sp: number
    rate: number




}




