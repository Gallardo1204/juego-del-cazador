import { Contexto } from "../classes/context";

export function dibujar(
  imagen: string,
  posicionX: number,
  posicionY: number,
  ancho: number,
  alto: number
) {


  let img = new Image();
  img.src = imagen;

  const ctx = Contexto.getInstancia();
  ctx.drawImage(img, posicionX, posicionY, ancho, alto);

}
