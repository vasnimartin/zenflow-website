import { Component, ChangeDetectorRef } from '@angular/core';
import { RouterLink } from '@angular/router';
import { CounterComponent } from '../shared/counter.component';

@Component({
  selector: 'app-hero',
  standalone: true,
  imports: [RouterLink, CounterComponent],
  template: `
    <section class="hero">
      <div class="container hero-content">
        <div class="eyebrow">AI POWERED ERP FOR RETAIL</div>
        <h1 class="headline">
          One powerful platform to run your retail business
        </h1>
        <p class="subtext">
          Advanced Billing, Inventory and Accounting—all from one powerful, 
          easy to use platform. Take control of your finances, reduce inventory cost & grow revenue.
        </p>
        <div class="cta-group">
          <a routerLink="/contact" class="btn btn-primary">Get Started</a>
          <a routerLink="/billing" class="btn btn-outline">View Features</a>
        </div>
        
        <!-- 3D Command Center Dashboard -->
        <div class="dashboard-container">
          <div class="dashboard-interface">
            <div class="dashboard-header">
              <h4>Real-Time Overview</h4>
              <span class="badge pulse-badge">
                <span class="dot"></span> Live
              </span>
            </div>
            
            <div class="dashboard-metric">
              <div class="metric-label">Total Sales</div>
              <!-- Live Animated Number -->
              <div class="metric-value">
                <app-counter [target]="40015" prefix="₹ "></app-counter>
              </div>
              <div class="metric-trend">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="23 6 13.5 15.5 8.5 10.5 1 18"></polyline><polyline points="17 6 23 6 23 12"></polyline></svg>
                +12.4% vs last week
              </div>
            </div>
            
            <div class="dashboard-actions">
              <div class="action-btn">
                <span class="lbl">Reconciled</span>
                <span class="val">₹ 45,000</span>
              </div>
              <div class="action-btn primary-action">
                <span class="lbl">Action</span>
                <span class="val">Smarter cash flow</span>
              </div>
            </div>
          </div>
        </div>
        
        <!-- Social Proof Stats (Stable) -->
        <div class="stats-row">
          <div class="stat-item">
            <div class="stat-value">
              <app-counter [target]="200" suffix="K"></app-counter>
            </div>
            <div class="stat-label">Monthly Bills Generated</div>
          </div>
          <div class="stat-divider"></div>
          <div class="stat-item">
            <div class="stat-value">
              <app-counter [target]="30000" suffix="+"></app-counter>
            </div>
            <div class="stat-label">SKUs Tracked</div>
          </div>
          <div class="stat-divider"></div>
          <div class="stat-item">
            <div class="stat-value">
              <app-counter [target]="10" prefix="₹" suffix="Cr"></app-counter>
            </div>
            <div class="stat-label">Revenue Reconciled</div>
          </div>
        </div>
        
        <!-- Target Industry List -->
        <div class="industry-ticker">
          <div class="industry-label">Perfect for</div>
          <div class="industry-list">
            <div class="industry-item">Pharmacies</div>
            <span class="industry-dot"></span>
            <div class="industry-item">Supermarkets</div>
            <span class="industry-dot"></span>
            <div class="industry-item">Electronics</div>
            <span class="industry-dot"></span>
            <div class="industry-item">Home & Kitchen</div>
            <span class="industry-dot"></span>
            <div class="industry-item">Clothing & Apparel</div>
          </div>
        </div>
      </div>
    </section>
  `,
  styles: [`
    .hero {
      padding: 12rem 0 6rem; /* significantly increased from 6rem to clear fixed header */
      text-align: center;
      position: relative;
      overflow: hidden;
      /* background-color removed to show global grid */
    }
    
    .eyebrow {
      font-size: 0.85rem;
      font-weight: 700;
      letter-spacing: 0.2em;
      text-transform: uppercase;
      color: var(--primary-color);
      margin-bottom: 1.5rem;
      display: inline-block;
      padding: 0.5rem 1rem;
      background: rgba(99, 102, 241, 0.1);
      border-radius: 20px;
      border: 1px solid rgba(99, 102, 241, 0.2);
    }
    
    /* Industry Ticker underneath stats */
    .industry-ticker {
      margin-top: 4rem;
      padding-top: 2rem;
      border-top: 1px solid rgba(255,255,255,0.1);
    }
    .industry-label {
      font-size: 0.9rem;
      color: var(--text-light);
      margin-bottom: 1rem;
      text-transform: uppercase;
      letter-spacing: 0.05em;
    }
    .industry-list {
      display: flex;
      justify-content: center;
      flex-wrap: wrap;
      gap: 1.5rem;
      font-weight: 500;
      color: var(--text-medium);
    }
    .industry-item {
      display: flex;
      align-items: center;
      gap: 0.5rem;
    }
    .industry-dot {
      width: 4px; 
      height: 4px; 
      background: var(--primary-color); 
      border-radius: 50%;
      opacity: 0.5;
    }

    /* Sophisticated Background Layers */
    .hero::before {
      content: '';
      position: absolute;
      top: 0; left: 0; right: 0; bottom: 0;
      /* Static base layer - slightly more transparent to let glow through */
      background: radial-gradient(circle at 50% 50%, rgba(255, 255, 255, 0.5) 0%, transparent 60%);
      z-index: 0;
    }
    
    .hero-glow, .scanning-grid {
      /* Handled in global styles, but implicitly z-index: 1 now */
      position: absolute; 
    }

    .hero-content {
      max-width: 1000px;
      margin: 0 auto;
      position: relative;
      z-index: 2; /* Ensure content is on top of animations */
    }

    .headline {
      font-size: 4.5rem; /* Massive, confident type */
      line-height: 1.1;
      margin-bottom: 2rem;
      font-weight: 800;
      letter-spacing: -0.03em;
      max-width: 850px; /* Constrained for punchy line breaks */
      margin-left: auto;
      margin-right: auto;
      
      /* Premium Gradient Mask */
      background: var(--gradient-text);
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
      background-clip: text;
    }

    .subtext {
      font-size: 1.35rem;
      color: var(--text-medium);
      max-width: 700px;
      margin: 0 auto 3rem;
      line-height: 1.6;
      font-weight: 400;
    }

    .cta-group {
      display: flex;
      justify-content: center;
      gap: 1.5rem;
      margin-bottom: 6rem;
    }
    
    .btn {
      padding: 1rem 2rem;
      font-size: 1.1rem;
      border-radius: 50px; /* Pill shape for modern feel */
    }

    .stats-row {
      display: flex;
      justify-content: center;
      align-items: center;
      gap: 3rem; /* Compacted gap */
      padding: 2rem 3rem; /* Compacted padding */
      background: rgba(255, 255, 255, 0.6);
      backdrop-filter: blur(12px);
      border-radius: 24px;
      border: 1px solid rgba(99, 102, 241, 0.2); /* Darker border for visibility */
      box-shadow: var(--card-shadow);
      display: inline-flex; /* Wrap nicely */
    }

    .stat-item { text-align: center; }

    .stat-value {
      font-size: 2.5rem;
      font-weight: 800;
      color: var(--primary-color);
      line-height: 1;
      margin-bottom: 0.5rem;
      letter-spacing: -0.02em;
      font-variant-numeric: tabular-nums;
      font-feature-settings: "tnum";
    }
    
    /* Override for App Counter internal span */
    .stat-value ::ng-deep .stat-number {
      font-size: 2.5rem;
      font-weight: 800;
      color: var(--primary-color);
    }

    .stat-label {
      font-size: 0.85rem;
      color: var(--text-light);
      font-weight: 600;
      text-transform: uppercase;
      letter-spacing: 0.08em;
    }

    .stat-divider {
      width: 1px;
      height: 50px;
      background: linear-gradient(180deg, transparent, var(--border-color), transparent);
    }

    @media (max-width: 768px) {
      .hero { padding: 8rem 0 5rem; } /* Adjusted mobile spacing too */
      .headline { font-size: 2.75rem; }
      .stats-row { 
        flex-direction: column; 
        gap: 2rem; 
        width: 100%;
      }
      .stat-divider { 
        width: 50px; 
        height: 1px; 
        background: linear-gradient(90deg, transparent, var(--border-color), transparent);
      }
    }
  `]
})
export class HeroComponent {}
