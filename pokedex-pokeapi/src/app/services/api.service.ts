import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Region } from '../interfaces/region';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  //POSIBLE ERROR DE CORS
  //https://chromewebstore.google.com/detail/allow-cors-access-control/lhobafahddgcelffkeicbaginigeejlf?pli=1

  private urlAapi = "https://pokeapi.co/api/v2/";

  constructor(private http: HttpClient) { }

  public getAllPokemonByRegion(region: Region) : Observable<any> {
    //console.log(this.urlAapi + "pokemon?limit="+region.cantidad+"&offset="+(region.desde-1))
    return this.http.get<any>(this.urlAapi + "pokemon?limit="+region.cantidad+"&offset="+(region.desde-1));
  }
  public getPokemonById(id: number) : Observable<any> {
    //console.log(this.urlAapi + "pokemon?limit="+region.cantidad+"&offset="+(region.desde-1))
    return this.http.get<any>(this.urlAapi + "pokemon/"+id);
  }
}
