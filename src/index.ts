import "./css/estilos.css";
import { multiplicarElementos } from "./functions/miltiplicar_elemento";
import { Arquero } from "./classes/arquero";
import { Venado } from "./classes/venado";
import { Arbol } from "./classes/arbol";
import { cicloAnimar } from './functions/animar/cicloAnimar';

window.addEventListener('load', () => {

  let arboles:Arbol[] = multiplicarElementos('arbol', 100, 250, 3);
  let venados:Venado[] = multiplicarElementos('venado', 130, 130, 9);
  let arquero: Arquero = new Arquero(5,200,130,280);

  cicloAnimar(arboles,venados,arquero);
  
});