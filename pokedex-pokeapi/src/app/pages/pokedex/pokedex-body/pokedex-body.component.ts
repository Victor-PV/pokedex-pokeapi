import { Component, OnInit } from '@angular/core';
import { REGIONES } from 'src/app/constants/global.constants';
import { Region } from '../../../interfaces/region';

@Component({
  selector: 'app-pokedex-body',
  templateUrl: './pokedex-body.component.html',
  styleUrls: ['./pokedex-body.component.scss']
})
export class PokedexBodyComponent implements OnInit {

  regiones : any = REGIONES;
  regionActual : Region = this.regiones.HOENN;

  constructor() { }

  ngOnInit(): void {
  }

}
