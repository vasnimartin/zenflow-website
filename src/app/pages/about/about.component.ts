import { Component } from '@angular/core';

@Component({
  selector: 'app-about',
  standalone: true,
  template: `
    <div class="container page-content">
      <h1>About Zenflow.ai</h1>
      <p class="lead">We are building the central operating system for modern retail.</p>
      
      <div class="content-block">
        <p>
          Zenflow is designed to simplify the complex operations of multi-chain retail stores. 
          From billing to inventory and accounting, we provide a unified platform that just works.
        </p>
      </div>
    </div>
  `,
  styles: [`
    .page-content { padding: 4rem 1.5rem; max-width: 800px; margin: 0 auto; }
    h1 { margin-bottom: 1.5rem; }
    .lead { font-size: 1.25rem; color: var(--text-light); margin-bottom: 3rem; }
    .content-block { line-height: 1.8; }
  `]
})
export class AboutComponent { }
