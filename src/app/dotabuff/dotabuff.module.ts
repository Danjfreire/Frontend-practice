import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LayoutComponent } from './layout/layout.component';
import { HeaderComponent } from './header/header.component';
import { PostComponent } from './post/post.component';
import { PlayerActivity } from './player-activity/player-activity.component';



@NgModule({
  declarations: [LayoutComponent, HeaderComponent, PostComponent, PlayerActivity],
  imports: [
    CommonModule,
  ],
  exports: [
    LayoutComponent,
  ]
})
export class DotabuffModule { }
