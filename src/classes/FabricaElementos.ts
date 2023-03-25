import { Arbol } from '../models/arbol';
import { Venado } from '../models/venado';
import { numeroAleatorio } from '../common/numero_aleatorio';
import { posXMinArbol, posXMaxArbol, 
         posYMinArbol, posYMaxArbol,
         posXMinVenado, posXMaxVenado,   
         posYMaxVenado, posYMinVenado  
} from '../common/constantes';

export class FabricaElemento {

  static crearElemento(elemento: string, alto: number, ancho: number): (Arbol | Venado) {

    switch (elemento) {
      case 'arbol':
        return new Arbol(
          numeroAleatorio(posXMinArbol, posXMaxArbol),
          numeroAleatorio(posYMinArbol, posYMaxArbol),
          alto,
          ancho
        );
      case 'venado':
        return new Venado(
          numeroAleatorio(posXMinVenado, posXMaxVenado),
          numeroAleatorio(posYMinVenado, posYMaxVenado),
          alto,
          ancho
        );
      default:
        throw new Error(`El elemento ${elemento} no se puede crear`);
    }
  }

}