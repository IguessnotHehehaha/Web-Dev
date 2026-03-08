import { Component, signal } from '@angular/core';
import { RouterOutlet, RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, RouterLink, RouterLinkActive],
  template: `
    <nav class="navbar">
      <a routerLink="/home" routerLinkActive="active">Home</a>
      <a routerLink="/about" routerLinkActive="active">About</a>
      <a routerLink="/albums" routerLinkActive="active">Albums</a>
    </nav>
    <router-outlet></router-outlet>
  `,
  styles: [`
    .navbar {
      background: #333;
      padding: 1rem;
      display: flex;
      gap: 1rem;
    }
    .navbar a {
      color: white;
      text-decoration: none;
      padding: 0.5rem 1rem;
      border-radius: 4px;
    }
    .navbar a:hover {
      background: #555;
    }
    .navbar a.active {
      background: #007bff;
    }
  `],

})
export class App {
  // protected readonly title = signal('album-browser');
}
