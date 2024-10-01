import { Component, OnInit } from '@angular/core';
import { addIcons } from 'ionicons';
import { library, playCircle, radio, search } from 'ionicons/icons';

@Component({
  selector: 'app-tabimpl',
  templateUrl: './tabimpl.page.html',
  styleUrls: ['./tabimpl.page.scss'],
})
export class TabimplPage implements OnInit {

  constructor() { 
    addIcons({ library, playCircle, radio, search });
  }

  ngOnInit() {
  }

}
