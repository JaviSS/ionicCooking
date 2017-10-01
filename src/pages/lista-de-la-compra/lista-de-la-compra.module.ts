import {NgModule} from '@angular/core';
import {IonicPageModule} from 'ionic-angular';
import {ListaDeLaCompraPage} from './lista-de-la-compra';

@NgModule({
  declarations: [
    ListaDeLaCompraPage,
  ],
  imports: [
    IonicPageModule.forChild(ListaDeLaCompraPage),
  ],
})
export class ListaDeLaCompraPageModule {
}
