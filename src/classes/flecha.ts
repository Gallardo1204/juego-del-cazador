import { dibujar } from "../functions/dibujar";
import flechaImg from '../img/flecha.png';
import { altoFlecha, anchoFlecha } from '../functions/constantes';

export class Flecha {

  posicionX: number;
  posicionY: number;
  alto: number;
  ancho: number;
  velocidad: number;

  constructor(posicionX: number, posicionY: number) {
    this.posicionX = posicionX;
    this.posicionY = posicionY;
    this.alto = altoFlecha;
    this.ancho = anchoFlecha;
    this.velocidad = 0;
  }

  renderizar(): void {
    dibujar(flechaImg, this.posicionX, this.posicionY, this.ancho, this.alto);
  }

  actualizarPosicion(){
    this.posicionX += this.velocidad;
  }

} 