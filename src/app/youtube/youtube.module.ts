import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { YoutubeComponent } from './youtube.component';
import { YoutubeRoutingModule } from './youtube-routing.module';
import { HeaderModule } from './header/header.module';



@NgModule({
  declarations: [YoutubeComponent],
  imports: [
    CommonModule,
    YoutubeRoutingModule,
    HeaderModule
  ]
})
export class YoutubeModule { }
