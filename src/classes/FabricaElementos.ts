import { IElemento } from '../interfaces/IElemento';
import { Arbol } from '../models/arbol';
import { Venado } from '../models/venado';
import { numeroAleatorio } from '../common/numero_aleatorio';
import { Arquero } from '../models/arquero';

export class FabricaElemento {

  static anchoCanvas = 1200;
  static altoCanvas = 600;

  static crearElemento(elemento: string, alto: number, ancho: number, cantidad?: number): IElemento {

    switch (elemento) {
      case 'arbol':
        return new Arbol(
          numeroAleatorio(this.anchoCanvas - 700, this.anchoCanvas - 600),
          numeroAleatorio(0, 360),
          alto,
          ancho
        );
      case 'venado':
        return new Venado(
          numeroAleatorio(this.anchoCanvas - 500, this.anchoCanvas-125),
          numeroAleatorio(0, this.altoCanvas - 123),
          alto,
          ancho
        );
      case 'cazador':
        return new Arquero(
          5,
          200,
          alto,
          ancho
        );
      default:
        throw new Error(`El elemento ${elemento} no se puede crear`);
    }
  }

}