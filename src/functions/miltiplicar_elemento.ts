import { FabricaElemento } from '../classes/FabricaElementos';
import { Arbol } from '../classes/arbol';
import { Venado } from '../classes/venado';

export function multiplicarElementos(
  tipoElemento: string,
  anchoElemento: number,
  altoElemento: number,
  cantElemento: number): (Arbol[] | Venado[]) {

  let elementos: (Arbol[] | Venado[]) = [];

  for (let i = 0; i < cantElemento; i++) {

    let elemento = FabricaElemento.crearElemento(tipoElemento, altoElemento, anchoElemento);
    elementos.push(elemento);

  }

  return elementos;

}