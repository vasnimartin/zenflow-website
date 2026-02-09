import { Component } from '@angular/core';

@Component({
  selector: 'app-contact',
  standalone: true,
  template: `
    <div class="container page-content">
      <h1>Contact Us</h1>
      <p>Ready to transform your retail business?</p>
      
      <div class="contact-card">
        <h3>Get in Touch</h3>
        <p>Email: <strong>manoj@zenflow.ai</strong></p>
        <button class="btn btn-primary">Send Message</button>
      </div>
    </div>
  `,
  styles: [`
    .page-content { padding: 4rem 1.5rem; text-align: center; }
    h1 { margin-bottom: 1rem; }
    .contact-card {
      max-width: 500px;
      margin: 3rem auto;
      padding: 2rem;
      border: 1px solid var(--border-color);
      border-radius: 12px;
      background: var(--bg-light);
    }
  `]
})
export class ContactComponent {}
