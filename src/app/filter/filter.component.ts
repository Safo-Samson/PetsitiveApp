import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-filter',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.scss'],
})
export class FilterComponent {
  activeService: string = 'Boarding'; // Default active service
  selectedPet: string = 'Dog'; // Default selected pet
  isLoading: boolean = false; // For loading state
  filters = {
    weight: '',
    breed: '',
  };

  petFilters = {
    weightOptions: ['Under 10kg', '10-20kg', '20-30kg', '30kg+'],
    dogBreeds: ['Labrador', 'Golden Retriever', 'Beagle', 'Bulldog', 'Poodle'],
    catBreeds: ['Persian', 'Maine Coon', 'Siamese', 'Bengal', 'Ragdoll'],
  };

  constructor(private router: Router) {}

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
    // Reset filters when switching pets
    this.filters = { weight: '', breed: '' };
  }

  onFilter() {
    this.isLoading = true;
    setTimeout(() => {
      this.isLoading = false;
      this.router.navigate(['/sitters']);
    }, 2000); // Simulate loading for 2 seconds
  }
}
