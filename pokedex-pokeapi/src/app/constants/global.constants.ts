import { Region } from '../interfaces/region';

const KANTO : Region = {nombre: "Kanto", desde: 1, hasta: 151, cantidad: 151}
const JOHTO : Region = {nombre: "Johto", desde: 152, hasta: 251, cantidad: 100}
const HOENN : Region = {nombre: "Hoenn", desde: 252, hasta: 386, cantidad: 135}
const SINNOH : Region = {nombre: "Sinnoh", desde: 387, hasta: 494, cantidad: 108}
const TESELIA : Region = {nombre: "Teselia", desde: 495, hasta: 649, cantidad: 155}
const KALOS : Region = {nombre: "Kalos", desde: 650, hasta: 721, cantidad: 72}
const ALOLA : Region = {nombre: "Alola", desde: 722, hasta: 809, cantidad: 89}
const GALAR : Region = {nombre: "Galar", desde: 810, hasta: 905, cantidad: 80}
const PALDEA : Region = {nombre: "Paldea", desde: 906, hasta: 1025, cantidad: 120}

export const REGIONES : any = {
    KANTO, JOHTO, HOENN, SINNOH, TESELIA, KALOS, ALOLA, GALAR, PALDEA
}
