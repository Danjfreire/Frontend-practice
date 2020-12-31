import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LayoutComponent } from './layout/layout.component';
import { HeaderComponent } from './header/header.component';
import { PostComponent } from './post/post.component';
import { Activity1Component } from './activity1/activity1.component';



@NgModule({
  declarations: [LayoutComponent, HeaderComponent, PostComponent, Activity1Component],
  imports: [
    CommonModule,
  ],
  exports: [
    LayoutComponent,
  ]
})
export class DotabuffModule { }
