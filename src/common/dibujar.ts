import { Contexto } from "../classes/context";
import fondo from '../img/fondo.jpg';

/* Se fibuja el fondo del canvas */
const ctx = Contexto.getInstancia();
const canvasAncho = ctx.canvas.width = 1200;
const canvasAlto = ctx.canvas.height = 600;

let fondoImagen = new Image();
fondoImagen.src = fondo;
ctx.drawImage(fondoImagen, 0, 0, canvasAncho, canvasAlto);

fondoImagen.onload = () => {
  ctx.drawImage(fondoImagen, 0, 0, canvasAncho, canvasAlto);
};

export function dibujar(
  imagen,
  posicionX: number,
  posicionY: number,
  ancho: number,
  alto: number
) {

  let img = new Image();
  img.src = imagen;

  img.onload = () => {
    ctx.drawImage(img, posicionX, posicionY, ancho, alto);
  };

}
