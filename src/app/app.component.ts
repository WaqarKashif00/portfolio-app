import { Component, HostListener } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet, RouterLink, Router } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, RouterLink],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  scrolled = false;
  menuOpen = false;

  constructor(public router: Router) {}

  @HostListener('window:scroll', ['$event'])
  onScroll() {
    this.scrolled = window.scrollY > 50;
  }

  isActive(route: string): boolean {
    return this.router.url === route || this.router.url === '/' + route;
  }

  toggleMenu() {
    this.menuOpen = !this.menuOpen;
  }

  closeMenu() {
    this.menuOpen = false;
  }
}