import {Ingrediente} from "../modelos/Ingrediente";

export class IngredienteServicio {

  private listaDeLaCompra: Ingrediente[] = [];

  constructor() {
    this.listaDeLaCompra.push(new Ingrediente('suavizante', 1));
    this.listaDeLaCompra.push(new Ingrediente('comida de gato', 10));
    this.listaDeLaCompra.push(new Ingrediente('cerezas', 3));
    this.listaDeLaCompra.push(new Ingrediente('pizza', 999));
  }

  insertarIngrediente(ingrediente: Ingrediente) {
    this.listaDeLaCompra.push(ingrediente);
    console.log(ingrediente.nombre + " - " + ingrediente.cantidad);
  }


  insertarIngredientes(ingredientes: Ingrediente[]) {
    this.listaDeLaCompra.push(...ingredientes);
  }

  eliminarIngrediente(indice: number) {
    this.listaDeLaCompra.splice(indice, 1);
  }

  listarIngredientes(): Ingrediente[] {
    return this.listaDeLaCompra.slice();
  }

}
