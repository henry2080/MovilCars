import {AuthenticationStrategy} from '@loopback/authentication';
import {service} from '@loopback/core';
import {HttpErrors,Request} from '@loopback/rest';
import parseBearerToken from 'parse-bearer-token';
import {AutenticacionService} from '../services';
import {UserProfile} from '@loopback/security';

export class EstrategiaAdministrador implements AuthenticationStrategy{
  name : string = 'admin';

  constructor(
    @service(AutenticacionService)
    public servicioAuthenticacion:AutenticacionService
  ){}
  async authenticate(request : Request) : Promise<UserProfile | undefined>{
    let token = parseBearerToken(request);
    if (token){
      let datos = this.servicioAuthenticacion.ValidarTokenJWT(token);
      if (datos/*.data.rol*/){
        let perfil:UserProfile=Object.assign({
          nombre:datos.data.nombre
        });
        return perfil;
      }else{
        throw new HttpErrors[401]("El token suministrado no es valido");
      }
    }else{
      throw new HttpErrors[401]("No hay un token en la solicitud");
    }
  }
}
