import {Component} from '@angular/core';
import {IonicPage, LoadingController} from 'ionic-angular';
import {NgForm} from "@angular/forms";
import {AutenticacionServicio} from "../../servicios/Autenticacion";

/**
 * Generated class for the RegistroPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-registro',
  templateUrl: 'registro.html',
})
export class RegistroPage {

  constructor(private autenticacionServicio: AutenticacionServicio, private loadingController:LoadingController) {
  }

  onRegistrar(formularioRegistro: NgForm) {
    this.autenticacionServicio.registrar(formularioRegistro.value.email, formularioRegistro.value.password)
      .then((respuesta) => {
        console.log(respuesta)
      })
      .catch((error) => {
        console.error(error);
      });
    this.loadingController.create({
      content:'Creando cuenta...',

    });
  }
}
