import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { FinalCtaComponent } from '../../components/final-cta/final-cta.component';

@Component({
  selector: 'app-pricing',
  standalone: true,
  imports: [CommonModule, RouterLink, FinalCtaComponent],
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
          <!-- Tier 1: Free Trial -->
          <div class="tier-card bento-card-inner">
            <div class="tier-header">
              <h3>Free Trial</h3>
              <div class="price">₹ 0<span>/14 days</span></div>
              <p>Explore all core features with no commitment.</p>
            </div>
            <ul class="tier-features">
              <li>Up to 2 Users</li>
              <li>Core Billing & Inventory</li>
              <li>Basic GST Reporting</li>
              <li>Standard Support</li>
            </ul>
            <a routerLink="/contact" [queryParams]="{ plan: 'free-trial' }" class="btn-tier">Start Free Trial</a>
          </div>

          <!-- Tier 2: Transaction-Based Pricing (Highlighted) -->
          <div class="tier-card bento-card-inner featured">
            <div class="featured-badge">MOST POPULAR</div>
            <div class="tier-header">
              <h3>Pro</h3>
              <div class="price">₹ 1.5<span>/trans</span></div>
              <p>Transparent transaction-based pricing. Pay as you scale.</p>
            </div>
            <ul class="tier-features">
              <li>Everything in Free Trial</li>
              <li>Unlimited Users</li>
              <li>Full Accounting Suite</li>
              <li>Multi-Store Sync</li>
              <li>Omnichannel Fulfillment</li>
              <li>Priority 24/7 Support</li>
            </ul>
            <a routerLink="/contact" [queryParams]="{ plan: 'pro' }" class="btn-tier primary">Get Started</a>
          </div>

          <!-- Tier 3: Enterprise -->
          <div class="tier-card bento-card-inner">
            <div class="tier-header">
              <h3>Enterprise</h3>
              <div class="price">Custom</div>
              <p>Bespoke solutions with volume discounts for large networks.</p>
            </div>
            <ul class="tier-features">
              <li>Everything in Pro</li>
              <li>Dedicated Success Manager</li>
              <li>Custom API Access</li>
              <li>White-label Capabilities</li>
              <li>SLA-backed Uptime</li>
              <li>Volume Discounts</li>
            </ul>
            <a routerLink="/contact" [queryParams]="{ plan: 'enterprise' }" class="btn-tier">Contact Sales</a>
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

    <!-- Conversion CTA -->
    <app-final-cta 
      eyebrow="STILL HAVE QUESTIONS?"
      headline="Build Your Custom <br>Retail OS Today."
      subtext="See how Zenflow transforms billing, inventory, and accounting into one seamless retail system."
      buttonText="Talk to an Expert →">
    </app-final-cta>
  `,
  styles: [`
    /* Pricing Page Specific Specifics */
    .page-content { padding: 12rem 1.5rem 4rem; position: relative; z-index: 10; }
    .pricing-tiers { padding: 2rem 0 8rem; position: relative; z-index: 1; background: transparent; }
    .tiers-grid { display: grid; grid-template-columns: repeat(3, 1fr); gap: 2rem; max-width: var(--max-width); margin: 0 auto; padding: 0 2rem; }

    .tier-card {
      display: flex; flex-direction: column;
      background: rgba(255, 255, 255, 0.4);
      backdrop-filter: blur(20px);
      -webkit-backdrop-filter: blur(20px);
      border: 1px solid rgba(255, 255, 255, 0.6) !important;
      border-radius: 24px;
      padding: 3rem 2rem;
      transition: all 0.4s cubic-bezier(0.16, 1, 0.3, 1);
      
      &.featured {
        background: rgba(255, 255, 255, 0.6);
        border-color: var(--primary-color) !important;
        transform: scale(1.05);
        z-index: 2;
        box-shadow: 0 30px 60px -10px rgba(15, 23, 42, 0.1);
        
        &:hover { transform: scale(1.05) translateY(-8px); }
      }

      &:hover {
        background: rgba(255, 255, 255, 0.8);
        transform: translateY(-8px);
        box-shadow: 0 30px 60px -10px rgba(15, 23, 42, 0.1);
        border-color: var(--primary-color) !important;
      }
    }

    .featured-badge {
      position: absolute; top: 0; left: 50%; transform: translate(-50%, -50%);
      background: var(--primary-color); color: white; padding: 0.5rem 1.2rem;
      border-radius: 100px; font-size: 0.75rem; font-weight: 800; letter-spacing: 0.05em;
    }

    .tier-header {
      text-align: center; margin-bottom: 2.5rem;
      h3 { font-size: 1.5rem; font-weight: 850; color: #0f172a; margin-bottom: 1rem; }
      .price { font-size: 2.8rem; font-weight: 900; color: #0f172a; margin-bottom: 0.5rem; letter-spacing: -0.04em; }
      .price span { font-size: 1rem; color: #64748b; font-weight: 500; }
      p { font-size: 0.95rem; color: #475569; line-height: 1.5; font-weight: 500; }
    }

    .tier-features {
      list-style: none; padding: 0; margin: 0 0 3rem; flex: 1;
      li {
        padding: 0.8rem 0; font-size: 0.95rem; color: #475569; font-weight: 600;
        display: flex; align-items: center; gap: 0.75rem;
        &::before { content: '✓'; color: var(--primary-color); font-weight: 900; }
      }
    }

    .btn-tier {
      display: block; padding: 1.1rem; text-align: center; border: 1px solid rgba(0,0,0,0.1);
      border-radius: 12px; font-weight: 700; text-decoration: none; color: #0f172a;
      transition: all 0.3s ease;
      &:hover { border-color: var(--primary-color); color: var(--primary-color); background: rgba(99, 102, 241, 0.05); }
      &.primary {
        background: #0f172a; color: white; border-color: #0f172a;
        &:hover { background: var(--primary-color); border-color: var(--primary-color); color: white; }
      }
    }

    .faq-section { padding: 10rem 0; background: transparent; position: relative; }
    .faq-container { 
      max-width: 1000px; margin: 0 auto; 
      padding: 5rem !important;
      background: rgba(255, 255, 255, 0.4);
      backdrop-filter: blur(25px);
      -webkit-backdrop-filter: blur(25px);
      border: 1px solid rgba(255, 255, 255, 0.6);
      border-radius: 32px;
    }
    .faq-container h2 { font-size: 3rem; font-weight: 950; margin-bottom: 5rem; color: #0f172a; letter-spacing: -0.04em; }
    .faq-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 4rem; }
    .faq-item h4 { font-size: 1.25rem; font-weight: 900; color: #0f172a; margin-bottom: 1.25rem; letter-spacing: -0.01em; }
    .faq-item p { font-size: 1.05rem; color: #475569; line-height: 1.7; font-weight: 500; }

    .trust-badge-mini {
      display: inline-block; padding: 0.6rem 1.5rem !important; border-radius: 100px !important;
      font-size: 0.85rem; font-weight: 800; color: var(--primary-color);
      background: rgba(99, 102, 241, 0.1) !important;
    }

    .hero-section .gradient-text {
      background: linear-gradient(135deg, #7C3AED 0%, #DB2777 100%);
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
      background-clip: text;
    }

    @media (max-width: 1140px) {
      .page-content { padding-top: 100px; }
      .hero-section h1 { font-size: 3rem; }
      .tiers-grid { grid-template-columns: 1fr; max-width: 500px; padding: 0 1.5rem; }
      .tier-card.featured { transform: scale(1); &:hover { transform: translateY(-8px); } }
      .faq-container { padding: 3rem 1.5rem !important; border-radius: 24px; }
      .faq-grid { grid-template-columns: 1fr; gap: 2.5rem; }
    }

    @media (max-width: 640px) {
      .hero-section h1 { font-size: 2.25rem; }
      .hero-section p { font-size: 1.1rem; }
      .pricing-tiers { padding-bottom: 4rem; }
      .faq-section { padding: 6rem 0; }
      .faq-container h2 { font-size: 2rem; margin-bottom: 3rem; }
      .faq-item h4 { font-size: 1.15rem; }
    }
  `]
})
export class PricingComponent { }
