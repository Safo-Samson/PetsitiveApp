import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common'; // Import CommonModule for *ngIf
import { ReactiveFormsModule } from '@angular/forms'; // Import ReactiveFormsModule for formGroup

@Component({
  selector: 'app-sign-in',
  standalone: true, // Mark this as a standalone component
  templateUrl: './sign-in.component.html',
  styleUrl: './sign-in.component.scss',
  imports: [CommonModule, ReactiveFormsModule], // Import dependencies
})
export class SignInComponent {
  signUpForm: FormGroup;
  isLoading = false; // Add loading state

  constructor(private fb: FormBuilder, private router: Router) {
    // Initialize the form with validators
    this.signUpForm = this.fb.group({
      firstname: ['', Validators.required],
      lastname: ['', Validators.required],
      postcode: ['', [Validators.required, Validators.pattern(/^[A-Z]{1,2}\d[A-Z\d]? \d[A-Z]{2}$/i)]],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
    });
  }

  onRegister() {
    if (this.signUpForm.valid) {
      this.isLoading = true; // Show loading screen
      console.log('Form Submitted:', this.signUpForm.value);

      // Simulate an API call with a timeout
      setTimeout(() => {
        this.isLoading = false; // Hide loading screen
        this.router.navigate(['/filter']); // Redirect to filter page
      }, 2000); // Simulated delay
    } else {
      console.log('Form is invalid!');
      this.signUpForm.markAllAsTouched(); // Show validation errors
    }
  }
}
