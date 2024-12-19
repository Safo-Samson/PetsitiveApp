import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.scss'],
})
export class LandingComponent {
  constructor(private router: Router) {}

  navigateTo(userType: string): void {
    if (userType === 'customer') {
      this.router.navigate(['/customer-login']); // Update this route as necessary
    } else if (userType === 'petsitter') {
      this.router.navigate(['/petsitter-login']); // Update this route as necessary
    }
  }
}
