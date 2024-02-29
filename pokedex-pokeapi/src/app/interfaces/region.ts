export interface Region {
  nombre: string; //Nombre de la region manin
  desde: number; //Primer numero de su pokedex
  hasta: number; //Ultimo numero de su pokedex
  cantidad: number; //Cantidad de moñecos que hay en cada region
  regionIndex: string; //Indice que usa la pokeapi para identificar las regiones
  //constructor(public desde: number, public hasta: number){}
}
