import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LayoutComponent } from './layout/layout.component';
import { HeaderComponent } from './header/header.component';
import { PostComponent } from './post/post.component';



@NgModule({
  declarations: [LayoutComponent, HeaderComponent, PostComponent],
  imports: [
    CommonModule,
  ],
  exports: [
    LayoutComponent,
  ]
})
export class DotabuffModule { }
