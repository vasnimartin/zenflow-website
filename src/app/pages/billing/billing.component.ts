import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-billing',
  standalone: true,
  imports: [CommonModule, RouterLink],
  template: `
    <div class="container page-content">
      <!-- SECTION 1: Centered Hero (Fleet Visual Refined) -->
      <section class="hero-section reveal-active">
        <div class="eyebrow">SMART BILLING</div>
        <h1 class="gradient-text">Smart Billing That Moves<br>as Fast as Your Counter.</h1>
        <p>Process sales, apply promotions, handle GST, and sync across stores — instantly. Achieving 40% faster checkouts and 7% increase in repeat visits.</p>

        <div class="hero-cta">
          <a routerLink="/contact" class="btn-primary">Book Demo</a>
        </div>

        <div class="hero-visual-fleet-v4">
          <div class="fleet-container">
            <!-- Back Terminal -->
            <div class="terminal-card-v4 terminal-back secondary-card glass-card">
              <div class="terminal-header">
                <span>TERMINAL: ZEN-03</span>
                <span class="status-idle">● IDLE</span>
              </div>
              <div class="terminal-rows">
                <div class="t-row mini"><span>Awaiting Customer...</span></div>
              </div>
            </div>

            <!-- Middle Terminal -->
            <div class="terminal-card-v4 terminal-middle secondary-card glass-card">
              <div class="terminal-header">
                <span>TERMINAL: ZEN-02</span>
                <span class="status-sync">● SYNCING</span>
              </div>
              <div class="terminal-rows">
                <div class="t-row mini"><span>Batch Update v2.4</span></div>
                <div class="t-progress-v4"><div class="t-fill"></div></div>
              </div>
            </div>

            <!-- Main Terminal -->
            <div class="terminal-card-v4 terminal-main glass-card">
              <div class="terminal-header">
                <span>TERMINAL: ZEN-01</span>
                <span class="status-live">● LIVE</span>
              </div>
              <div class="terminal-rows">
                <div class="t-row"><span>Elite Denim SKU-44</span><span>₹ 4,500</span></div>
                <div class="t-row"><span>Premium Cotton V2</span><span>₹ 2,800</span></div>
                <div class="t-total-row">
                  <span>TOTAL</span><span>₹ 7,300</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <!-- SECTION 2: Capabilities Bento (Matching Inventory Style) -->
      <section class="bento-section">
        <div class="bento-container">
          <div class="bento-header text-center">
            <span class="eyebrow">CAPABILITIES</span>
            <h2>Stock, Sales & Sync. All in One.</h2>
          </div>

          <div class="inner-bento-grid">
            <!-- Large Card: Multi-rate GST -->
            <div class="bento-card-inner bento-large-inner">
              <div class="bento-icon-inner">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                  <path d="M12 2v20M17 5H9.5a3.5 3.5 0 000 7h5a3.5 3.5 0 010 7H6" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>
              </div>
              <h3>Multi-Rate GST Support</h3>
              <p>Handle multiple tax brackets in a single invoice automatically. Zero manual calculation, 100% compliance.</p>
            </div>

            <!-- Card 2: Loyalty -->
            <div class="bento-card-inner">
              <div class="bento-icon-inner">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                  <path d="M20.84 4.61a5.5 5.5 0 00-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 00-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 000-7.78z" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>
              </div>
              <h3>Integrated Loyalty</h3>
              <p>Reward repeat customers instantly. Points sync across all physical and online stores.</p>
            </div>

            <!-- Card 3: Offline Mode -->
            <div class="bento-card-inner">
              <div class="bento-icon-inner">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                  <path d="M1 1l22 22M16.72 11.06A10.94 10.94 0 0119 12.55M5 12.55a10.94 10.94 0 015.17-2.39" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>
              </div>
              <h3>Offline First</h3>
              <p>Never stop selling. Billing works without internet and syncs automatically when you're back online.</p>
            </div>

            <!-- Card 4: Promotional Engine -->
            <div class="bento-card-inner">
              <div class="bento-icon-inner">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                  <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>
              </div>
              <h3>Centralized Promos</h3>
              <p>Deploy BOGO or festival offers from HQ to every terminal in seconds.</p>
            </div>

            <!-- Card 5: Real-time Sync -->
            <div class="bento-card-inner">
              <div class="bento-icon-inner">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                  <path d="M23 4v6h-6M1 20v-6h6M3.51 9a9 9 0 0114.85-3.36L23 10M1 14l4.64 4.36A9 9 0 0020.49 15" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>
              </div>
              <h3>Multi-Store Sync</h3>
              <p>Global inventory visibility from any billing counter. Sell from any warehouse.</p>
            </div>
          </div>
        </div>
      </section>

      <!-- SECTION 3: Operations Split (Refined Walkthrough) -->
      <section class="ops-walkthrough-v4">
        <div class="ops-header text-center">
          <span class="eyebrow">OPERATIONS</span>
          <h2 class="section-title">High Performance Commerce.</h2>
        </div>
        
        <div class="split-content-v4">
          <div class="ops-list-v4">
            <div class="ops-card-v4 active">
              <h3>AI-Powered Reconciliation</h3>
              <p>No more missing payments. AI matches UPI, Cards, and Cash entries in real-time.</p>
            </div>
            <div class="ops-card-v4">
              <h3>Zero Training Terminals</h3>
              <p>Intuitive UI designed for speed. New staff can start billing in under 5 minutes.</p>
            </div>
            <div class="ops-card-v4">
              <h3>Custom Invoice Design</h3>
              <p>Professional, branded invoices that look great and contain all statutory details.</p>
            </div>
          </div>

          <div class="ops-visual-v4">
            <div class="dashboard-preview glass-card">
              <div class="dash-top">
                <div class="dash-search-mock">✨ Ask AI for sales trends...</div>
              </div>
              <div class="dash-main-stat">
                <label>Daily Revenue</label>
                <div class="stat-row">
                  <span class="val">₹ 1,42,850</span>
                  <span class="trend up">↑ 12.4%</span>
                </div>
              </div>
              <div class="dash-mini-grid">
                <div class="mini-bar"></div>
                <div class="mini-bar"></div>
                <div class="mini-bar"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <!-- SECTION 4: Outcome Section (Matching Inventory) -->
      <section class="outcome-section">
        <div class="outcome-container">
          <h2>Stop Guessing Your Margins.</h2>
          <p class="outcome-statement">Zenflow ensures every rupee is accounted for, from checkout to bank.</p>
          <div class="outcome-points">
            <div class="outcome-item">
              <div class="outcome-check">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3">
                  <path d="M20 6L9 17L4 12" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>
              </div>
              <span>Reduce human error in reconciliation by 99%.</span>
            </div>
            <div class="outcome-item">
              <div class="outcome-check">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3">
                  <path d="M20 6L9 17L4 12" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>
              </div>
              <span>Accept 15+ payment modes with instant verification.</span>
            </div>
          </div>
        </div>
      </section>
    </div>

    <!-- SECTION 5: Dark CTA -->
    <section class="page-cta-dark">
      <span class="eyebrow">READY TO SCALE YOUR STORE?</span>
      <h3>Transform Your Billing Today.</h3>
      <a routerLink="/contact" class="btn-conversion">Book a Live Demo →</a>
    </section>
  `,
  styleUrl: './billing.component.scss'
})
export class BillingComponent { }
