import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-loading',
  standalone: true,  // Ensure this is a standalone component
  imports: [CommonModule],
  template: `
    <div class="loader-overlay" *ngIf="isLoading">
      <div class="loader">
        <div class="spinner"></div>
        <p class="loader-message">{{ message }}</p>
      </div>
    </div>
  `,
  styleUrls: ['./loading.component.scss']
})
export class LoadingComponent {
  @Input() isLoading: boolean = false; // Controls visibility
  @Input() message: string = 'Loading...'; // Message displayed
}
