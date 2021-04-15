import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { VideoFeedComponent } from './video-feed.component';
import { VideoComponent } from './video/video.component';



@NgModule({
  declarations: [VideoFeedComponent, VideoComponent],
  imports: [
    CommonModule
  ],
  exports: [
    VideoFeedComponent,
  ]
})
export class VideoFeedModule { }
