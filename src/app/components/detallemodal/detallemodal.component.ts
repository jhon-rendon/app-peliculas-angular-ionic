import { Component, Input, OnInit } from '@angular/core';
import { MoviesService } from '../../services/movies.service';
import { PeliculaDetalle, Crew, Cast } from '../../interfaces/interfaces';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-detallemodal',
  templateUrl: './detallemodal.component.html',
  styleUrls: ['./detallemodal.component.scss'],
})
export class DetallemodalComponent implements OnInit {

  @Input() id:number;

  pelicula:PeliculaDetalle = {};
  creditos:Cast[];
  oculto:number = 150;

  slideOpts = {
    slidesPerView : 3.3,
    freeMode:true,
    spacebetween:-5
  };

  constructor( private serviceMovie: MoviesService,
               private modal:ModalController) { }

  ngOnInit() {

    this.serviceMovie.getMovieDetalle( this.id )
        .subscribe( resp => {
           this.pelicula = resp;
        });
    
   this.serviceMovie.getMovieCreditos( this.id )
        .subscribe( resp => {
          this.creditos = resp.cast;
        });
  }
  regresar(){
    this.modal.dismiss();
  } 

  favorito(){

  }


}
