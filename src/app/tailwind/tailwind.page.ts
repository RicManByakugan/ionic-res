import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tailwind',
  templateUrl: './tailwind.page.html',
  styleUrls: ['./tailwind.page.scss'],
})
export class TailwindPage implements OnInit {
  searchVisible: boolean = false; 
  flag = "assets/img/fr-flag.gif"
  dropdownOpen: boolean = false;

  stories = [
    {
      title: 'Room Offer',
      description: 'Check out our latest room offers!',
      alt: 'Chambre 1', image: 'assets/img/room.jpg'
    },
    {
      title: 'Delicious Food',
      description: 'Explore our new menu of gourmet dishes!',
      alt: 'Chambre 1', image: 'assets/img/food.jpg'
    },
    {
      title: 'Spa Treatments',
      description: 'Relax with our new spa services.',
      alt: 'Chambre 1', image: 'assets/img/spa.jpg'
    }
  ];

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

  constructor() { }

  ngOnInit() {
  }

  changeLanguage(event: any) {
    const selectedLanguage = event.detail.value;
    if (selectedLanguage === 'fr') {
      this.flag = 'assets/img/fr-flag.gif';
    } else if (selectedLanguage === 'en') {
      this.flag = 'assets/img/us-flag.gif';
    }
  }

  toggleDropdown() {
    this.dropdownOpen = !this.dropdownOpen;
  }

  toggleSearch() {
    this.searchVisible = !this.searchVisible; 
  }

}
