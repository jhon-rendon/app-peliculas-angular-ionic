import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { PeliculaDetalle, RespuestaMovieDB, RespuestaCredits } from '../interfaces/interfaces';
import { environment } from '../../environments/environment';

const API_KEY = environment.api_key;
const URL     = environment.url;

@Injectable({
  providedIn: 'root'
})
export class MoviesService {

  pagePopulares = 0;
  constructor(private http:HttpClient) { }

  runQuery<T>( query: string ){

    let url = `${ URL }${query}`;
    url+=`&api_key=${ API_KEY }&language=es&include_image_language=es`;

    console.log('url',url);
    return this.http.get<T>( url );
  }

  getMovies(){
    
    const hoy       = new Date();
    const ultimoDia = 30;

    let mes;
    if( hoy.getMonth() < 10 ){
       mes ='0'+hoy.getMonth(); 
    }else{
       mes = hoy.getMonth();
    }

    let inicio = hoy.getFullYear() + '-'+ mes +'-01';
    let fin    = hoy.getFullYear() + '-'+ mes + '-'+ultimoDia;
    

    return this.runQuery<RespuestaMovieDB>(`/discover/movie?primary_release_date.gte=${ inicio }&primary_release_date.lte=${ fin }`);
    //return this.http.get<RespuestaMovieDB>(`${ URL }/discover/movie?primary_release_date.gte=2014-09-15&primary_release_date.lte=2014-10-22`);
  }

  getMoviesPopulares(){
    this.pagePopulares++;
    const query = `/discover/movie?wsort_by=popularity.desc&page=${this.pagePopulares}`;

    return this.runQuery<RespuestaMovieDB>( query );
  }

  getMovieDetalle( id:number){

    return this.runQuery<PeliculaDetalle>( `/movie/${id}?a=1`);
  }

  
  getMovieCreditos( id:number){

    return this.runQuery<RespuestaCredits>( `/movie/${id}/credits?a=1`);
  }
}
