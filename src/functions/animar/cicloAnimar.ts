import { Arbol } from "../../classes/arbol";
import { Venado } from '../../classes/venado';
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
  let iObjGolpArbol:number = 0;
  let iObjGolpVenado:number = 0;
  let puntaje: number = 0;

  document.addEventListener("keydown", (event: KeyboardEvent) => {
    if (event.code === "Space") {
      arquero.flechas = [];
      arqueros.push(arquero);
      arquero.disparar();
      flechas.push(...arquero.flechas) // agregar las flechas al array global
    }
  });


  animar();

  function animar() {

    // Se borra el canvas completo
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
      if (Math.random() < probalidadVendado) {
        venado.alternarPosicion();
      }
    });

    if(venados.length == 0 ){
      let div = document.querySelector(".ganador");
      div.classList.add("visible");
      
    } else {

      /* Detectar colisiones */
      for (const flecha of flechas) {
        const index = flechas.indexOf(flecha);
        flecha.renderizar();
        flecha.actualizarPosicion();
  
        iObjGolpArbol = detectarGolpe(flecha, arboles);
        iObjGolpVenado = detectarGolpe(flecha, venados);
  
        if (iObjGolpArbol >= 0) {
          flechas.splice(index, 1);
        }
  
        if (iObjGolpVenado >= 0) {
          flechas.splice(index, 1);
          venados.splice(iObjGolpVenado, 1);
          puntaje++;
          document.querySelector(".puntaje").innerHTML = "Puntaje: " + puntaje;
        }
  
        if (flecha.posicionX > anchoCanvas) {
          flechas.splice(index, 1);
        }
      }
    }

    requestAnimationFrame(animar);

  }

}
