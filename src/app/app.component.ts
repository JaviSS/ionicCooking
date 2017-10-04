import {Component, ViewChild} from '@angular/core';
import {MenuController, NavController, Platform} from 'ionic-angular';
import {StatusBar} from '@ionic-native/status-bar';
import {SplashScreen} from '@ionic-native/splash-screen';
import {PestaniasPage} from "../pages/pestanias/pestanias";
import {Page} from "ionic-angular/umd/navigation/nav-util";
import {ListaDeRecetasPage} from "../pages/lista-de-recetas/lista-de-recetas";
import {RegistroPage} from "../pages/registro/registro";
import {InicioSesionPage} from "../pages/inicio-sesion/inicio-sesion";
import firebase from 'firebase';
import {AutenticacionServicio} from "../servicios/Autenticacion";

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  rootPage: any = PestaniasPage;
  listaDeRecetasPage: Page = ListaDeRecetasPage;
  registroPage: Page = RegistroPage;
  iniciarSesionPage: Page = InicioSesionPage;
  usuarioAutenticado = false;
  @ViewChild('nav') nav: NavController;

  constructor(platform: Platform, statusBar: StatusBar, splashScreen: SplashScreen,
              private menuCtrl: MenuController, private autenticacionServicio: AutenticacionServicio) {
    firebase.initializeApp({
      apiKey: "AIzaSyDCy_vI3-Vz57lC44f8FCeLM3IN3jj3JzI",
      authDomain: "libro-recetas-auth.firebaseapp.com",
    });

    firebase.auth().onAuthStateChanged(user => {
      if (user) {
        this.usuarioAutenticado = true;
        this.rootPage = PestaniasPage;
      } else {
        this.usuarioAutenticado = false;
        this.rootPage = InicioSesionPage;
      }
    });

    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      statusBar.styleDefault();
      splashScreen.hide();
    });
  }

  onCargar(vista: Page) {
    this.nav.setRoot(vista);
    this.menuCtrl.close();
  }

  onCerrarSesion() {
    this.autenticacionServicio.cerrarSesion();
    this.usuarioAutenticado = false;
    this.nav.setRoot(this.iniciarSesionPage);
  }
}

