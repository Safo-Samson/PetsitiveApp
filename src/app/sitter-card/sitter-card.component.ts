import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-sitter-card',
  templateUrl: './sitter-card.component.html',
  styleUrls: ['./sitter-card.component.scss'],
  imports: [CommonModule, FormsModule],
  standalone: true,
})
export class SitterCardComponent {
  sitters = [
    {
      name: 'Moira M.',
      image: 'https://placekitten.com/80/80',
      description: 'Reliable dog sitting couple with baby dog',
      location: 'London, SE21',
      price: 40,
      rating: "5.0",
      reviews: 25,
      repeatOwners: 7,
      availability: 0,
      confirmation: true,
      isStar: true,
    },
    {
      name: 'Stella G.',
      image: 'https://placekitten.com/81/81',
      description: 'Huge pet lover and experienced carer, Brixton',
      location: 'London, SW2',
      price: 35,
      rating: "5.0",
      reviews: 30,
      repeatOwners: 11,
      availability: 6,
      confirmation: false,
      isStar: true,
    },
    {
      name: 'Simin L.',
      image: 'https://placekitten.com/82/82',
      description: 'Dog holiday',
      location: 'London, SE22',
      price: 35,
      rating: "5.0",
      reviews: 13,
      repeatOwners: 10,
      availability: 13,
      confirmation: false,
      isStar: false,
    },
    {
      name: 'Isabella L.',
      image: 'https://placekitten.com/83/83',
      description: 'Experienced Pet Sitter in Central London',
      location: 'London, SE1',
      price: 34,
      rating: "4.8",
      reviews: 18,
      repeatOwners: 5,
      availability: 2,
      confirmation: false,
      isStar: false,
    },
    {
      name: 'Henry B.',
      image: 'https://placekitten.com/84/84',
      description: 'Loves taking dogs for long walks in the park',
      location: 'London, NW3',
      price: 30,
      rating: "4.7",
      reviews: 15,
      repeatOwners: 3,
      availability: 8,
      confirmation: true,
      isStar: false,
    },
    {
      name: 'Sarah K.',
      image: 'https://placekitten.com/85/85',
      description: 'Passionate animal enthusiast, safe and caring',
      location: 'London, E8',
      price: 38,
      rating: "4.9",
      reviews: 22,
      repeatOwners: 8,
      availability: 10,
      confirmation: true,
      isStar: true,
    },
    {
      name: 'Tom D.',
      image: 'https://placekitten.com/86/86',
      description: 'Experienced dog trainer and pet sitter',
      location: 'London, N4',
      price: 45,
      rating: "5.0",
      reviews: 19,
      repeatOwners: 12,
      availability: 5,
      confirmation: true,
      isStar: true,
    },
    {
      name: 'Chloe A.',
      image: 'https://placekitten.com/87/87',
      description: 'Flexible and reliable pet sitter in your area',
      location: 'London, W9',
      price: 33,
      rating: "4.6",
      reviews: 12,
      repeatOwners: 4,
      availability: 9,
      confirmation: false,
      isStar: false,
    },
    {
      name: 'James P.',
      image: 'https://placekitten.com/88/88',
      description: 'Weekend pet care specialist',
      location: 'London, SW11',
      price: 25,
      rating: "4.5",
      reviews: 10,
      repeatOwners: 2,
      availability: 15,
      confirmation: false,
      isStar: false,
    },
    {
      name: 'Ella T.',
      image: 'https://placekitten.com/89/89',
      description: 'Compassionate pet lover with years of experience',
      location: 'London, SE16',
      price: 37,
      rating: "4.8",
      reviews: 14,
      repeatOwners: 6,
      availability: 3,
      confirmation: true,
      isStar: true,
    },
  ];

  sortOption = ''; // Default sorting option

  constructor(private router: Router) {}

  viewSitterDetails(sitter: any) {
    this.router.navigate(['/sitterdetail', sitter.name]);
  }

  sortSitters() {
    if (this.sortOption === 'priceAsc') {
      this.sitters.sort((a, b) => a.price - b.price);
    } else if (this.sortOption === 'priceDesc') {
      this.sitters.sort((a, b) => b.price - a.price);
    } else if (this.sortOption === 'reviewsAsc') {
      this.sitters.sort((a, b) => a.reviews - b.reviews);
    } else if (this.sortOption === 'reviewsDesc') {
      this.sitters.sort((a, b) => b.reviews - a.reviews);
    }
  }
  

}


