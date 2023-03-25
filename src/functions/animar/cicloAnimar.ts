import { Arbol } from "../../classes/arbol";
import { Venado } from "../../classes/venado";
import { Arquero } from '../../classes/arquero';
import { Contexto } from "../../classes/context";
import { altoCanvas, anchoCanvas } from "../constantes";
import { moverArquero } from "./mover_arquero";
import { dibujarFondo } from "./dibujar_fondo";

const ctx = Contexto.getInstancia();

export function cicloAnimar(arboles: Arbol[], venados: Venado[], arquero: Arquero) {

  animar();

  function animar() {

    // Borrar el canvas
    ctx.clearRect(0, 0, anchoCanvas, altoCanvas);
    dibujarFondo();
    arquero.renderizar();
    moverArquero(arquero);

    // Dibujar arboles
    arboles.forEach(arbol => {
      arbol.renderizar();
    });

    // Dibujar los venados que estén visibles
    venados.forEach(venado => {
      if (venado.visible) {
        venado.renderizar();
      }
    });

    // Hacer que los venados desaparezcan y aparezcan aleatoriamente
    venados.forEach(venado => {
      if (Math.random() < 0.0013) {
        venado.alternarPosicion();
      }
    });

    // Repetir la animación
    requestAnimationFrame(animar);

  }

}
