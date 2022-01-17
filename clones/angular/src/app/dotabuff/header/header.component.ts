import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dotabuff-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  navExpand:boolean = false;
  isMenuToggled:boolean = false;

  constructor() { }

  ngOnInit(): void {
  }

  showNav() {
    this.navExpand = true;
  }

  hideNav() {
    this.navExpand = false;
  }

  toggleMenu(event:Event) {
    event.preventDefault();
    this.isMenuToggled = !this.isMenuToggled;
  }

  
}
