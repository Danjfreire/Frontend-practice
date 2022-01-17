import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SidebarComponent } from './sidebar.component';
import { MainMenuComponent } from './main-menu/main-menu.component';
import { LibraryMenuComponent } from './library-menu/library.component';
import { SubscriptionsMenuComponent } from './subscriptions-menu/subscriptions-menu.component';
import { ExtrasMenuComponent } from './extras-menu/extras-menu.component';
import { ConfigMenuComponent } from './config-menu/config-menu.component';



@NgModule({
  declarations: [SidebarComponent, MainMenuComponent, LibraryMenuComponent, SubscriptionsMenuComponent, ExtrasMenuComponent, ConfigMenuComponent],
  imports: [
    CommonModule
  ],
  exports: [
    SidebarComponent,
  ]
})
export class SidebarModule { }
