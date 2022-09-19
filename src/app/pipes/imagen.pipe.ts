import { Pipe, PipeTransform } from '@angular/core';
import { environment } from '../../environments/environment';

const URL = environment.path_img;

@Pipe({
  name: 'imagen'
})

export class ImagenPipe implements PipeTransform {

  transform(img:string,size:string = 'w500'): string {

    if( img.length === 0 ){
      console.log('sin imagen');
      return '../assets/142 no-image-banner.jpg';
    }
    const urlImg = `${ URL }/${ size }${ img }`;
   
    return urlImg;
  }

}
