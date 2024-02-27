import { Region } from '../interfaces/region';

const KANTO : Region = {desde: 1, hasta: 151, cantidad: 151}
const JOHTO : Region = {desde: 152, hasta: 251, cantidad: 100}
const HOENN : Region = {desde: 252, hasta: 386, cantidad: 135}
const SINNOH : Region = {desde: 387, hasta: 494, cantidad: 108}
const TESELIA : Region = {desde: 495, hasta: 649, cantidad: 155}
const KALOS : Region = {desde: 650, hasta: 721, cantidad: 72}
const ALOLA : Region = {desde: 722, hasta: 809, cantidad: 89}
const GALAR : Region = {desde: 810, hasta: 905, cantidad: 80}
const PALDEA : Region = {desde: 906, hasta: 1025, cantidad: 120}

export const REGIONES : any = {
    KANTO, 
    JOHTO,
    HOENN,
    SINNOH,
    TESELIA,
    KALOS,
    ALOLA,
    GALAR,
    PALDEA
}
