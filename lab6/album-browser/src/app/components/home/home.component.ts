import { Component } from "@angular/core";
import { RouterLink } from "@angular/router";

@Component({
    selector: "app-home",
    standalone: true,
    imports: [RouterLink],
    template: `
        <div class="container">
            <h1>Welcome to Album Browser</h1>
            <p>Browse through a collection of albums and photos from JSONPlaceholder API.</p>
            <button class="btn" routerLink="/albums">Browse Albums</button>
        </div>
    `,
    styles: [`
    .container {
      max-width: 800px;
      margin: 2rem auto;
      padding: 2rem;
      text-align: center;
    }
    h1 { font-size: 2.5rem; margin-bottom: 1rem; }
    p { font-size: 1.2rem; margin-bottom: 2rem; color: #666; }
    .btn {
      background: #007bff;
      color: white;
      border: none;
      padding: 0.75rem 1.5rem;
      font-size: 1rem;
      border-radius: 4px;
      cursor: pointer;
    }
    .btn:hover { background: #0056b3; }
  `],
})
export class HomeComponent {}