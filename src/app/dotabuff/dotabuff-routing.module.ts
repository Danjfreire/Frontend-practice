import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DotabuffComponent } from './dotabuff.component';

const routes: Routes = [
    { path: '', component: DotabuffComponent }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class DotabuffRoutingModule { }
