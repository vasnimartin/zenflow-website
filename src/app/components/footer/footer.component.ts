import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [RouterLink],
  template: `
    <footer class="footer">
      <div class="container glass">
        <div class="footer-top">
          <div class="footer-brand">
            <span class="logo">Zenflow<span class="highlight">.ai</span></span>
            <p>Empowering retail businesses with AI-driven intelligence.</p>
          </div>
          <div class="footer-links">
            <div class="link-group">
              <h4>Product</h4>
              <a routerLink="/services">Features</a>
              <a routerLink="/pricing">Pricing</a> <!-- Placeholder route -->
            </div>
            <div class="link-group">
              <h4>Company</h4>
              <a routerLink="/about">About Us</a>
              <a routerLink="/contact">Contact</a>
              <a href="mailto:manoj@zenflow.ai" style="color:var(--primary-color); font-weight:600; margin-top:0.5rem">manoj@zenflow.ai</a>
            </div>
          </div>
        </div>
        <div class="footer-bottom">
          <p>&copy; {{ currentYear }} Zenflow.ai. All rights reserved.</p>
        </div>
      </div>
    </footer>
  `,
  styles: [`
    .footer {
      background: linear-gradient(to top, rgba(99, 102, 241, 0.1) 0%, transparent 100%); /* Purple Fog */
      padding: 6rem 0 3rem;
      margin-top: 5rem;
      position: relative;
    }

    .footer::before {
      /* Glass Overlay backing for readability if needed, or we rely on the gradient */
      content: '';
      position: absolute;
      bottom: 0; left: 0; right: 0;
      height: 100%;
      z-index: -1;
      pointer-events: none;
    }
    
    .container {
      /* Usage of global .glass class in template provides the mixin styles */
      padding: 3rem;
      border-radius: 24px;
      background: rgba(255, 255, 255, 0.4) !important; /* Lighter glass for footer, override global glass */
    }

    .footer-top {
      display: flex;
      justify-content: space-between;
      flex-wrap: wrap;
      gap: 3rem;
      margin-bottom: 4rem;
    }

    .logo {
      font-size: 1.5rem;
      font-weight: 800;
      letter-spacing: -0.02em;
      color: var(--text-dark);
      .highlight { color: var(--primary-color); }
    }

    .footer-brand p {
      color: var(--text-medium);
      margin-top: 1rem;
      max-width: 320px;
      line-height: 1.6;
      font-size: 0.95rem;
    }

    .footer-links {
      display: flex;
      gap: 5rem;
    }

    .link-group h4 {
      font-size: 0.85rem;
      text-transform: uppercase;
      letter-spacing: 0.1em;
      margin-bottom: 1.5rem;
      color: var(--text-light);
      font-weight: 700;
    }

    .link-group a {
      display: block;
      color: var(--text-medium);
      margin-bottom: 0.85rem;
      font-size: 0.95rem;
      transition: color 0.2s;
      
      &:hover { 
        color: var(--primary-color); 
        transform: translateX(4px); 
        display: inline-block;
      }
    }

    .footer-bottom {
      border-top: 1px solid var(--border-color);
      padding-top: 2rem;
      text-align: center;
      color: var(--text-light);
      font-size: 0.875rem;
    }
  `]
})
export class FooterComponent {
  currentYear = new Date().getFullYear();
}
