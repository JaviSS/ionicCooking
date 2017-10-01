import {Component} from '@angular/core';
import {IonicPage, NavController} from 'ionic-angular';
import {EditarRecetaPage} from "../editar-receta/editar-receta";
import {Receta} from "../../modelos/Receta";
import {RecetaServicio} from "../../servicios/Receta";
import {RecetaPage} from "../receta/receta";

@IonicPage()
@Component({
  selector: 'page-lista-de-recetas',
  templateUrl: 'lista-de-recetas.html',
})
export class ListaDeRecetasPage {

  recetas: Receta[];

  constructor(public recetaServicio: RecetaServicio, public navCtrl: NavController) {
  }

  ionViewWillEnter() {
    this.recetas = this.recetaServicio.listarRecetas();
  }

  onNuevaReceta() {
    this.navCtrl.push(EditarRecetaPage, {modo: 'Nueva'});
  }

  onCargarReceta(indice: number) {
    this.navCtrl.push(RecetaPage, {modo: 'Editar', indice: indice, receta: this.recetas[indice]});
  }
}
