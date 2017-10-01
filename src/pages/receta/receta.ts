import {Component, OnInit} from '@angular/core';
import {IonicPage, NavController, NavParams} from 'ionic-angular';
import {Receta} from "../../modelos/Receta";
import {RecetaServicio} from "../../servicios/Receta";
import {EditarRecetaPage} from "../editar-receta/editar-receta";

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
              private recetaServicio: RecetaServicio) {
  }

  ngOnInit() {
    this.receta = this.navParams.get('receta');
    this.indiceReceta = this.navParams.get('indice');
  }

  onInsertarEnLaListaDeLaCompra() {

  }

  onEditarReceta() {
    this.navCtrl.push(EditarRecetaPage, {modo: 'Editar', indice: this.indiceReceta, receta: this.receta})
  }

  onEliminarReceta() {

  }
}
