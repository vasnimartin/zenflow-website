import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-inventory',
  standalone: true,
  imports: [CommonModule, RouterLink],
  template: `
    <div class="container page-content">
      <!-- SECTION 1: Centered Hero (Reference Style) -->
      <section class="hero-section reveal-active">
        <div class="eyebrow">INVENTORY ORCHESTRATION</div>
        <h1 class="gradient-text">Unlock cash trapped<br>in your warehouse.</h1>
        <p>Reduce inventory holding costs by 20% through automated capital optimization. Achieving real-time liquidity across complex supply chains.</p>

        <div class="hero-cta">
          <a routerLink="/contact" class="btn-primary">Analyze Capital Efficiency</a>
        </div>

        <div class="hero-visual">
          <div class="liquidity-matrix glass-card">
            <div class="matrix-header">
              <span>Capital Allocation Matrix</span>
              <span class="matrix-version">v2026.4</span>
            </div>
            <div class="matrix-grid">
              <div class="matrix-cell"><span>High Velocity</span><small>₹ 1.2M</small></div>
              <div class="matrix-cell"><span>Target Zone</span><small>₹ 0.8M</small></div>
              <div class="matrix-cell"><span>Optimized</span><small>₹ 2.4M</small></div>
              <div class="matrix-cell aging active">
                <div class="aging-indicator">Aging Alert</div>
                <span>Capital At Risk</span>
                <small>₹ 0.4M</small>
              </div>
            </div>
          </div>
        </div>
      </section>

      <!-- SECTION 2: Bento Featured Grid -->
      <section class="bento-section">
        <div class="bento-container">
          <div class="bento-header">
            <span class="eyebrow">CAPABILITIES</span>
            <h2>Stock Intelligence at Scale.</h2>
          </div>

          <div class="inner-bento-grid">
            <div class="bento-card-inner bento-large-inner">
              <div class="bento-icon-inner">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                  <path d="M21 16V8a2 2 0 00-1-1.73l-7-4a2 2 0 00-2 0l-7 4A2 2 0 003 8v8a2 2 0 001 1.73l7 4a2 2 0 002 0l7-4A2 2 0 0021 16z" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>
              </div>
              <h3>Live Stock Visibility</h3>
              <p>Track every SKU across all warehouses and stores in real-time. Know exactly what’s moving.</p>
            </div>

            <div class="bento-card-inner">
              <div class="bento-icon-inner">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                  <path d="M16 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M19 11v6m-3-3h6"/>
                </svg>
              </div>
              <h3>Auto Purchase Orders</h3>
              <p>Automate replenishment based on real-time sales velocity and lead times.</p>
            </div>

            <div class="bento-card-inner">
              <div class="bento-icon-inner">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                  <path d="M17 2.1l4 4-4 4"/><path d="M3 12.2v-2a4 4 0 014-4h14"/><path d="M7 21.9l-4-4 4-4"/><path d="M21 11.8v2a4 4 0 01-4 4H3"/>
                </svg>
              </div>
              <h3>Store-to-Store Transfers</h3>
              <p>Move stock instantly to where it's most likely to sell, optimizing inventory health.</p>
            </div>

            <div class="bento-card-inner">
              <div class="bento-icon-inner">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                  <path d="M10.29 3.86L1.82 18a2 2 0 001.71 3h16.94a2 2 0 001.71-3L13.71 3.86a2 2 0 00-3.42 0z"/><line x1="12" y1="9" x2="12" y2="13"/><line x1="12" y1="17" x2="12.01" y2="17"/>
                </svg>
              </div>
              <h3>Low Stock Alerts</h3>
              <p>Intelligent notifications before items go out of stock, preventing lost revenue.</p>
            </div>

            <div class="bento-card-inner">
              <div class="bento-icon-inner">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                  <rect x="2" y="7" width="20" height="15" rx="2" ry="2"/><polyline points="17 21 17 13 7 13 7 21"/><path d="M2 14h20"/><path d="M6 7V4a2 2 0 012-2h8a2 2 0 012 2v3"/>
                </svg>
              </div>
              <h3>SKU-Level Tracking</h3>
              <p>Deep insight into batch numbers, expiry dates, and serial lineage for every product.</p>
            </div>
          </div>
        </div>
      </section>

      <!-- SECTION 3: Outcome/Dark CTA -->
      <section class="outcome-section">
        <div class="outcome-container">
          <h2>Stop Funding Dead Stock.</h2>
          <p class="outcome-statement">Zenflow identifies capital congestion across your entire network.</p>
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
              <span>100% audit accuracy with batch and serial lineage.</span>
            </div>
          </div>
        </div>
      </section>
    </div>

    <!-- Dark Conversion CTA -->
    <section class="page-cta-dark">
      <span class="eyebrow">READY TO OPTIMIZE YOUR ASSETS?</span>
      <h3>Transform Your Inventory Today.</h3>
      <a routerLink="/contact" class="btn-conversion">Analyze Your Stock →</a>
    </section>
  `,
  styleUrl: './inventory.component.scss'
})
export class InventoryComponent { }
