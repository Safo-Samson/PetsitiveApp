import { Component } from '@angular/core';
import { CommonModule } from '@angular/common'; // Import CommonModule for structural directives

@Component({
  selector: 'app-filter',
  standalone: true, // Mark as standalone
  templateUrl: './filter.component.html',
  styleUrl: './filter.component.scss',
  imports: [CommonModule], // Import CommonModule
})
export class FilterComponent {}
