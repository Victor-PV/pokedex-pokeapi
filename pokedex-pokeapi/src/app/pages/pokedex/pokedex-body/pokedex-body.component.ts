import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pokedex-body',
  templateUrl: './pokedex-body.component.html',
  styleUrls: ['./pokedex-body.component.scss']
})
export class PokedexBodyComponent implements OnInit {

  startIndex : number = 151;

  constructor() { }

  ngOnInit(): void {
  }

}
