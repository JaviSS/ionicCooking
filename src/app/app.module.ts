import {BrowserModule} from '@angular/platform-browser';
import {ErrorHandler, NgModule} from '@angular/core';
import {IonicApp, IonicErrorHandler, IonicModule} from 'ionic-angular';
import {SplashScreen} from '@ionic-native/splash-screen';
import {StatusBar} from '@ionic-native/status-bar';

import {MyApp} from './app.component';
import {EditarRecetaPage} from "../pages/editar-receta/editar-receta";
import {ListaDeLaCompraPage} from "../pages/lista-de-la-compra/lista-de-la-compra";
import {ListaDeRecetasPage} from "../pages/lista-de-recetas/lista-de-recetas";
import {PestaniasPage} from "../pages/pestanias/pestanias";
import {RecetaPage} from "../pages/receta/receta";
import {IngredienteServicio} from "../servicios/Ingrediente";
import {RecetaServicio} from "../servicios/Receta";

@NgModule({
  declarations: [
    MyApp,
    EditarRecetaPage,
    ListaDeLaCompraPage,
    ListaDeRecetasPage,
    PestaniasPage,
    RecetaPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    EditarRecetaPage,
    ListaDeLaCompraPage,
    ListaDeRecetasPage,
    PestaniasPage,
    RecetaPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    IngredienteServicio,
    RecetaServicio,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {
}
