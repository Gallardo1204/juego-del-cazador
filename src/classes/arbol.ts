import { IElemento } from '../interfaces/IElemento';
import { dibujar } from '../functions/dibujar';
import arbolImg from '../img/arbol.png';

export class Arbol implements IElemento {

  posicionX: number;
  posicionY: number;
  alto: number;
  ancho: number;

  constructor(posicionX: number, posicionY: number, alto: number, ancho: number) {
    this.posicionX = posicionX;
    this.posicionY = posicionY;
    this.alto = alto;
    this.ancho = ancho;
  }

  renderizar(): void {
    dibujar(arbolImg, this.posicionX, this.posicionY, this.ancho, this.alto);
  }

}