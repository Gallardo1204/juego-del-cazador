import { velocidadArquero, velocidadFlecha } from '../functions/constantes';
import { dibujar } from '../functions/dibujar';
import arqueroImg from '../img/arquero.png';
import { Flecha } from './flecha';

export class Arquero {

  posicionX: number;
  posicionY: number;
  alto: number;
  ancho: number;
  direccion: string;
  flechas: Flecha[];

  constructor(posicionX: number, posicionY: number, ancho: number, alto: number) {
    this.posicionX = posicionX;
    this.posicionY = posicionY;
    this.ancho = ancho;
    this.alto = alto;
    this.direccion = '';
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

  disparar() {
    const flecha = new Flecha(this.posicionX + this.ancho, this.posicionY + (this.alto-110) / 2);
    flecha.velocidad = velocidadFlecha;
    this.flechas.push(flecha);
  }

}
