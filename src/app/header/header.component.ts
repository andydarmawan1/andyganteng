import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  navbar = "Navbar";
  home = 'Home';
  masterdata = 'Master Data'
  constructor() { }

  ngOnInit() {
  }
}
