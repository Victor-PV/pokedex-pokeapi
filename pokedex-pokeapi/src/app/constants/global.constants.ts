import { Region } from '../interfaces/region';

const KANTO : Region = {nombre: "Kanto", desde: 1, hasta: 151, cantidad: 151, regionIndex: "1"}
const JOHTO : Region = {nombre: "Johto", desde: 152, hasta: 251, cantidad: 100, regionIndex: "2"}
const HOENN : Region = {nombre: "Hoenn", desde: 252, hasta: 386, cantidad: 135, regionIndex: "3"}
const SINNOH : Region = {nombre: "Sinnoh", desde: 387, hasta: 494, cantidad: 108, regionIndex: "4"}
const TESELIA : Region = {nombre: "Teselia", desde: 495, hasta: 649, cantidad: 155, regionIndex: "5"}
const KALOS : Region = {nombre: "Kalos", desde: 650, hasta: 721, cantidad: 72, regionIndex: "6"}
const ALOLA : Region = {nombre: "Alola", desde: 722, hasta: 809, cantidad: 88, regionIndex: "7"}
const GALAR : Region = {nombre: "Galar", desde: 810, hasta: 905, cantidad: 86, regionIndex: "8"}
const PALDEA : Region = {nombre: "Paldea", desde: 906, hasta: 1025, cantidad: 120, regionIndex: "9"}

export const REGIONES : any = {
    KANTO, JOHTO, HOENN, SINNOH, TESELIA, KALOS, ALOLA, GALAR, PALDEA
}
