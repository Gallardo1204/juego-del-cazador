import { IElemento } from '../interfaces/IElemento';
import { dibujar } from '../common/dibujar';
import venadoImg from '../img/venado.png';


export class Venado implements IElemento {

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
    dibujar(venadoImg, this.posicionX, this.posicionY, this.ancho, this.alto);    
  }

}