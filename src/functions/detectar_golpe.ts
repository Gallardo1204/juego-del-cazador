import { Arbol } from "../classes/arbol";
import { Flecha } from "../classes/flecha";
import { Venado } from '../classes/venado';

export function detectarGolpe(flecha: Flecha, objeto: (Arbol[] | Venado[] )) {

  for (const obj of objeto) {
    if (flecha.posicionX + flecha.ancho >= obj.posicionX+20 &&
        flecha.posicionY >= obj.posicionY &&
        flecha.posicionY <= obj.posicionY + obj.alto
      ){
        return objeto.indexOf(obj);
    }
  }
}