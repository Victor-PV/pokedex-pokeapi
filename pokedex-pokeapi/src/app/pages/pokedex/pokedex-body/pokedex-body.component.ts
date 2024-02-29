import { Component, OnInit } from '@angular/core';
import { REGIONES } from 'src/app/constants/global.constants';
import { Region } from '../../../interfaces/region';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-pokedex-body',
  templateUrl: './pokedex-body.component.html',
  styleUrls: ['./pokedex-body.component.scss']
})
export class PokedexBodyComponent implements OnInit {

  llamada : any = {};

  regiones : any = REGIONES;
  regionActual : Region = this.regiones.HOENN;


  constructor(private apiService : ApiService) { }

  ngOnInit(): void {
    this.llenarData();
  }

  llenarData(){
    let pokemonIndexCounter : number = 0;
    this.apiService.getAllPokemonByRegion(this.regionActual).subscribe(data => {
      data.results.forEach((item: any) => {
        //Carga la etiqueta del nombre del pokemon, si la pilla ejecuta el codigo
        let element : any = document.getElementById("pokemonNameTag"+(this.regionActual.desde+pokemonIndexCounter++));
        if(element)
          element.innerHTML = item.name.charAt(0).toUpperCase() + item.name.substring(1); //Sustituye la primera letra por mayuscula
      });
      console.log(data.results)
    })
  }

}
