import {NgModule} from '@angular/core';
import {IonicPageModule} from 'ionic-angular';
import {ListaDeRecetasPage} from './lista-de-recetas';

@NgModule({
  declarations: [
    ListaDeRecetasPage,
  ],
  imports: [
    IonicPageModule.forChild(ListaDeRecetasPage),
  ],
})
export class ListaDeRecetasPageModule {
}
