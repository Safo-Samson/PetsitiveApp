import { Component } from '@angular/core';
import { CommonModule } from '@angular/common'; // Import CommonModule for *ngIf

@Component({
  selector: 'app-sitter-card',
  templateUrl: './sitter-card.component.html',
  styleUrls: ['./sitter-card.component.scss'],
  imports: [CommonModule],
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
  ];

  // Generate additional sitters for 15 total
  constructor() {
    for (let i = 4; i < 15; i++) {
      this.sitters.push({
        name: `Sitter ${i + 1}`,
        image: `https://placekitten.com/${80 + i}/${80 + i}`,
        description: 'Loving and experienced pet sitter',
        location: `London, SE${Math.floor(i % 10) + 1}`,
        price: 30 + Math.floor(Math.random() * 15),
        rating: (4.5 + Math.random() * 0.5).toFixed(1),
        reviews: Math.floor(Math.random() * 50 + 10),
        repeatOwners: Math.floor(Math.random() * 15),
        availability: Math.floor(Math.random() * 10),
        confirmation: i % 2 === 0,
        isStar: i % 3 === 0,
      });
    }
  }
}


