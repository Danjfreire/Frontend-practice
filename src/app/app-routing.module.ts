import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path: 'dotabuff', loadChildren: () => import('./dotabuff/dotabuff.module').then(m => m.DotabuffModule) },
  { path: 'youtube', loadChildren: () => import('./youtube/youtube.module').then(m => m.YoutubeModule) },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
