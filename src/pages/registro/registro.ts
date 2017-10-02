import {Component} from '@angular/core';
import {AlertController, IonicPage, LoadingController} from 'ionic-angular';
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

  constructor(private autenticacionServicio: AutenticacionServicio,
              private loadingController: LoadingController,
              private alertController: AlertController) {
  }

  onRegistrar(formularioRegistro: NgForm) {

    const cargando = this.loadingController.create({
      content: 'Creando cuenta...',

    });


    cargando.present();

    this.autenticacionServicio.registrar(formularioRegistro.value.email, formularioRegistro.value.password)
      .then(() => {
        cargando.dismiss();
      })
      .catch((error) => {
        cargando.dismiss();

        this.alertController.create({
          title: 'Error !',
          message: error.message,
          buttons: ['Aceptar']
        }).present();
      });

  }
}
