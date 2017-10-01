import {Component} from '@angular/core';
import {IonicPage} from 'ionic-angular';
import {ListaDeLaCompraPage} from "../lista-de-la-compra/lista-de-la-compra";
import {Page} from "ionic-angular/navigation/nav-util";
import {ListaDeRecetasPage} from "../lista-de-recetas/lista-de-recetas";

@IonicPage()
@Component({
  selector: 'page-pestanias',
  templateUrl: 'pestanias.html',
})
export class PestaniasPage {
  listaDeLaCompraPage: Page = ListaDeLaCompraPage;
  listaDeRecetasPage: Page = ListaDeRecetasPage;

}
