import "./css/estilos.css";
import { multiplicarElementos } from "./common/miltiplicar_elemento";
import { Arquero } from "./models/arquero";
import { Contexto } from './classes/context';
import { Venado } from "./models/venado";
import { altoCanvas, anchoCanvas } from "./common/constantes";
import { Arbol } from "./models/arbol";
import { dibujarFondo } from "./common/dibujar_fondo";

window.addEventListener('load', () => {

  const ctx = Contexto.getInstancia();
  
  let arboles:Arbol[] = multiplicarElementos('arbol', 100, 250, 3);
  let venados:Venado[] = multiplicarElementos('venado', 130, 130, 9);
  let arquero: Arquero = new Arquero(5,200,280,130);

  
  animar();
  
  
  function animar(){
    
    // Borrar el canvas
    ctx.clearRect(0, 0, anchoCanvas, altoCanvas);
    dibujarFondo();
    arquero.renderizar();


    // Dibujar arboles
    arboles.forEach(arbol => {
      arbol.renderizar();
    });

    // Dibujar los animales que estén visibles
    venados.forEach(venado => {
      if (venado.visible) {
        venado.renderizar();        
      }
    });

    // Hacer que los animales desaparezcan y aparezcan aleatoriamente
    venados.forEach(venado => {
    if (Math.random() < 0.0013 ) {
      venado.alternarPosicion();
    }
    });

    // Repetir la animación
    requestAnimationFrame(animar);

  }

});