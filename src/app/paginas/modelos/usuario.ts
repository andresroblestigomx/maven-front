export class Usuario{

    idUsuario: number
    correo: string
    nombre: string
    telefonoCelular: string
    apellidoPaterno: string
    apellidoMaterno: string
    contrasena: string
    roles: Array<Number>
    activo: boolean
    sexo: string
    edad: string
    uuid: string
    banderaGeneral: boolean
    estatusPlataforma: string

}



export class CambiarPassword{

    viejoPassword: string;
	nuevoPassword: string;
    nuevoPasswordConfirm : string;
    correo:string

}
