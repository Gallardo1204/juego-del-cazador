import "./css/estilos.css";
import { FabricaElemento } from "./classes/FabricaElementos";
import { IElemento } from "./interfaces/IElemento";

window.addEventListener('load', () => {

  const arbol: IElemento = FabricaElemento.crearElemento('arbol', 250, 100, 8);
  arbol.renderizar();

  const venado: IElemento = FabricaElemento.crearElemento('venado', 130, 130, 3);
  venado.renderizar();

  const arquero: IElemento = FabricaElemento.crearElemento('cazador', 280, 130);
  arquero.renderizar();

});