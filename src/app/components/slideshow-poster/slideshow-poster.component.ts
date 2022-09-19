import { Component, Input, OnInit } from '@angular/core';
import { Pelicula } from '../../interfaces/interfaces';
import { ModalController } from '@ionic/angular';
import { DetallemodalComponent } from '../detallemodal/detallemodal.component';

@Component({
  selector: 'app-slideshow-poster',
  templateUrl: './slideshow-poster.component.html',
  styleUrls: ['./slideshow-poster.component.scss'],
})
export class SlideshowPosterComponent implements OnInit {

  @Input() peliculasRecientes:Pelicula[] = [];

  slideOpts = {
    slidesPerView  : 3.3,
    freeMode       : true,
    //speed          : 1000
  };

  constructor(private modalCtrl: ModalController) { }

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
