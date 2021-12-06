import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ModeloIdentificar } from '../modelos/identificar.modelo';

@Injectable({
  providedIn: 'root'
})
export class SeguridadService {
  url = 'http://localhost:300'
  constructor(private http: HttpClient) { }
  Identificar(usuario: string, clave: string): Observable<ModeloIdentificar>{
    return this.http.post<ModeloIdentificar>(`${this.url}/identificarPersona`, {
      usuario:usuario,
      clave: clave
    },
    {
      headers:new HttpHeaders({
    })
  }
    )
  }
  AlmcenarSesion(datos: ModeloIdentificar){
    let datosString = JSON.stringify(datos);
    localStorage.setItem("datosSesion", datosString);
  }
  ObtenerInformacionSesion(){
    let datosString = localStorage.getItem("datosSesion");
    if(datosString){
      let datos = JSON.parse(datosString);
      return datos;
    }else{
      return null;
    }
  }
  EliminarInformacionSesion(){
    localStorage.removeItem("datosSesion");
  }
}
