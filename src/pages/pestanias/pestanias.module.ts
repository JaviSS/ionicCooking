import {NgModule} from '@angular/core';
import {IonicPageModule} from 'ionic-angular';
import {PestaniasPage} from './pestanias';

@NgModule({
  declarations: [
    PestaniasPage,
  ],
  imports: [
    IonicPageModule.forChild(PestaniasPage),
  ],
})
export class PestaniasPageModule {
}
