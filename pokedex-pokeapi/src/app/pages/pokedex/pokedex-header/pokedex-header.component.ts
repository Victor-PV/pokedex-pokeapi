import { Component, OnInit } from '@angular/core';
import { REGIONES } from 'src/app/constants/global.constants';
import { Region } from '../../../interfaces/region';

@Component({
  selector: 'app-pokedex-header',
  templateUrl: './pokedex-header.component.html',
  styleUrls: ['./pokedex-header.component.scss']
})
export class PokedexHeaderComponent implements OnInit {

  search : String ="";
  constructor() { }

  ngOnInit(): void {
  }

}
