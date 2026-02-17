import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-accounting',
  standalone: true,
  imports: [CommonModule, RouterLink],
  template: `
    <div class="container page-content">
      <!-- SECTION 1: Centered Hero -->
      <section class="hero-section reveal-active">
        <div class="eyebrow">INTELLIGENT FINANCIAL OPS</div>
        <h1 class="gradient-text">Retail Accounting<br>Without the Manual Work.</h1>
        <p>Auto-reconcile transactions, manage GST filings, and close books faster. Real-time financial intelligence at your fingertips.</p>

        <div class="hero-cta">
          <a routerLink="/contact" class="btn-primary">View Financial Intelligence</a>
        </div>

        <div class="hero-visual">
          <div class="living-graph-container glass-card">
            <div class="chart-header">
              <span>Expected Cashflow</span>
              <span class="liquidity-badge">+7.5%</span>
            </div>
            <div class="chart-box">
              <svg viewBox="0 0 400 150" class="cashflow-svg">
                <!-- Simple animated SVG path -->
                <path d="M0,130 Q100,120 200,60 T400,20" class="path-expected" />
                <path d="M0,140 Q150,140 400,100" class="path-baseline" />
                
                <!-- Current point marker -->
                <circle cx="200" cy="60" r="4" class="current-marker" />
                
                <!-- Callout -->
                <rect x="180" y="30" width="80" height="20" rx="4" class="date-callout" />
                <text x="185" y="44" class="callout-text">₹ 2,38,758</text>
              </svg>
            </div>
          </div>
        </div>
      </section>

      <!-- SECTION 2: Bento Featured Grid -->
      <section class="bento-section">
        <div class="bento-container">
          <div class="bento-header">
            <span class="eyebrow">CAPABILITIES</span>
            <h2>Automated Financial Control.</h2>
          </div>

          <div class="inner-bento-grid">
            <div class="bento-card-inner bento-large-inner">
              <div class="mini-reconcile-visual">
                <div class="rec-icon">✓</div>
                <div class="rec-details">
                  <div class="rec-label">UPI-MATCH-884</div>
                  <div class="rec-status">SUCCESSFUL</div>
                </div>
                <div class="rec-amount">₹ 4,500</div>
              </div>
              <h3>Auto-Reconciliation</h3>
              <p>Zenflow precision-matches UPI, Credit Cards, and Bank Statements against your POS sales automatically. Zero friction matching.</p>
            </div>

            <div class="bento-card-inner">
              <div class="bento-icon-inner">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                  <path d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8z"/><polyline points="14 2 14 8 20 8"/><line x1="16" y1="13" x2="8" y2="13"/><line x1="16" y1="17" x2="8" y2="17"/>
                </svg>
              </div>
              <h3>GST Reporting Engine</h3>
              <p>Download GSTR-1 and GSTR-3B ready reports with one click, fully compliant with Indian tax laws.</p>
            </div>

            <div class="bento-card-inner">
              <div class="bento-icon-inner">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                  <path d="M3 3v18h18"/><path d="M18 9l-3 3-3-3-3 3"/>
                </svg>
              </div>
              <h3>Income Summary Dashboard</h3>
              <p>Real-time P&L visualization across all store locations, giving you a daily pulse on your profitability.</p>
            </div>

            <div class="bento-card-inner">
              <div class="bento-icon-inner">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                  <path d="M16 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M22 21v-2a4 4 0 00-3-3.87M16 3.13a4 4 0 010 7.75"/>
                </svg>
              </div>
              <h3>Vendor Ledger Sync</h3>
              <p>Automatically post purchase entries and track accounts payable without manual entry.</p>
            </div>

            <div class="bento-card-inner">
              <div class="bento-icon-inner">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                  <rect x="3" y="11" width="18" height="11" rx="2" ry="2"/><path d="M7 11V7a5 5 0 0110 0v4"/>
                </svg>
              </div>
              <h3>Financial Audit Logs</h3>
              <p>Maintain a complete, immutable history of financial changes for audit readiness.</p>
            </div>
          </div>
        </div>
      </section>

      <!-- SECTION 3: Outcome/Dark CTA -->
      <section class="outcome-section">
        <div class="outcome-container">
          <h2>Your Auditor's Best Friend.</h2>
          <p class="outcome-statement">Zenflow handles the manual data entry while you focus on growth.</p>
          <div class="outcome-points">
            <div class="outcome-item">
              <div class="outcome-check">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3">
                  <path d="M20 6L9 17L4 12" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>
              </div>
              <span>Close your monthly books 5x faster.</span>
            </div>
            <div class="outcome-item">
              <div class="outcome-check">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3">
                  <path d="M20 6L9 17L4 12" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>
              </div>
              <span>Zero errors with direct bank-to-ledger posting.</span>
            </div>
          </div>
        </div>
      </section>
    </div>

    <!-- Dark Conversion CTA -->
    <section class="page-cta-dark">
      <span class="eyebrow">READY FOR FINANCIAL CLARITY?</span>
      <h3>Transform Your Accounting Today.</h3>
      <a routerLink="/contact" class="btn-conversion">Get Audit Ready →</a>
    </section>
  `,
  styleUrls: ['./accounting.component.scss']
})
export class AccountingComponent { }
