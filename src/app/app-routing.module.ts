import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path: 'dotabuff', loadChildren: () => import('./dotabuff/dotabuff.module').then(m => m.DotabuffModule) },
  { path: '', redirectTo: 'dotabuff', pathMatch: 'full' },
  { path: '**', redirectTo: 'dotabuff' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
