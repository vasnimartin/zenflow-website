import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-pricing',
  standalone: true,
  imports: [CommonModule, RouterLink],
  template: `
    <div class="container page-content">
      <!-- SECTION 1: Centered Header (Same Hero Pattern) -->
      <section class="hero-section reveal-active">
        <div class="eyebrow">PRICING</div>
        <h1 class="gradient-text">Transparent Pricing Built<br>for Modern Retail Scale.</h1>
        <p>Simple, usage-based plans that grow with your business. No hidden fees, no complex contracts.</p>
        
        <div class="trust-badge-mini glass-card">
          <span>Trusted by 500+ Retailers Across India</span>
        </div>
      </section>

      <!-- SECTION 2: 3 Pricing Tiers -->
      <section class="pricing-tiers">
        <div class="tiers-grid">
          <!-- Tier 1: Starter -->
          <div class="tier-card bento-card-inner">
            <div class="tier-header">
              <h3>Starter</h3>
              <div class="price">₹ 4,999<span>/mo</span></div>
              <p>Perfect for solo stores starting their digitalization journey.</p>
            </div>
            <ul class="tier-features">
              <li>Up to 2 Users</li>
              <li>Core Billing & Inventory</li>
              <li>Basic GST Reporting</li>
              <li>Standard Support</li>
            </ul>
            <a routerLink="/contact" class="btn-tier">Get Started</a>
          </div>

          <!-- Tier 2: Growth (Highlighted) -->
          <div class="tier-card bento-card-inner featured">
            <div class="featured-badge">MOST POPULAR</div>
            <div class="tier-header">
              <h3>Growth</h3>
              <div class="price">₹ 14,999<span>/mo</span></div>
              <p>Built for expanding multi-chain retail organizations.</p>
            </div>
            <ul class="tier-features">
              <li>Unlimited Users</li>
              <li>Full Accounting Suite</li>
              <li>Multi-Store Sync</li>
              <li>Omnichannel Fulfillment</li>
              <li>Priority 24/7 Support</li>
              <li>Custom Promotion Engine</li>
            </ul>
            <a routerLink="/contact" class="btn-tier primary">Start Free Trial</a>
          </div>

          <!-- Tier 3: Enterprise -->
          <div class="tier-card bento-card-inner">
            <div class="tier-header">
              <h3>Enterprise</h3>
              <div class="price">Custom</div>
              <p>Tailored solutions for large-scale enterprise commerce.</p>
            </div>
            <ul class="tier-features">
              <li>Everything in Growth</li>
              <li>Dedicated Success Manager</li>
              <li>Custom API Access</li>
              <li>White-label Capabilities</li>
              <li>SLA-backed Uptime</li>
            </ul>
            <a routerLink="/contact" class="btn-tier">Contact Sales</a>
          </div>
        </div>
      </section>

      <!-- SECTION 3: FAQ -->
      <section class="faq-section">
        <div class="faq-container glass-card">
          <h2 class="text-center">Frequently Asked Questions</h2>
          <div class="faq-grid">
            <div class="faq-item">
              <h4>Is onboarding free?</h4>
              <p>Yes, we provide assisted onboarding for all Growth and Enterprise plans to ensure your team is ready from day one.</p>
            </div>
            <div class="faq-item">
              <h4>Can I change plans later?</h4>
              <p>Absolutely. You can upgrade or downgrade your plan at any time. Changes will be reflected in your next billing cycle.</p>
            </div>
            <div class="faq-item">
              <h4>What is usage-based pricing?</h4>
              <p>For certain modules, we offer pricing based on your transaction volume, ensuring you only pay for the value you receive.</p>
            </div>
            <div class="faq-item">
              <h4>Do you support hardware?</h4>
              <p>Zenflow is hardware-agnostic. We work with standard POS printers, scanners, and terminals you already own.</p>
            </div>
          </div>
        </div>
      </section>
    </div>

    <!-- Dark Conversion CTA -->
    <section class="page-cta-dark">
      <span class="eyebrow">STILL HAVE QUESTIONS?</span>
      <h3>Build Your Custom Retail OS Today.</h3>
      <a routerLink="/contact" class="btn-conversion">Talk to an Expert →</a>
    </section>
  `,
  styles: [`
    /* Pricing Page Specific Specifics */
    .pricing-tiers { padding: 4rem 0 8rem; position: relative; z-index: 1; }
    .tiers-grid { display: grid; grid-template-columns: repeat(3, 1fr); gap: 2rem; max-width: var(--max-width); margin: 0 auto; padding: 0 2rem; }

    .tier-card {
      display: flex; flex-direction: column;
      border: 1px solid rgba(255, 255, 255, 0.4) !important;
      
      &.featured {
        border-color: var(--primary-color) !important;
        transform: scale(1.05);
        z-index: 2;
        &::after { opacity: 0.15; }
        &:hover { transform: scale(1.05) translateY(-8px); }
      }
    }

    .featured-badge {
      position: absolute; top: 0; left: 50%; transform: translate(-50%, -50%);
      background: var(--primary-color); color: white; padding: 0.5rem 1.2rem;
      border-radius: 100px; font-size: 0.75rem; font-weight: 800; letter-spacing: 0.05em;
    }

    .tier-header {
      text-align: center; margin-bottom: 2.5rem;
      h3 { font-size: 1.5rem; font-weight: 850; color: var(--text-dark); margin-bottom: 1rem; }
      .price { font-size: 2.8rem; font-weight: 900; color: var(--text-dark); margin-bottom: 0.5rem; letter-spacing: -0.04em; }
      .price span { font-size: 1rem; color: var(--text-light); font-weight: 500; }
      p { font-size: 0.95rem; color: var(--text-medium); line-height: 1.5; }
    }

    .tier-features {
      list-style: none; padding: 0; margin: 0 0 3rem; flex: 1;
      li {
        padding: 0.8rem 0; font-size: 0.95rem; color: var(--text-medium); font-weight: 600;
        display: flex; align-items: center; gap: 0.75rem;
        &::before { content: '✓'; color: var(--primary-color); font-weight: 900; }
      }
    }

    .btn-tier {
      display: block; padding: 1.1rem; text-align: center; border: 1px solid #e2e8f0;
      border-radius: 12px; font-weight: 700; text-decoration: none; color: var(--text-dark);
      transition: all 0.3s ease;
      &:hover { border-color: var(--primary-color); color: var(--primary-color); }
      &.primary {
        background: var(--text-dark); color: white; border-color: var(--text-dark);
        &:hover { background: var(--primary-color); border-color: var(--primary-color); color: white; }
      }
    }

    .faq-section { padding: 10rem 0; background: transparent; position: relative; }
    .faq-container { max-width: 1000px; margin: 0 auto; padding: 4.5rem !important; }
    .faq-container h2 { font-size: 3rem; font-weight: 950; margin-bottom: 5rem; color: var(--text-dark); letter-spacing: -0.03em; }
    .faq-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 4rem; }
    .faq-item h4 { font-size: 1.2rem; font-weight: 850; color: var(--text-dark); margin-bottom: 1.25rem; letter-spacing: -0.01em; }
    .faq-item p { font-size: 1.05rem; color: var(--text-medium); line-height: 1.7; font-weight: 500; }

    .trust-badge-mini {
      display: inline-block; padding: 0.6rem 1.5rem !important; border-radius: 100px !important;
      font-size: 0.85rem; font-weight: 800; color: var(--primary-color);
    }

    @media (max-width: 1140px) {
      .tiers-grid { grid-template-columns: 1fr; max-width: 500px; }
      .tier-card.featured { transform: scale(1); &:hover { transform: translateY(-8px); } }
      .faq-grid { grid-template-columns: 1fr; }
    }
  `]
})
export class PricingComponent { }
