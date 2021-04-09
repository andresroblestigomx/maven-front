import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { GlobalIP } from 'src/app/paginas/modelos/GlobalIP';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  
  getLogin = "login"
  getUsuario = "api/usuarios/me"


  constructor(private httpClient: HttpClient) { }

  login(data: FormData): Observable<any> {
    console.log("altaCliente");
    var headers1 = new HttpHeaders();
    headers1.append('Content-Type', 'application/json');
    headers1.append('Access-Control-Allow-Origin', '*')
    const httpOptions = {
      headers: headers1,
      withCredentials: true,
    };

    return this.httpClient.post(GlobalIP.BASEURLPROD + this.getLogin, data, httpOptions).pipe(
      map((res: HttpResponse<Array<any>>) => {

        return res;
      })
    )
  }

  obtenerDatoCliente(): Observable<any> {
    console.log("altaCliente");
    var headers1 = new HttpHeaders();
    headers1.append('Content-Type', 'application/json');
    headers1.append('Access-Control-Allow-Origin', '*')
    const httpOptions = {
      headers: headers1,
      withCredentials: true,
    };

    return this.httpClient.get(GlobalIP.BASEURLPROD + this.getUsuario, httpOptions).pipe(
      map((res: HttpResponse<Array<any>>) => {

        return res;
      })
    )
  }
}
