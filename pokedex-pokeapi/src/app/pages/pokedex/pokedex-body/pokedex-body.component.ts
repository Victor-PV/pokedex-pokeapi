import { Component, OnInit, ViewChild, ElementRef, AfterViewInit,  Directive, Input, QueryList, ViewChildren } from '@angular/core';
import { REGIONES } from 'src/app/constants/global.constants';
import { Region } from '../../../interfaces/region';
import { ApiService } from 'src/app/services/api.service';
import { debug } from 'console';

@Component({
  selector: 'app-pokedex-body',
  templateUrl: './pokedex-body.component.html',
  styleUrls: ['./pokedex-body.component.scss']
})
export class PokedexBodyComponent implements OnInit, AfterViewInit {

  data : any = {};

  regiones : any = REGIONES;
  regionesList : any = Object.keys(this.regiones);
  regionActual : Region = this.regiones.TESELIA;


  constructor(private apiService : ApiService) { }

  ngOnInit(): void {

    this.loadData();

  }

  @ViewChildren("bodyListContainer") bodyListContainer!: QueryList<any>
  @ViewChildren("pokemonNameTag") divs: QueryList<any> | undefined
  ngAfterViewInit():void {
    //console.log(this.bodyListContainer.get(0).nativeElement)
  }

  loadData(){
    console.log("CARGANDO DESDE "+(this.checkRegionLocalStorage(this.regionActual) ? "EL LOCAL STORAGE" : "LA API"))
    if(this.checkRegionLocalStorage(this.regionActual))
      this.fillListFromLocalStorage(this.regionActual);
    else
      this.fillListFromApi(this.regionActual);
      //console.log(this.data)
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
      let list : any = window.localStorage.getItem("region_"+region.nombre);
      this.data = JSON.parse(list);
    })
  }

  fillListFromLocalStorage(region : Region){
    let list : any = window.localStorage.getItem("region_"+region.nombre);
    if(list){
      this.data = JSON.parse(list);
    }else{
      this.fillListFromApi(region)
    }

  }

  switchRegion(){
    this.regionActual = this.regionActual == this.regiones.SINNOH ? this.regiones.HOENN : this.regiones.SINNOH;
    this.loadData();
  }

  //Debug
  printPokemon(id: number){
    this.apiService.getPokemonById(id).subscribe(data => {
      console.log(data)
    })
  }

  checkRegionLocalStorage(region: Region){
    if(localStorage.getItem("region_"+region.nombre) === null)
      return false
    return true
  }

}
