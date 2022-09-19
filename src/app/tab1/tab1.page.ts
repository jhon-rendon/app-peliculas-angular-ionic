import { Component, Input, OnInit } from '@angular/core';
import { MoviesService } from '../services/movies.service';
import { Pelicula } from '../interfaces/interfaces';


@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})


export class Tab1Page implements OnInit {

 
  peliculasRecientes: Pelicula[] = [];
  peliculasPopulares: Pelicula[] = [];

  slideOpts = {
    slidesPerView  : 1.2,
    freeMode       : true,
    //speed          : 1000
  };

  constructor( private serviceMovie: MoviesService) {}

  ngOnInit(): void {
  
      this.serviceMovie.getMovies()
        .subscribe( resp =>{
          this.peliculasRecientes = resp.results;
          //console.log(resp.results);
        });

      this.moviesPopulares();
      
  }

  cargarMas( ){
    //console.log('cargarMas Padre');
    this.moviesPopulares();
  }

  moviesPopulares(){

    this.serviceMovie.getMoviesPopulares()
    .subscribe( resp => {
       //console.log( 'poplares',resp );
       const arrTemp = [];
       arrTemp.push( ...this.peliculasPopulares,...resp.results);
       //console.log( 'poplares',arrTemp );
       this.peliculasPopulares = arrTemp;
    });
  }

}
