import {Component, OnInit} from '@angular/core';
import {
  ActionSheetController,
  AlertController,
  IonicPage,
  NavController,
  NavParams,
  ToastController
} from 'ionic-angular';
import {FormArray, FormControl, FormGroup, Validators} from "@angular/forms";
import {RecetaServicio} from "../../servicios/Receta";
import {Receta} from "../../modelos/Receta";

@IonicPage()
@Component({
  selector: 'page-editar-receta',
  templateUrl: 'editar-receta.html',
})
export class EditarRecetaPage implements OnInit {

  modo: string = 'Nueva';
  dificultades: string[] = ['Fácil', 'Media', 'Difícil'];
  formularioReceta: FormGroup;
  indiceReceta: number;
  private receta: Receta;

  constructor(public navParams: NavParams, private actionSheetCtrl: ActionSheetController,
              private alertCtrl: AlertController, private toastCtrl: ToastController,
              private recetaServicio: RecetaServicio, private navCtrl: NavController) {
  }

  ngOnInit(): void {
    this.modo = this.navParams.get('modo');
    if (this.modo === 'Editar') {
      this.receta = this.navParams.get('receta');
      this.indiceReceta = this.navParams.get('indice');
      this.iniFormulario(this.receta);
    } else {
      this.iniFormulario();
    }
  }

  onGuardar() {
    this.recetaServicio.insertarReceta(new Receta(
      this.formularioReceta.value.nombre,
      this.formularioReceta.value.descripcion,
      this.formularioReceta.value.dificultad,
      this.formularioReceta.value.ingredientes.map((nombre) => {
        return {nombre: nombre, cantidad: 1};
      }),
    ));
    this.formularioReceta.reset();
    this.navCtrl.popToRoot();
  }

  onIngredientes() {
    const menuIngrediente = this.actionSheetCtrl.create({
      title: 'Que quieres hacer?',
      buttons: [
        {
          text: 'Añadir ingrediente',
          handler: () => {
            this.crearAlertaIngrediente().present();
          }
        },
        {
          text: 'Eliminar ingredientes',
          role: 'destructive',
          handler: () => {
            const formArray = <FormArray>this.formularioReceta.get('ingredientes');
            while (formArray.length > 0) {
              formArray.removeAt(0);
            }
            this.toastCtrl.create({
              message: 'Ingredientes eliminados!',
              duration: 2000,
              position: 'top'
            }).present();
          }
        },
        {
          text: 'Volver',
          role: 'cancel',
          handler: () => {
          }
        }
      ]
    });

    menuIngrediente.present();
  }

  private crearAlertaIngrediente() {
    return this.alertCtrl.create({
      title: 'Añadir ingrediente',
      inputs: [
        {
          name: 'nombre',
          placeholder: 'Nombre'
        }
      ],
      buttons: [
        {
          text: 'Volver',
          role: 'cancel'
        },
        {
          text: 'Añadir',
          handler: data => {
            if (data.nombre.trim() == '' || data.nombre == null) {
              this.toastCtrl.create({
                message: 'Debes introducir un valor!',
                duration: 2000,
                position: 'top'
              }).present();
              return;
            }
            (<FormArray>this.formularioReceta.get('ingredientes'))
              .push(new FormControl(data.nombre, Validators.required));
            this.toastCtrl.create({
              message: 'Ingrediente añadido!',
              duration: 2000,
              position: 'top'
            }).present();
          }
        }
      ]
    });
  }

  private iniFormulario(receta: Receta = null) {
    let ingredientes = [];
    if (receta != null) {
      for (let ingrediente of receta.ingredientes) {
        ingredientes.push(new FormControl(ingrediente.nombre, Validators.required));
      }
    }

    this.formularioReceta = new FormGroup({
      'nombre': new FormControl(this.receta == null ? null : this.receta.nombre, Validators.required),
      'descripcion': new FormControl(this.receta == null ? null : this.receta.descripcion, Validators.required),
      'dificultad': new FormControl(this.receta == null ? 'Media' : this.receta.dificultad, Validators.required),
      'ingredientes': new FormArray(ingredientes)
    });
  }

}
