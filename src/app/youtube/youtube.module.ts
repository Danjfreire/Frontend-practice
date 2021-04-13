import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { YoutubeComponent } from './youtube.component';
import { YoutubeRoutingModule } from './youtube-routing.module';
import { HeaderModule } from './header/header.module';
import { SidebarModule } from './sidebar/sidebar.module';
import { VideoFeedModule } from './video-feed/video-feed.module';



@NgModule({
  declarations: [YoutubeComponent],
  imports: [
    CommonModule,
    YoutubeRoutingModule,
    HeaderModule,
    SidebarModule,
    VideoFeedModule,
  ]
})
export class YoutubeModule { }
