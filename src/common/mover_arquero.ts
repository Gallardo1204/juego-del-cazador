import { Arquero } from '../models/arquero';

export function moverArquero(arquero: Arquero) {

  document.addEventListener("keydown", function (event) {
    switch (event.code) {
      case "ArrowUp":
        arquero.moverArriba();
        break;
      case "ArrowDown":
        arquero.moverAbajo()
        break;
    }
  });
}