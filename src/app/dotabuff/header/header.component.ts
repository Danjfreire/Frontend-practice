import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dotabuff-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  navExpand:boolean = false;

  constructor() { }

  ngOnInit(): void {
  }

  showNav() {
    this.navExpand = true;
  }

  hideNav() {
    this.navExpand = false;
  }

  
}
