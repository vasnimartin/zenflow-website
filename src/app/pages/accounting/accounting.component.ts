import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { FinalCtaComponent } from '../../components/final-cta/final-cta.component';

@Component({
  selector: 'app-accounting',
  standalone: true,
  imports: [CommonModule, RouterLink, FinalCtaComponent],
  template: `
    <div class="container page-content">
      <!-- SECTION 1: Centered Hero (Sync Parity + Ledger Visual) -->
      <section class="hero-section reveal-active">
        <div class="eyebrow">INTELLIGENT FINANCIAL OPS</div>
        <h1 class="gradient-text">Retail Accounting<br>Without the Manual Work.</h1>
        <p>Auto-reconcile transactions, manage GST filings, and close books faster. Real-time financial intelligence at your fingertips.</p>

        <div class="hero-cta">
          <a routerLink="/contact" class="btn-primary">View Financial Intelligence</a>
        </div>

        <!-- 3D Ledger Visual (Unified Graph Integration) -->
        <div class="hero-visual-fleet-v4">
          <div class="fleet-container">
            <!-- Back Card (Compliance Status) -->
            <div class="terminal-card-v4 terminal-back secondary-card glass-card">
              <div class="terminal-header">
                <span>COMPLIANCE: GSTR-3B</span>
                <span class="status-sync">● READY</span>
              </div>
              <div class="terminal-rows">
                <div class="t-row mini"><span>Tax Period: April 2026</span></div>
                <div class="t-progress-v4"><div class="t-fill"></div></div>
              </div>
            </div>

            <!-- Middle Card (Audit Log) -->
            <div class="terminal-card-v4 terminal-middle secondary-card glass-card">
              <div class="terminal-header">
                <span>AUDIT LOG: RECENT</span>
                <span class="status-live">● VERIFIED</span>
              </div>
              <div class="terminal-rows">
                <div class="t-row mini"><span>Journal #829: Corrected</span></div>
              </div>
            </div>

            <!-- Main Card (Fav Cashflow Graph Integrated) -->
            <div class="terminal-card-v4 terminal-main glass-card">
              <div class="terminal-header">
                <span>FINANCIAL HEALTH</span>
                <span class="status-live">● STABLE</span>
              </div>
              
              <!-- User's Favorite Graph (Upstyled for V4) -->
              <div class="v4-chart-integration">
                <div class="chart-header-mini">
                  <small>CASHFLOW FORECAST</small>
                  <span class="liquidity-badge">+7.5%</span>
                </div>
                <svg viewBox="0 0 400 150" class="v4-cashflow-svg">
                  <path d="M0,130 Q100,120 200,60 T400,20" class="path-expected" />
                  <path d="M0,140 Q150,140 400,100" class="path-baseline" />
                  <circle cx="200" cy="60" r="4" class="current-marker" />
                  <rect x="180" y="30" width="80" height="20" rx="4" class="date-callout" />
                  <text x="185" y="44" class="callout-text">₹ 2,38,758</text>
                </svg>
              </div>

              <div class="terminal-rows mt-4">
                <div class="t-total-row">
                  <span>NET POSITION</span><span>₹ 12.4M</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <!-- SECTION 2: Capabilities Bento (Matching Billing/Inventory Style) -->
      <section class="bento-section">
        <div class="bento-container">
          <div class="bento-header text-center">
            <span class="eyebrow">CAPABILITIES</span>
            <h2>Automated Financial Control.</h2>
          </div>

          <div class="inner-bento-grid">
            <!-- Large Card: Auto-Reconciliation -->
            <div class="bento-card-inner bento-large-inner">
              <div class="bento-icon-inner">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                  <path d="M22 11.08V12a10 10 0 11-5.93-9.14" stroke-linecap="round" stroke-linejoin="round"/>
                  <path d="M22 4L12 14.01l-3-3" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>
              </div>
              <h3>Precision Auto-Reconciliation</h3>
              <p>Zenflow matches bank statements, UPI payments, and credit card settlements against your sales data in real-time. 99.9% matching accuracy.</p>
            </div>

            <!-- Card 2: GST Export -->
            <div class="bento-card-inner">
              <div class="bento-icon-inner">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                  <path d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8z"/><polyline points="14 2 14 8 20 8"/><line x1="16" y1="13" x2="8" y2="13"/><line x1="16" y1="17" x2="8" y2="17"/>
                </svg>
              </div>
              <h3>GST-Ready Reports</h3>
              <p>One-click export for GSTR-1, GSTR-3B, and GSTR-9. Fully compliant with the latest GST rules and formats.</p>
            </div>

            <!-- Card 3: Real-time P&L -->
            <div class="bento-card-inner">
              <div class="bento-icon-inner">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                  <path d="M3 3v18h18"/><path d="M18 9l-3 3-3-3-3 3"/>
                </svg>
              </div>
              <h3>Daily P&L Pulse</h3>
              <p>Know your exact profitability at the close of every business day. Track margins across stores and categories.</p>
            </div>

            <!-- Card 4: ERP/Tally Sync -->
            <div class="bento-card-inner">
              <div class="bento-icon-inner">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                  <path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 00-3-3.87"/><path d="M16 3.13a4 4 0 010 7.75"/>
                </svg>
              </div>
              <h3>Zero-Entry Ledger</h3>
              <p>Automatically post purchase entries and vendor payments. Native integration with Tally and major ERPs.</p>
            </div>

            <!-- Card 5: Audit Logs -->
            <div class="bento-card-inner">
              <div class="bento-icon-inner">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                  <rect x="3" y="11" width="18" height="11" rx="2" ry="2"/><path d="M7 11V7a5 5 0 0110 0v4"/>
                </svg>
              </div>
              <h3>Audit-Proof History</h3>
              <p>Every financial change is logged with a timestamp and user ID. Maintain an immutable digital paper trail.</p>
            </div>
          </div>
        </div>
      </section>

      <!-- SECTION 3: Operations Split (V4 Walkthrough) -->
      <section class="ops-walkthrough-v4">
        <div class="ops-header text-center">
          <span class="eyebrow">WORKFLOW</span>
          <h2 class="section-title">From Transaction to Ledger.</h2>
        </div>
        
        <div class="split-content-v4">
          <div class="ops-list-v4">
            <div class="ops-card-v4 active">
              <h3>Automated Journal Posting</h3>
              <p>Sales, returns, and expenses are automatically categorized and posted to their respective ledgers in real-time.</p>
            </div>
            <div class="ops-card-v4">
              <h3>Multi-Store Aggregation</h3>
              <p>Consolidate financial data from 100+ locations into a single, unified group balance sheet instantly.</p>
            </div>
            <div class="ops-card-v4">
              <h3>Expense Management</h3>
              <p>Capture petty cash and store expenses via mobile. Workflow-based approvals before ledger posting.</p>
            </div>
          </div>

          <div class="ops-visual-v4">
            <div class="dashboard-preview glass-card">
              <div class="dash-top">
                <div class="dash-search-mock">✨ Finalizing April Books...</div>
              </div>
              <div class="dash-main-stat">
                <label>Tax Liability (Estimated)</label>
                <div class="stat-row">
                  <span class="val">₹ 1.2M</span>
                  <span class="trend down">↓ 4.1%</span>
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

      <!-- SECTION 4: Outcome Section (Matching Suite) -->
      <section class="outcome-section">
        <div class="outcome-container">
          <h2>Your Auditor's Best Friend.</h2>
          <p class="outcome-statement">Zenflow handles the manual data entry while you focus on scaling your enterprise.</p>
          <div class="outcome-points">
            <div class="outcome-item">
              <div class="outcome-check">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3">
                  <path d="M20 6L9 17L4 12" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>
              </div>
              <span>Close your monthly books 5x faster than manual accounting.</span>
            </div>
            <div class="outcome-item">
              <div class="outcome-check">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3">
                  <path d="M20 6L9 17L4 12" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>
              </div>
              <span>Eliminate 99% of reconciliation errors with automated bank matching.</span>
            </div>
          </div>
        </div>
      </section>
    </div>

    <!-- Conversion CTA -->
    <app-final-cta 
      eyebrow="READY FOR FINANCIAL CLARITY?"
      headline="Transform Your <br>Accounting Today."
      subtext="See how Zenflow transforms billing, inventory, and accounting into one seamless retail system."
      buttonText="Get Audit Ready →">
    </app-final-cta>
  `,
  styleUrl: './accounting.component.scss'
})
export class AccountingComponent { }
