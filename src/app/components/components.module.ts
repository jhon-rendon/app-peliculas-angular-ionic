import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SlideshowBackdropComponent } from './slideshow-backdrop/slideshow-backdrop.component';
import { IonicModule } from '@ionic/angular';
import { PipesModule } from '../pipes/pipes.module';
import { SlideshowPosterComponent } from './slideshow-poster/slideshow-poster.component';
import { SlideshowPosterParesComponent } from './slideshow-poster-pares/slideshow-poster-pares.component';
import { DetallemodalComponent } from './detallemodal/detallemodal.component';



@NgModule({
  declarations: [
    SlideshowBackdropComponent,
    SlideshowPosterComponent,
    SlideshowPosterParesComponent,
    DetallemodalComponent
  ],
  imports: [
    CommonModule,
    IonicModule,
    PipesModule
  ],
  exports:[
    SlideshowBackdropComponent,
    SlideshowPosterComponent,
    SlideshowPosterParesComponent,
    DetallemodalComponent
  ]
})
export class ComponentsModule { }
