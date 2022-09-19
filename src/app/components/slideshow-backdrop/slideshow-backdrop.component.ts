import { Component, Input, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { Pelicula } from '../../interfaces/interfaces';
import { DetallemodalComponent } from '../detallemodal/detallemodal.component';

@Component({
  selector: 'app-slideshow-backdrop',
  templateUrl: './slideshow-backdrop.component.html',
  styleUrls: ['./slideshow-backdrop.component.scss'],
})
export class SlideshowBackdropComponent implements OnInit {

  @Input() peliculasRecientes:Pelicula[] = [];

  slideOpts = {
    slidesPerView  : 1.2,
    freeMode       : true,
    //speed          : 1000
  };

  constructor( private modalCtrl: ModalController) { }

  ngOnInit() {}

  async verDetallelMovie( id:number ) {
    console.log( 'ID',id );
    const modal = await this.modalCtrl.create({
      component: DetallemodalComponent,
      componentProps:{
        id
      }
    });
    modal.present();

  }

}
