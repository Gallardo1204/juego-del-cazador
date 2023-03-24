import { IElemento } from '../interfaces/IElemento';
import { dibujar } from '../common/dibujar';
import arqueroImg from '../img/arquero.png';


export class Arquero implements IElemento {

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
    dibujar(arqueroImg, this.posicionX, this.posicionY, this.ancho, this.alto);    
  }

}