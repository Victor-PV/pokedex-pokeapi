import { Injectable } from '@angular/core';
import { PokedexBodyComponent } from '../pages/pokedex/pokedex-body/pokedex-body.component';

@Injectable({
  providedIn: 'root'
})
export class SharedService {

  constructor() { }

  executeMethod(){
    //PokedexBodyComponent.switchRegion();
  }
}
