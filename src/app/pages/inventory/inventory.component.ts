import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { FinalCtaComponent } from '../../components/final-cta/final-cta.component';

@Component({
  selector: 'app-inventory',
  standalone: true,
  imports: [CommonModule, RouterLink, FinalCtaComponent],
  template: `
    <div class="container page-content">
      <!-- SECTION 1: Centered Hero (Sync Parity + Capital Hub Visual) -->
      <section class="hero-section reveal-active">
        <div class="eyebrow">INVENTORY ORCHESTRATION</div>
        <h1 class="gradient-text"><span class="text-highlight-pink">Inventory Orchestration.</span><br>Unlock Capital Trapped in Your Warehouse.</h1>
        <p>Reduce inventory holding costs by 20% through automated capital optimization. Achieving real-time liquidity across complex supply chains.</p>

        <div class="hero-cta">
          <a routerLink="/contact" class="btn-primary">Analyze Capital Efficiency</a>
        </div>

        <!-- 3D Capital Hub Visual -->
        <div class="hero-visual-fleet-v4">
          <div class="fleet-container">
            <!-- Back Card (Aging Stock) -->
            <div class="terminal-card-v4 terminal-back secondary-card glass-card">
              <div class="terminal-header">
                <span>SEGMENT: SLOW MOVING</span>
                <span class="status-sync">● OPTIMIZING</span>
              </div>
              <div class="terminal-rows">
                <div class="t-row mini"><span>Aging Factor: 0.82</span></div>
                <div class="t-progress-v4"><div class="t-fill"></div></div>
              </div>
            </div>

            <!-- Middle Card (High Velocity) -->
            <div class="terminal-card-v4 terminal-middle secondary-card glass-card">
              <div class="terminal-header">
                <span>SEGMENT: HIGH VELOCITY</span>
                <span class="status-live">● PEAK</span>
              </div>
              <div class="terminal-rows">
                <div class="t-row mini"><span>SKU-44: 12 Sales/Hr</span></div>
              </div>
            </div>

            <!-- Main Card (Capital Matrix) -->
            <div class="terminal-card-v4 terminal-main glass-card">
              <div class="terminal-header">
                <span>CAPITAL ALLOCATION</span>
                <span class="status-live">● HEALTHY</span>
              </div>
              <div class="terminal-rows">
                <div class="t-row"><span>Total Stock Value</span><span>₹ 4.2M</span></div>
                <div class="t-row"><span>Net Liquidity</span><span>84.2%</span></div>
                <div class="t-total-row">
                  <span>UNLOCKED CASH</span><span>₹ 0.8M</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <!-- SECTION 2: Capabilities Bento (Matching Billing Style) -->
      <section class="bento-section">
        <div class="bento-container">
          <div class="bento-header text-center">
            <span class="eyebrow">CAPABILITIES</span>
            <h2>Stock Intelligence at Scale.</h2>
          </div>

          <div class="inner-bento-grid">
            <!-- Large Card: Live Stock Visibility -->
            <div class="bento-card-inner bento-large-inner">
              <div class="bento-icon-inner">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                  <path d="M21 16V8a2 2 0 00-1-1.73l-7-4a2 2 0 00-2 0l-7 4A2 2 0 003 8v8a2 2 0 001 1.73l7 4a2 2 0 002 0l7-4A2 2 0 0021 16z" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>
              </div>
              <h3>Live Stock Visibility</h3>
              <p>Track every SKU across all warehouses and stores in real-time. Know exactly what’s moving, where it’s stuck, and when to reorder.</p>
            </div>

            <!-- Card 2: Auto Purchase Orders -->
            <div class="bento-card-inner">
              <div class="bento-icon-inner">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                  <path d="M16 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M19 11v6m-3-3h6"/>
                </svg>
              </div>
              <h3>Auto Purchase Orders</h3>
              <p>Automate replenishment based on real-time sales velocity and vendor lead times. Zero stockouts.</p>
            </div>

            <!-- Card 3: Store-to-Store Transfers -->
            <div class="bento-card-inner">
              <div class="bento-icon-inner">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                  <path d="M17 2.1l4 4-4 4"/><path d="M3 12.2v-2a4 4 0 014-4h14"/><path d="M7 21.9l-4-4 4-4"/><path d="M21 11.8v2a4 4 0 01-4 4H3"/>
                </svg>
              </div>
              <h3>Smart Stock Transfers</h3>
              <p>Move inventory instantly to the counter where it's most likely to sell, preventing dead stock.</p>
            </div>

            <!-- Card 4: Low Stock Alerts -->
            <div class="bento-card-inner">
              <div class="bento-icon-inner">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                  <path d="M10.29 3.86L1.82 18a2 2 0 001.71 3h16.94a2 2 0 001.71-3L13.71 3.86a2 2 0 00-3.42 0z"/><line x1="12" y1="9" x2="12" y2="13"/><line x1="12" y1="17" x2="12.01" y2="17"/>
                </svg>
              </div>
              <h3>Predictive Alerts</h3>
              <p>AI-driven notifications before items go out of stock, protecting your top-line revenue.</p>
            </div>

            <!-- Card 5: SKU-Level Tracking -->
            <div class="bento-card-inner">
              <div class="bento-icon-inner">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                  <rect x="2" y="7" width="20" height="15" rx="2" ry="2"/><polyline points="17 21 17 13 7 13 7 21"/><path d="M2 14h20"/><path d="M6 7V4a2 2 0 012-2h8a2 2 0 012 2v3"/>
                </svg>
              </div>
              <h3>Batch & Serial Lineage</h3>
              <p>Deep compliance with batch numbers and expiry tracking for every product in your network.</p>
            </div>
          </div>
        </div>
      </section>

      <!-- SECTION 3: Operations Split (Refined Walkthrough) -->
      <section class="ops-walkthrough-v4">
        <div class="ops-header text-center">
          <span class="eyebrow">OPERATIONS</span>
          <h2 class="section-title">Maximum Capital Turnover.</h2>
        </div>
        
        <div class="split-content-v4">
          <div class="ops-list-v4">
            <div class="ops-card-v4 active">
              <h3>Cycle Counting 2.0</h3>
              <p>Digital stock takes that are verified in real-time. Reduce audit time from days to hours.</p>
            </div>
            <div class="ops-card-v4">
              <h3>Vendor Scorecards</h3>
              <p>Automatically rank your suppliers based on lead-time accuracy and fulfillment quality.</p>
            </div>
            <div class="ops-card-v4">
              <h3>Multi-Warehouse Routing</h3>
              <p>Automatically fulfill orders from the closest warehouse to minimize shipping cost and time.</p>
            </div>
          </div>

          <div class="ops-visual-v4">
            <div class="dashboard-preview glass-card">
              <div class="dash-top">
                <div class="dash-search-mock">✨ Auditing Warehouse A...</div>
              </div>
              <div class="dash-main-stat">
                <label>Inventory Valuation</label>
                <div class="stat-row">
                  <span class="val">₹ 4.2 Cr</span>
                  <span class="trend up">↑ 8.4%</span>
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

      <!-- SECTION 4: Outcome Section (Matching Billing) -->
      <section class="outcome-section">
        <div class="outcome-container">
          <h2>Stop Funding Dead Stock.</h2>
          <p class="outcome-statement">Zenflow ensures your capital is always working, never sitting on a shelf.</p>
          <div class="outcome-points">
            <div class="outcome-item">
              <div class="outcome-check">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3">
                  <path d="M20 6L9 17L4 12" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>
              </div>
              <span>Reduce inventory holding costs by up to 30%.</span>
            </div>
            <div class="outcome-item">
              <div class="outcome-check">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3">
                  <path d="M20 6L9 17L4 12" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>
              </div>
              <span>100% audit accuracy across all locations.</span>
            </div>
          </div>
        </div>
      </section>
    </div>

    <!-- Conversion CTA -->
    <app-final-cta 
      eyebrow="READY TO OPTIMIZE YOUR STOCK?"
      headline="Transform Your <br>Inventory Today."
      subtext="See how Zenflow transforms billing, inventory, and accounting into one seamless retail system."
      buttonText="Analyze My Efficiency →">
    </app-final-cta>
  `,
  styleUrl: './inventory.component.scss'
})
export class InventoryComponent { }
