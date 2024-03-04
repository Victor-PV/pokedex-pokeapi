import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { MatSelect } from '@angular/material/select';
import { REGIONES } from 'src/app/constants/global.constants';

@Component({
  selector: 'app-pokedex-header',
  templateUrl: './pokedex-header.component.html',
  styleUrls: ['./pokedex-header.component.scss']
})
export class PokedexHeaderComponent implements OnInit, AfterViewInit {
  
  @ViewChild('selectRegion') selectRegion!: MatSelect;

  search : String ="";
  regiones : any = REGIONES;
  regionesList : any = Object.keys(this.regiones);
  selected = 'TESELIA';

  constructor() { }

  ngOnInit(): void {
  }

  ngAfterViewInit() {
    this.selectRegion.valueChange.subscribe(item=> {

      Object.keys(this.regiones).forEach(key => {
        const region = this.regiones[key];
        if(region.nombre.toLowerCase() === item.toLowerCase())
          console.log(region);
      });
      // Ejecutar tu método aquí
    });
  }

}
