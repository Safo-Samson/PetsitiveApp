import { Component } from '@angular/core';
import { CommonModule } from '@angular/common'; // Import CommonModule for ngClass

@Component({
  selector: 'app-header',
  standalone: true, // Ensures this component is standalone
  imports: [CommonModule], // Import CommonModule to use ngClass
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {
  isMenuOpen = false;

  toggleMenu(): void {
    this.isMenuOpen = !this.isMenuOpen;
  }
}
