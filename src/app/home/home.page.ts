import { Component, OnInit } from '@angular/core';
import { InfiniteScrollCustomEvent } from '@ionic/angular';
import { ListPage } from '../list/list.page';
import { RoutingPage } from '../routing/routing.page';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {

  items: any[] = [];
  isModalOpen = false;
  dataModal = "";
  slides = [
    {
      title: 'Chambre Luxe Chambre Luxe Chambre Luxe',
      description: 'Une chambre spacieuse avec vue sur la mer.',
      price: 4000,
      image: 'assets/img/room-2.jpg',
      alt: 'Room'
    },
    {
      title: 'Chambre Luxe Chambre Luxe Chambre Luxe',
      description: 'Une chambre spacieuse avec vue sur la mer.',
      price: 4000,
      image: 'assets/img/room-1.jpg',
      alt: 'Food'
    },
    {
      title: 'Chambre Luxe',
      description: 'Une chambre spacieuse avec vue sur la mer.',
      price: 4000,
      image: 'assets/img/room-2.jpg',
      alt: 'Spa'
    },
    {
      title: 'Chambre Luxe',
      description: 'Une chambre spacieuse avec vue sur la mer.',
      price: 4000,
      image: 'assets/img/room-1.jpg',
      alt: 'Food'
    },
    {
      title: 'Chambre Luxe',
      description: 'Une chambre spacieuse avec vue sur la mer.',
      price: 4000,
      image: 'assets/img/room-2.jpg',
      alt: 'Spa'
    },
    {
      title: 'Chambre Luxe',
      description: 'Une chambre spacieuse avec vue sur la mer.',
      price: 4000,
      image: 'assets/img/room-1.jpg',
      alt: 'Food'
    },
    {
      title: 'Chambre Luxe',
      description: 'Une chambre spacieuse avec vue sur la mer.',
      price: 4000,
      image: 'assets/img/room-2.jpg',
      alt: 'Spa'
    },
    {
      title: 'Chambre Luxe',
      description: 'Une chambre spacieuse avec vue sur la mer.',
      price: 4000,
      image: 'assets/img/room-1.jpg',
      alt: 'Food'
    },
    {
      title: 'Chambre Luxe',
      description: 'Une chambre spacieuse avec vue sur la mer.',
      price: 4000,
      image: 'assets/img/room-2.jpg',
      alt: 'Spa'
    },
    {
      title: 'Chambre Luxe',
      description: 'Une chambre spacieuse avec vue sur la mer.',
      price: 4000,
      image: 'assets/img/room-1.jpg',
      alt: 'Food'
    },
    {
      title: 'Chambre Luxe',
      description: 'Une chambre spacieuse avec vue sur la mer.',
      price: 4000,
      image: 'assets/img/room-2.jpg',
      alt: 'Spa'
    },
  ];
  componentList = RoutingPage

  setOpen(isOpen: boolean, itemModal: any) {
    this.isModalOpen = isOpen;
    this.dataModal = itemModal
  }

  ngOnInit() {
    this.generateItems();
  }

  private generateItems() {
    const count = this.items.length + 1;
    for (let i = 0; i < 50; i++) {
      this.items.push(`Item ${i}`);
    }
  }

  onIonInfinite(ev: any) {
    this.generateItems();
    setTimeout(() => {
      (ev as InfiniteScrollCustomEvent).target.complete();
    }, 500);
  }

}
