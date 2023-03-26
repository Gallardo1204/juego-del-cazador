import { Contexto } from "../../classes/context";
import fondo from '../../img/fondo.jpg';
import { altoCanvas, anchoCanvas } from "../constantes";

export function dibujarFondo() {
  
  const ctx = Contexto.getInstancia();
  ctx.clearRect(0, 0, anchoCanvas, altoCanvas);
  
  let fondoImagen = new Image();
  fondoImagen.src = fondo;
  
  ctx.drawImage(fondoImagen, 0, 0, anchoCanvas, altoCanvas);
  
}