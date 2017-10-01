import {Ingrediente} from "./Ingrediente";

export class Receta {
  constructor(public nombre: string,
              public descripcion: string,
              public dificultad: string,
              public ingredientes: Ingrediente[],) {
  }
}
