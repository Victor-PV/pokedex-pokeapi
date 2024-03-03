import { Component, OnInit, ViewChild, ElementRef, AfterViewInit,  Directive, Input, QueryList, ViewChildren } from '@angular/core';
import { REGIONES } from 'src/app/constants/global.constants';
import { Region } from '../../../interfaces/region';
import { ApiService } from 'src/app/services/api.service';
import { debug } from 'console';

@Directive({selector: 'pane'})
export class Pane {
  @Input() val!: string;
}

@Component({
  selector: 'app-pokedex-body',
  templateUrl: './pokedex-body.component.html',
  styleUrls: ['./pokedex-body.component.scss']
})
export class PokedexBodyComponent implements OnInit, AfterViewInit {

  data : any = {};

  regiones : any = REGIONES;
  regionActual : Region = this.regiones.SINNOH;


  constructor(private apiService : ApiService) { }

  ngOnInit(): void {
    console.log(this.checkRegionLocalStorage(this.regionActual) ? "LOAD FROM LOCAL STORAGE" : "LOAD FROM API")
    if(this.checkRegionLocalStorage(this.regionActual))
      this.fillListFromLocalStorage(this.regionActual);
    else
      this.fillListFromApi(this.regionActual);
      //console.log(this.data)

  }

  @ViewChildren("pokemonNameTag") divs: QueryList<any> | undefined
  
  ngAfterViewInit() {
    this.divs?.forEach(div => {
      this.printOneCardName(div.nativeElement.id)
    });    
  }

  fillListFromApi(region : Region){
    let pokemonIndexCounter : number = 0;
    let listaProvisional : any = [];
    this.apiService.getAllPokemonByRegion(region).subscribe(data => {
      this.data = data.results;
      data.results.forEach((item: any) => {
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
      this.printCardsName(listaProvisional, region)
    })
  }

  fillListFromLocalStorage(region : Region){
    let list : any = window.localStorage.getItem("region_"+region.nombre);
    if(list){
      this.data = JSON.parse(list);
      this.printCardsName(this.data, region)
    }else{
      this.fillListFromApi(region)
    }

  }

  // Se ejecuta cuando lo llama la propia carta desde el HTML cuando carga al iniciar la pagina
  printOneCardName(id: string){
    let element : any = document.getElementById(id);
    if(element){
      let list : any = window.localStorage.getItem("region_"+this.regionActual.nombre);
      list = JSON.parse(list)
      if(list){
        list.forEach((item: any) => {
          if("pokemonNameTag"+item.id == id) 
            element.innerHTML = item.name.charAt(0).toUpperCase() + item.name.substring(1); 
        })
      }
    }
      
  }

  printCardsName(listaProvisional : [], region: Region){
    let pokemonIndexCounter : number = 0;
    listaProvisional.forEach((item: any) => {
      //Carga la etiqueta del nombre del pokemon, si la pilla ejecuta el codigo
      let element : any = document.getElementById("pokemonNameTag"+(region.desde+pokemonIndexCounter++));
      //console.log(element)
      if(element)
        element.innerHTML = item.name.charAt(0).toUpperCase() + item.name.substring(1); //Sustituye la primera letra por mayuscula
    })
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
