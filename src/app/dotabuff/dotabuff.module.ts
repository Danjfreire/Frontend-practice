import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LayoutComponent } from './layout/layout.component';
import { HeaderComponent } from './header/header.component';
import { PostComponent } from './post/post.component';
import { PlayerActivity } from './player-activity/player-activity.component';
import { ForumActivityComponent } from './forum-activity/forum-activity.component';
import { HeroActivityComponent } from './hero-activity/hero-activity.component';



@NgModule({
  declarations: [
    LayoutComponent,
    HeaderComponent,
    PostComponent,
    PlayerActivity,
    ForumActivityComponent,
    HeroActivityComponent],
  imports: [
    CommonModule,
  ],
  exports: [
    LayoutComponent,
    HeaderComponent,
    PostComponent,
    PlayerActivity,
    ForumActivityComponent,
    HeroActivityComponent
  ],
})
export class DotabuffModule { }
