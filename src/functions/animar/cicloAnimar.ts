import { Arbol } from "../../classes/arbol";
import { Venado } from "../../classes/venado";
import { Arquero } from '../../classes/arquero';
import { Contexto } from "../../classes/context";
import { altoCanvas, anchoCanvas, probalidadVendado } from '../constantes';
import { moverArquero } from "./mover_arquero";
import { dibujarFondo } from "./dibujar_fondo";
import { Flecha } from "../../classes/flecha";
import { detectarGolpe } from "../detectar_golpe";

const ctx = Contexto.getInstancia();

export function cicloAnimar(arboles: Arbol[], venados: Venado[], arquero: Arquero) {

  const arqueros: Arquero[] = [];
  const flechas: Flecha[] = [];

  document.addEventListener("keydown", (event: KeyboardEvent) => {
    if (event.code === "Space") {
      arqueros.push(arquero);
      arquero.disparar();
      flechas.push(...arquero.flechas) // agregar las flechas al array global
    }
  });



  animar();

  function animar() {

    // Se borra el canvas completo
    ctx.clearRect(0, 0, anchoCanvas, altoCanvas);


    // Se dibujan los elemento
    dibujarFondo();
    
    arquero.renderizar();
    moverArquero(arquero);
    
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
      if (Math.random() < probalidadVendado) {
        venado.alternarPosicion();
      }
    });


    // Dibujar las flechas
    for (const flecha of flechas) {
      flecha.renderizar();
      flecha.actualizarPosicion();

      // Detectar colisiones con el borde del canvas
      if (flecha.posicionX > anchoCanvas) {
        const index = flechas.indexOf(flecha);
        flechas.splice(index, 1);
      }

    }


    // Repetir la animación
    requestAnimationFrame(animar);

  }

}
