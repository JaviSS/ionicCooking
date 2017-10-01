import {NgModule} from '@angular/core';
import {IonicPageModule} from 'ionic-angular';
import {EditarRecetaPage} from './editar-receta';

@NgModule({
  declarations: [
    EditarRecetaPage,
  ],
  imports: [
    IonicPageModule.forChild(EditarRecetaPage),
  ],
})
export class EditarRecetaPageModule {
}
