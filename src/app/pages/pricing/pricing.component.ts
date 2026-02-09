import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-pricing',
  standalone: true,
  imports: [RouterLink],
  template: `
    <div class="container page-content">
      <div class="header-section">
        <h1 class="text-center">Transparent Pricing</h1>
        <p class="lead text-center">Pay only for what you use. No hidden fees.</p>
      </div>

      <div class="price-card">
        <div class="price-header">
          <h2>Usage Based</h2>
          <div class="price">Flexible</div>
          <p>Perfect for growing retail chains</p>
        </div>
        <div class="features-list">
          <ul>
            <li>✅ All Core Features (Billing, Inventory, Accounting)</li>
            <li>✅ Unlimited Users</li>
            <li>✅ Multi-Store Support</li>
            <li>✅ Dedicated Account Manager</li>
            <li>✅ Free Onboarding</li>
          </ul>
        </div>
        <div class="action-area">
          <a routerLink="/contact" class="btn btn-primary btn-block">Contact Sales</a>
          <p class="crypto-note">Cancel anytime. No long-term contracts.</p>
        </div>
      </div>
    </div>
  `,
  styles: [`
    .page-content { padding: 4rem 1.5rem; }
    .header-section { margin-bottom: 4rem; }
    .lead { font-size: 1.25rem; color: var(--text-light); }
    
    .price-card {
      max-width: 500px;
      margin: 0 auto;
      border: 1px solid var(--border-color);
      border-radius: 16px;
      overflow: hidden;
      box-shadow: var(--card-shadow);
      background: var(--bg-white);
    }
    
    .price-header {
      padding: 2.5rem;
      background: var(--bg-subtle);
      text-align: center;
      border-bottom: 1px solid var(--border-color);
      
      h2 { color: var(--primary-color); font-size: 1.5rem; margin-bottom: 0.5rem; }
      .price { font-size: 2.5rem; font-weight: 700; color: var(--text-dark); margin-bottom: 0.5rem; }
      p { margin: 0; color: var(--text-light); }
    }
    
    .features-list {
      padding: 2.5rem;
      ul {
        list-style: none;
        padding: 0;
        margin: 0;
        li {
          margin-bottom: 1rem;
          font-size: 1.1rem;
          display: flex;
          align-items: center;
          gap: 0.5rem;
        }
      }
    }
    
    .action-area {
      padding: 0 2.5rem 2.5rem;
      text-align: center;
      .btn-block { display: block; width: 100%; text-align: center; }
      .crypto-note { margin-top: 1rem; font-size: 0.875rem; color: var(--text-light); }
    }
  `]
})
export class PricingComponent {}
