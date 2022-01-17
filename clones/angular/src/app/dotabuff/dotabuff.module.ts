import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { PostComponent } from './post/post.component';
import { PlayerActivity } from './player-activity/player-activity.component';
import { ForumActivityComponent } from './forum-activity/forum-activity.component';
import { HeroActivityComponent } from './hero-activity/hero-activity.component';
import { DotabuffComponent } from './dotabuff.component'
import { DotabuffRoutingModule } from './dotabuff-routing.module';

@NgModule({
  declarations: [
    DotabuffComponent,
    HeaderComponent,
    PostComponent,
    PlayerActivity,
    ForumActivityComponent,
    HeroActivityComponent],
  imports: [
    CommonModule,
    DotabuffRoutingModule,
  ],
  exports: [
    DotabuffComponent,
    HeaderComponent,
    PostComponent,
    PlayerActivity,
    ForumActivityComponent,
    HeroActivityComponent
  ],
})
export class DotabuffModule { }
