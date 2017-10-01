import {Receta} from "../modelos/Receta";

export class RecetaServicio {

  private recetas: Receta[];

  constructor() {
    this.recetas = [{
      nombre: 'Patatas fritas',
      descripcion: '100Kcal/cm3',
      dificultad: 'Fácil',
      ingredientes: [{nombre: 'Patatas', cantidad: 1}]
    },
      {
        nombre: 'Ensalada',
        descripcion: 'Para que no te sientas mal',
        dificultad: 'Media',
        ingredientes: [
          {nombre: 'Rúcula', cantidad: 1},
          {nombre: 'Queso de cabra', cantidad: 1},
          {nombre: 'Tomate', cantidad: 1},
          {nombre: 'Aliño', cantidad: 1}
        ]
      },
      {
        nombre: 'Cous cous',
        descripcion: 'Instantáneo al microondas',
        dificultad: 'Fácil',
        ingredientes: [{nombre: 'Cous cous del mercadona', cantidad: 1}, {nombre: 'Agua', cantidad: 1}]
      }];
  }

  insertarReceta(receta: Receta) {
    this.recetas.push(receta);
    console.log(this.recetas);
  }

  eliminarReceta(indice: number) {
    this.recetas.splice(indice, 1);
  }

  listarRecetas(): Receta[] {
    return this.recetas.slice();
  }

  actualizarReceta(indice: number, receta: Receta) {
    this.recetas[indice] = receta;
  }

  buscarReceta(indice: number): Receta {
    return this.recetas[indice];
  }

}
