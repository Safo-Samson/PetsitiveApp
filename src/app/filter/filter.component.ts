import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-filter',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './filter.component.html',
  styleUrl: './filter.component.scss',
})
export class FilterComponent {
  activeService: string = 'Boarding'; // Default active service
  selectedPet: string = 'Dog'; // Default selected pet

  constructor (private router: Router){}
  services = [
    { name: 'Boarding', icon: 'fas fa-bed' },
    { name: 'House Sitting', icon: 'fas fa-home' },
    { name: 'Drop-In Visits', icon: 'fas fa-handshake' },
    { name: 'Doggy Day Care', icon: 'fas fa-sun' },
    { name: 'Dog Walking', icon: 'fas fa-dog' },
  ];

  pets = [
    { name: 'Dog', icon: 'fas fa-dog' },
    { name: 'Cat', icon: 'fas fa-cat' },
  ];

  setActiveService(service: string): void {
    this.activeService = service;
  }

  setSelectedPet(pet: string): void {
    this.selectedPet = pet;
  }
  onFilter() {
      this.router.navigate(['/sitters']);
  }
}
