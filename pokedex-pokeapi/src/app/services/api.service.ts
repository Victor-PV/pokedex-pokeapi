import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  private urlAapi = "https://pokeapi.co/api/v2";

  constructor(private http: HttpClient) { }

  public getData(parameters: string) : Observable<any> {
    return this.http.get<any>(this.urlAapi + parameters);
  }
}
