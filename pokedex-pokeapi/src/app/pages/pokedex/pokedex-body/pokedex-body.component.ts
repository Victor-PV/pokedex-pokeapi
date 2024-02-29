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

  data : any = {};

  regiones : any = REGIONES;
  regionActual : Region = this.regiones.KANTO;


  constructor(private apiService : ApiService) { }

  ngOnInit(): void {
    if(this.checkRegionLocalStorage(this.regionActual))
      this.fillListFromLocalStorage(this.regionActual);
    else
      this.fillListFromApi(this.regionActual);

      console.log(this.data)

  }

  fillListFromApi(region : Region){
    let pokemonIndexCounter : number = 0;
    let listaProvisional : any = [];
    this.apiService.getAllPokemonByRegion(region).subscribe(data => {
      this.data = data.results;
      data.results.forEach((item: any) => {
        //Carga la etiqueta del nombre del pokemon, si la pilla ejecuta el codigo
        let element : any = document.getElementById("pokemonNameTag"+(region.desde+pokemonIndexCounter));
        if(element)
          element.innerHTML = item.name.charAt(0).toUpperCase() + item.name.substring(1); //Sustituye la primera letra por mayuscula

        // Guarda los pokemon en una lista que posteriormente guardaremos en el localstorage para evitar llamadas
        listaProvisional.push({
          id: region.desde+pokemonIndexCounter,
          name: item.name
        });

        pokemonIndexCounter++;
      });

      //Guarda la lista con los pokemon encontrados para en un futuro ahorrar esta llamada a la api
      localStorage.setItem("region_"+region.nombre, JSON.stringify(listaProvisional));
      let a : any = window.localStorage.getItem("region_"+region.nombre);
      //console.log(JSON.parse(a));
      //console.log(this.data)
      console.log(this.data)
    })
  }

  fillListFromLocalStorage(region : Region){
    let list : any = window.localStorage.getItem("region_"+region.nombre);
    if(list)
      this.data = JSON.parse(list);
    else
      this.fillListFromApi(region)
  }

  printPokemon(){
    this.apiService.getPokemonById(564).subscribe(data => {
      //console.log(data)
    })
  }

  checkRegionLocalStorage(region: Region){
    if(localStorage.getItem("region_"+region.nombre) === null)
      return false
    return true
  }

}
