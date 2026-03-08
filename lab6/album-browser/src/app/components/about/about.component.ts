import { Component } from "@angular/core";

@Component({
    selector: 'app-about',
    template: `
    <div class="container">
      <h1>About This App</h1>
      <p>This is an Album Browser application built with Angular.</p>
      <p><strong>Course:</strong> Web Development</p>
      <p><strong>Student:</strong> Your Name Here</p>
      <p>This app demonstrates routing, HTTP requests, and CRUD operations using the JSONPlaceholder API.</p>
    </div>
  `,
    styles: [`
        .container {
            max-width:800px;
            margein: 2rem auto;
            padding: 2rem;
        }
        h1{margin-bottom: 1rem;}
        p{
        font-size: 1.1rem;
        line-height:1.6;
        margin-bottom: 0.5rem;
        }
    `],
})
export class AboutComponent {}