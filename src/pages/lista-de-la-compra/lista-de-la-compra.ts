import {Component} from '@angular/core';
import {IonicPage} from 'ionic-angular';
import {NgForm} from "@angular/forms";
import {IngredienteServicio} from "../../servicios/Ingrediente";
import {Ingrediente} from "../../modelos/Ingrediente";

@IonicPage()
@Component({
  selector: 'page-lista-de-la-compra',
  templateUrl: 'lista-de-la-compra.html',
})
export class ListaDeLaCompraPage {


  listaDeIngredientes: Ingrediente[];

  constructor(private ingredienteServicio: IngredienteServicio) {
  }

  ionViewWillEnter(): void {
    this.listaDeIngredientes = this.ingredienteServicio.listarIngredientes();
  }

  onGuardarIngrediente(formularioIngrediente: NgForm) {
    let ingrediente = new Ingrediente(formularioIngrediente.value.nombre, formularioIngrediente.value.cantidad);
    this.ingredienteServicio.insertarIngrediente(ingrediente);
    this.listaDeIngredientes.push(ingrediente);
    formularioIngrediente.reset();

  }

  onEliminarIngrediente(indice: number) {
    this.ingredienteServicio.eliminarIngrediente(indice);
    this.listaDeIngredientes = this.ingredienteServicio.listarIngredientes();
  }

  onEditarIngrediente(ingrediente: Ingrediente, formulario: NgForm) {
    formulario.setValue(ingrediente);
  }
}
