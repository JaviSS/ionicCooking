import {Component} from '@angular/core';
import {AlertController, IonicPage, LoadingController, NavController, NavParams} from 'ionic-angular';
import {NgForm} from "@angular/forms";
import {AutenticacionServicio} from "../../servicios/Autenticacion";

/**
 * Generated class for the InicioSesionPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-inicio-sesion',
  templateUrl: 'inicio-sesion.html',
})
export class InicioSesionPage {

  constructor(public navCtrl: NavController, public navParams: NavParams,
              private autenticacionServicio: AutenticacionServicio, private loadingCtrl: LoadingController,
              private alertCtrl: AlertController) {
  }


  onIniciarSesion(formularioRegistro: NgForm) {

    const cargando = this.loadingCtrl.create({
      content: 'Iniciando sesión...',

    });

    cargando.present();
    this.autenticacionServicio.iniciarSesion(formularioRegistro.value.email, formularioRegistro.value.password)
      .then((respuesta) => {
        console.log(respuesta);
        cargando.dismiss();

      })
      .catch((error) => {
        cargando.dismiss();
        console.log(error);
        this.alertCtrl.create({
          title: 'Error ',
          message: error.message,
          buttons: ['Aceptar']
        }).present();
      });

  }
}
