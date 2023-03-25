import { IElemento } from '../interfaces/IElemento';
import { dibujar } from '../common/dibujar';
import venadoImg from '../img/venado.png';
import { posXMinVenado, posYMinVenado, posXMaxVenado, posYMaxVenado } from '../common/constantes';
import { numeroAleatorio } from '../common/numero_aleatorio';

export class Venado implements IElemento {

  posicionX: number;
  posicionY: number;
  alto: number;
  ancho: number;
  visible?: boolean = true;

  constructor(posicionX: number, posicionY: number, alto: number, ancho: number) {
    this.posicionX = posicionX;
    this.posicionY = posicionY;
    this.alto = alto;
    this.ancho = ancho;
  }

  renderizar(): void {
    dibujar(venadoImg, this.posicionX, this.posicionY, this.ancho, this.alto);
  }

  alternarPosicion?(): void {
    this.visible = !this.visible;

    if (!this.visible) {
      
      // Si el venado desaparece, cambiar su posición aleatoriamente
      this.posicionX = numeroAleatorio(posXMinVenado, posXMaxVenado);
      this.posicionY = numeroAleatorio(posYMinVenado, posYMaxVenado);
    }
  }

}