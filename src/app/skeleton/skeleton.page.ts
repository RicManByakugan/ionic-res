import { Component, OnInit } from '@angular/core';
import { addIcons } from 'ionicons';
import { musicalNotes } from 'ionicons/icons';

@Component({
  selector: 'app-skeleton',
  templateUrl: './skeleton.page.html',
  styleUrls: ['./skeleton.page.scss'],
})
export class SkeletonPage implements OnInit {
  public loaded = false;

  constructor() {
    addIcons({ musicalNotes });
  }

  ngOnInit() {
  }

}
