import { CommonModule } from '@angular/common';
import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {
  isMenuOpen = false;

  toggleMenu() {
    this.isMenuOpen = !this.isMenuOpen;
  }

  closeMenu() {
    this.isMenuOpen = false;
  }
// HostListener this function will close the menu when the click is detected outside the menu
  @HostListener('document:click', ['$event'])
  onDocumentClick(event: Event) {
    const target = event.target as HTMLElement;
    const isClickInsideMenu = document.getElementById('nav-links')?.contains(target);
   
    if (!isClickInsideMenu) {
      this.isMenuOpen = false;
    }
  }

  @HostListener('click', ['$event'])
  onToggleMenuClick(event: Event) {
    event.stopPropagation(); 
  }
}