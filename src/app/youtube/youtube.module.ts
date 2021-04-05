import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { YoutubeComponent } from './youtube.component';
import { YoutubeRoutingModule } from './youtube-routing.module';



@NgModule({
  declarations: [YoutubeComponent],
  imports: [
    CommonModule,
    YoutubeRoutingModule
  ]
})
export class YoutubeModule { }
