import { Component, Input, OnInit, Output,EventEmitter } from '@angular/core';

import { Pelicula } from '../../interfaces/interfaces';
import { ModalController } from '@ionic/angular';
import { DetallemodalComponent } from '../detallemodal/detallemodal.component';

@Component({
  selector: 'app-slideshow-poster-pares',
  templateUrl: './slideshow-poster-pares.component.html',
  styleUrls: ['./slideshow-poster-pares.component.scss'],
})
export class SlideshowPosterParesComponent implements OnInit {

  @Input() peliculasRecientes:Pelicula[] = [];
  @Output() cargar = new EventEmitter<string>();

  slideOpts = {
    slidesPerView  : 3.3,
    freeMode       : true,
    //speed          : 1000
  };
  constructor( private modalCtrl: ModalController) { }

  ngOnInit() {
  }

  cargarMas(){
    this.cargar.emit('cargar');
    console.log('cargarMas Hijo');
  }

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
