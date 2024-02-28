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
  parame : string = "/pokedex/2";

  regiones : any = REGIONES;
  regionActual : Region = this.regiones.HOENN;


  constructor(private apiService : ApiService) { }

  ngOnInit(): void {
    this.llenarData();
  }

  llenarData(){
    this.apiService.getData(this.parame).subscribe(data => {
      this.data = data;
      console.log(data.pokemon_entries)
    })
  }

}
