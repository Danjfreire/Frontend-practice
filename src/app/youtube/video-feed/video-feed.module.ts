import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { VideoFeedComponent } from './video-feed.component';



@NgModule({
  declarations: [VideoFeedComponent],
  imports: [
    CommonModule
  ],
  exports: [
    VideoFeedComponent,
  ]
})
export class VideoFeedModule { }
