import { dibujar } from '../common/dibujar';
import arqueroImg from '../img/arquero.png';
import { velocidadArquero } from '../common/constantes';

export class Arquero {

  posicionX: number;
  posicionY: number;
  alto: number;
  ancho: number;
  direccion: string;
  flechas: [];
  velocidad: number;

  constructor(posicionX: number, posicionY: number, ancho: number, alto: number) {
    this.posicionX = posicionX;
    this.posicionY = posicionY;
    this.ancho = ancho;
    this.alto = alto;
    this.direccion = '';
    this.velocidad = 5;
    this.flechas = [];
  }

  renderizar(): void {
    dibujar(arqueroImg, this.posicionX, this.posicionY, this.ancho, this.alto);
  }

  moverArriba() {
    this.direccion = "upArrow";
    this.posicionY -= velocidadArquero
  }

  moverAbajo() {
    this.direccion = "downArrow";
    this.posicionY += velocidadArquero;
  }

}
