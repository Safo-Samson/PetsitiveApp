import { Component } from '@angular/core';
import { FormBuilder, FormGroup, FormArray, Validators } from '@angular/forms';
import { CommonModule } from '@angular/common'; // Import CommonModule for *ngIf
import { ReactiveFormsModule } from '@angular/forms'; // Import ReactiveFormsModule for formGroup

@Component({
  selector: 'app-pet-sitter-signup',
  templateUrl: './pet-sitter-signup.component.html',
  styleUrls: ['./pet-sitter-signup.component.scss'],
  imports: [CommonModule, ReactiveFormsModule], 
})
export class PetSitterSignupComponent {
  signupForm: FormGroup;
  servicesWithDetails = [
    {
      name: 'Boarding',
      description: 'Overnight pet care in your home',
      price: '£24.00/night',
      icon: 'fas fa-bed',
    },
    {
      name: 'House Sitting',
      description: 'Overnight pet care in the owner’s home',
      price: '£24.00/night',
      icon: 'fas fa-home',
    },
    {
      name: 'Drop-In Visits',
      description: 'Toilet breaks and play dates',
      price: '£10.00/visit',
      icon: 'fas fa-handshake',
    },
    {
      name: 'Doggy Day Care',
      description: 'Daytime pet care in your home',
      price: '£19.00/day',
      icon: 'fas fa-sun',
    },
    {
      name: 'Dog Walking',
      description: 'Dog walks that fit your schedule',
      price: '£11.00/walk',
      icon: 'fas fa-dog' ,
    },
  ];

  constructor(private fb: FormBuilder) {
    this.signupForm = this.fb.group({
      services: [[], Validators.required],
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      address: ['', Validators.required],
      bio: [''],
      testimonials: this.fb.array([this.createTestimonialControl()]),
    });
  }

  selectedServices: string[] = [];

onServiceSelect(service: string) {
  const index = this.selectedServices.indexOf(service);
  if (index > -1) {
    this.selectedServices.splice(index, 1);
  } else {
    this.selectedServices.push(service);
  }
  this.signupForm.patchValue({ services: this.selectedServices });
}

  get testimonialControls() {
    return (this.signupForm.get('testimonials') as FormArray).controls;
  }

  createTestimonialControl() {
    return this.fb.control('', [Validators.email, Validators.required]);
  }

  addTestimonial() {
    const testimonials = this.signupForm.get('testimonials') as FormArray;
    testimonials.push(this.createTestimonialControl());
  }

  removeTestimonial(index: number) {
    const testimonials = this.signupForm.get('testimonials') as FormArray;
    testimonials.removeAt(index);
  }

  onSubmit() {
    if (this.signupForm.valid) {
      console.log(this.signupForm.value);
      alert('Registration successful!');
    }
  }
}
