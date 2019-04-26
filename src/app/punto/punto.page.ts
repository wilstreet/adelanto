import { Component, OnInit } from '@angular/core';
import { ActionSheetController } from '@ionic/angular';


@Component({
  selector: 'app-punto',
  templateUrl: './punto.page.html',
  styleUrls: ['./punto.page.scss'],
})
export class PuntoPage implements OnInit {

  constructor(public actionSheetController: ActionSheetController) { }

  ngOnInit() {
  }

  async presentActionSheet() {
    const actionSheet = await this.actionSheetController.create({
      header: 'opciones',
      buttons: [{
        text: 'agregar tipo de mobiliario',
        role: 'destructive',
        icon: '',
        handler: () => {
          console.log('Delete clicked');
        }
      }, {
        text: 'estado',
        icon: '',
        handler: () => {
          console.log('Share clicked');
        }
      }, {
        text: 'descripcion',
        icon: '',
        handler: () => {
          console.log('Play clicked');
        },
      }]
    });
    await actionSheet.present();
  }

}
