export const Contexto = (function () {
  let instancia:CanvasRenderingContext2D;

  function crearInstancia(): CanvasRenderingContext2D | null {
    const ctx = document.querySelector("canvas")!.getContext("2d");
    return ctx;
  }

  return {
    getInstancia: function (): CanvasRenderingContext2D {
      if (!instancia) {
        instancia = crearInstancia();
      }
      return instancia;
    }
  };
})();
