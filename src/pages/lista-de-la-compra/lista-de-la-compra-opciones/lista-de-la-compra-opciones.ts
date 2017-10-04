import {Component} from "@angular/core";
import {ViewController} from "ionic-angular";

@Component({
  selector: 'lista-de-la-compra-opciones',
  template:
      `
    <ion-grid text-center>
      <ion-row>
        <ion-col>
          <h3>Sincronizar</h3>
        </ion-col>
      </ion-row>
      <ion-row>
        <button ion-button outline (click)="onAccion('cargar')">Cargar</button>
        <button ion-button outline (click)="onAccion('guardar')">Guardar</button>
      </ion-row>
    </ion-grid>
  `
})
export class ListaDeLaCompraOpcionesPage {

  constructor(private viewCtrl: ViewController) {
  }

  onAccion(accion: String) {
    this.viewCtrl.dismiss({accion: accion});
  }
}
