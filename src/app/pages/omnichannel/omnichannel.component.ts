import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-omnichannel',
  standalone: true,
  imports: [CommonModule, RouterLink],
  template: `
    <div class="container page-content">
      <!-- SECTION 1: Centered Hero (Sync Parity + Marketplace Visual) -->
      <section class="hero-section reveal-active">
        <div class="eyebrow">UNIFIED COMMERCE</div>
        <h1 class="gradient-text">Sell Everywhere.<br>Manage in One Place.</h1>
        <p>Sync your physical store inventory with Amazon, Myntra, and Ajio in real-time. Turn your warehouse into a high-speed fulfillment hub.</p>

        <div class="hero-cta">
          <a routerLink="/contact" class="btn-primary">Connect Your Channels</a>
        </div>

        <!-- 3D Channel Sync Visual -->
        <div class="hero-visual-fleet-v4">
          <div class="fleet-container">
            <!-- Back Card (Ajio/Myntra) -->
            <div class="terminal-card-v4 terminal-back secondary-card glass-card">
              <div class="terminal-header">
                <span>CHANNEL: MYNTRA</span>
                <span class="status-sync">● SYNCING</span>
              </div>
              <div class="terminal-rows">
                <div class="t-row mini"><span>Batch Update v2.4</span></div>
                <div class="t-progress-v4"><div class="t-fill"></div></div>
              </div>
            </div>

            <!-- Middle Card (Amazon) -->
            <div class="terminal-card-v4 terminal-middle secondary-card glass-card">
              <div class="terminal-header">
                <span>CHANNEL: AMAZON</span>
                <span class="status-live">● LIVE</span>
              </div>
              <div class="terminal-rows">
                <div class="t-row mini"><span>New Order: AMZ-309</span></div>
              </div>
            </div>

            <!-- Main Card (Global Sync) -->
            <div class="terminal-card-v4 terminal-main glass-card">
              <div class="terminal-header">
                <span>OMNICHANNEL HUB</span>
                <span class="status-live">● ACTIVE</span>
              </div>
              <div class="terminal-rows">
                <div class="t-row"><span>Total Orders Today</span><span>142</span></div>
                <div class="t-row"><span>Inventory Health</span><span>99.8%</span></div>
                <div class="t-total-row">
                  <span>UNIFIED STOCK</span><span>18,450</span>
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
            <h2>One Inventory. Infinite Channels.</h2>
          </div>

          <div class="inner-bento-grid">
            <!-- Large Card: Real-time Marketplace Sync -->
            <div class="bento-card-inner bento-large-inner">
              <div class="bento-icon-inner">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                  <path d="M23 4v6h-6M1 20v-6h6M3.51 9a9 9 0 0114.85-3.36L23 10M1 14l4.64 4.36A9 9 0 0020.49 15" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>
              </div>
              <h3>Live Marketplace Sync</h3>
              <p>Sell an item in-store, and it's instantly removed from Amazon. No more overselling or marketplace penalties.</p>
            </div>

            <!-- Card 2: Shiprocket Integration -->
            <div class="bento-card-inner">
              <div class="bento-icon-inner">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                  <path d="M21 16V8a2 2 0 00-1-1.73l-7-4a2 2 0 00-2 0l-7 4A2 2 0 003 8v8a2 2 0 001 1.73l7 4a2 2 0 002 0l7-4A2 2 0 0021 16z" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>
              </div>
              <h3>Shiprocket Native</h3>
              <p>Generate labels and track shipments directly from Zenflow. 24,000+ pin codes covered.</p>
            </div>

            <!-- Card 3: Unified Customer 360 -->
            <div class="bento-card-inner">
              <div class="bento-icon-inner">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                  <path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 00-3-3.87"/><path d="M16 3.13a4 4 0 010 7.75"/>
                </svg>
              </div>
              <h3>Customer 360°</h3>
              <p>Identify your top customers whether they buy on your website, a marketplace, or in-store.</p>
            </div>

            <!-- Card 4: Pick-and-Pack -->
            <div class="bento-card-inner">
              <div class="bento-icon-inner">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                  <rect x="2" y="3" width="20" height="14" rx="2" ry="2"/><line x1="8" y1="21" x2="16" y2="21"/><line x1="12" y1="17" x2="12" y2="21"/>
                </svg>
              </div>
              <h3>Smart Fulfillment</h3>
              <p>Optimized picking paths and digital packing lists for 50% faster order processing.</p>
            </div>

            <!-- Card 5: Returns Management -->
            <div class="bento-card-inner">
              <div class="bento-icon-inner">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                  <path d="M11 15L6 10l5-5"/><path d="M4 10h12a5 5 0 015 5v2"/>
                </svg>
              </div>
              <h3>Unified Returns</h3>
              <p>Process online returns at your retail counter or warehouse with instant stock re-entry.</p>
            </div>
          </div>
        </div>
      </section>

      <!-- SECTION 3: Operations Split (Refined Walkthrough) -->
      <section class="ops-walkthrough-v4">
        <div class="ops-header text-center">
          <span class="eyebrow">ORDER FLOW</span>
          <h2 class="section-title">Zero-Lag Logistics.</h2>
        </div>
        
        <div class="split-content-v4">
          <div class="ops-list-v4">
            <div class="ops-card-v4 active">
              <h3>Centralized Order Desk</h3>
              <p>View Amazon, Shopify, and POS orders in a single, unified stream. Priority-based sorting.</p>
            </div>
            <div class="ops-card-v4">
              <h3>Automated Stock Buffers</h3>
              <p>Set safety stock levels per channel to prevent overselling on high-risk marketplaces.</p>
            </div>
            <div class="ops-card-v4">
              <h3>Direct-to-Customer (D2C)</h3>
              <p>Ship directly from your stores. Convert every outlet into a mini-fulfillment center.</p>
            </div>
          </div>

          <div class="ops-visual-v4">
            <div class="dashboard-preview glass-card">
              <div class="dash-top">
                <div class="dash-search-mock">✨ Syncing Amazon orders...</div>
              </div>
              <div class="dash-main-stat">
                <label>Active Shipments</label>
                <div class="stat-row">
                  <span class="val">84</span>
                  <span class="trend up">↑ 8.2%</span>
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
          <h2>Stop Segregating Your Stock.</h2>
          <p class="outcome-statement">Zenflow merges your offline and online worlds into a single, high-velocity engine.</p>
          <div class="outcome-points">
            <div class="outcome-item">
              <div class="outcome-check">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3">
                  <path d="M20 6L9 17L4 12" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>
              </div>
              <span>Increase online sales by 25% with unified inventory visibility.</span>
            </div>
            <div class="outcome-item">
              <div class="outcome-check">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3">
                  <path d="M20 6L9 17L4 12" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>
              </div>
              <span>Eliminate marketplace cancellation fees due to stock errors.</span>
            </div>
          </div>
        </div>
      </section>
    </div>

    <!-- SECTION 5: Dark CTA -->
    <section class="page-cta-dark">
      <span class="eyebrow">READY TO GO OMNICHANNEL?</span>
      <h3>Connect Your Commerce Today.</h3>
      <a routerLink="/contact" class="btn-conversion">Sync My Store →</a>
    </section>
  `,
  styleUrl: './omnichannel.component.scss'
})
export class OmnichannelComponent { }
