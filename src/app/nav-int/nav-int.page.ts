import { Component, OnInit } from '@angular/core';
import { HomePage } from '../home/home.page';

@Component({
  selector: 'app-nav-int',
  templateUrl: './nav-int.page.html',
  styleUrls: ['./nav-int.page.scss'],
})
export class NavIntPage implements OnInit {

  component = HomePage;

  constructor() { }

  ngOnInit() {
  }

}
