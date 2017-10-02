import {Component, OnInit} from '@angular/core';
import {IonicPage, NavController, NavParams, ToastController} from 'ionic-angular';
import {Receta} from "../../modelos/Receta";
import {RecetaServicio} from "../../servicios/Receta";
import {EditarRecetaPage} from "../editar-receta/editar-receta";
import {IngredienteServicio} from "../../servicios/Ingrediente";

/**
 * Generated class for the RecetaPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-receta',
  templateUrl: 'receta.html',
})
export class RecetaPage implements OnInit {
  receta: Receta;
  indiceReceta: number;

  constructor(public navCtrl: NavController, public navParams: NavParams,
              private recetaServicio: RecetaServicio, private ingredientesServicio: IngredienteServicio,
              private toastCtrl:ToastController) {
  }

  ngOnInit() {
    this.receta = this.navParams.get('receta');
    this.indiceReceta = this.navParams.get('indice');
  }

  onInsertarEnLaListaDeLaCompra() {

    this.ingredientesServicio.insertarIngredientes(this.receta.ingredientes);

  }

  onEditarReceta() {
    this.navCtrl.push(EditarRecetaPage, {modo: 'Editar', indice: this.indiceReceta, receta: this.receta})
  }

  onEliminarReceta() {
    this.recetaServicio.eliminarReceta(this.indiceReceta);
    this.toastCtrl.create({
      message: 'Receta eliminada!',
      duration: 2000,
      position: 'top'
    }).present();

    this.navCtrl.pop();
  }
}
