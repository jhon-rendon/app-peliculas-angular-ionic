import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ImagenPipe } from './imagen.pipe';
import { SlideShowParesPipe } from './slide-show-pares.pipe';



@NgModule({
  declarations: [
    ImagenPipe,
    SlideShowParesPipe
  ],
  imports: [
    CommonModule
  ],
  exports:[
    ImagenPipe,
    SlideShowParesPipe
  ]
})
export class PipesModule { }
