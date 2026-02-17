import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { CounterComponent } from '../shared/counter.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-hero',
  standalone: true,
  imports: [RouterLink, CounterComponent, CommonModule],
  template: `
    <section class="hero">
      <div class="container hero-container">
        <!-- Floating Metric Cards (U-Shape) -->
        <div class="metrics-wrapper">
          
          <!-- Column 1: Retail (Left) -->
          <div class="metrics-column side-left">
            <!-- 1. Live Sales (Numeric) -->
            <div class="metric-card numeric-card reveal-left">
              <span class="label">Live Sales</span>
              <div class="value">
                <app-counter [target]="28450" prefix="₹"></app-counter>
              </div>
              <span class="trend up">Live Now</span>
            </div>

            <!-- 2. Live Inventory Count (Visual Bar Chart) -->
            <div class="metric-card visual-card reveal-left">
              <span class="label">Live Inventory</span>
              <div class="mini-chart bar-chart">
                <div class="bar" style="height: 60%"></div>
                <div class="bar" style="height: 85%"></div>
                <div class="bar" style="height: 45%"></div>
                <div class="bar" style="height: 70%"></div>
              </div>
              <span class="caption">94.2% In-Stock</span>
            </div>
          </div>

          <!-- Central Hero Content -->
          <div class="hero-main">
            <div class="eyebrow">MODERN RETAIL OS</div>
            <h1 class="headline">
              Powering the future of <span class="text-gradient">Commerce</span>
            </h1>
            <p class="subtext">
              Unified Billing, Inventory, and Accounting designed for the next generation of retailers. 
              Built to scale your business with precision.
            </p>
            <div class="cta-group">
              <a routerLink="/contact" class="btn btn-primary">Request Demo</a>
              <a routerLink="/inventory" class="btn btn-outline">Explore Product</a>
            </div>
          </div>

          <!-- Column 2: E-commerce (Right) -->
          <div class="metrics-column side-right">
            <!-- 3. Marketing Cost (Visual Sparkline) -->
            <div class="metric-card visual-card reveal-right">
              <span class="label">Marketing Cost</span>
              <div class="mini-chart line-chart">
                <svg viewBox="0 0 100 40" class="sparkline">
                   <path d="M0 35 Q 25 30, 40 10 T 80 5 T 100 20" fill="none" class="path-glow" stroke="url(#lineGradient)" stroke-width="3" />
                   <defs>
                     <linearGradient id="lineGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                       <stop offset="0%" style="stop-color:#6366f1" />
                       <stop offset="100%" style="stop-color:#a855f7" />
                     </linearGradient>
                   </defs>
                </svg>
              </div>
              <span class="caption">Optimization: Active</span>
            </div>

            <!-- 4. Customer Acquisition (Numeric) -->
            <div class="metric-card numeric-card reveal-right">
              <span class="label">CAC (Global)</span>
              <div class="value">
                <app-counter [target]="240" prefix="₹"></app-counter>
              </div>
              <span class="trend up">Peak Efficiency</span>
            </div>
          </div>

          <!-- Bottom Row: Efficiency Hub (Completing the U) -->
          <div class="metrics-bottom">
            <!-- 5. Average Order Value (Numeric) -->
            <div class="metric-card numeric-card reveal-bottom">
              <div class="metric-horizontal">
                <span class="label">Avg Order Value</span>
                <div class="value small">
                  <app-counter [target]="2450" prefix="₹"></app-counter>
                </div>
              </div>
            </div>
            
            <!-- 6. Return on Ad Spend (Radar Indicator) - Visual -->
            <div class="metric-card visual-card reveal-bottom">
              <div class="metric-horizontal">
                 <span class="label">Return on Ad Spend</span>
                 <div class="roas-indicator">
                    <span class="roas-value">4.2x</span>
                    <div class="dot-radar"></div>
                 </div>
              </div>
            </div>
          </div>
        </div>

        <!-- Social Proof Stats (Restored) -->
        <div class="stats-container reveal-bottom">
          <div class="stats-row">
            <div class="stat-block">
              <div class="stat-value">
                <app-counter [target]="200" suffix="K"></app-counter>
              </div>
              <div class="stat-label">Monthly Bills Generated</div>
            </div>
            <div class="stat-divider"></div>
            <div class="stat-block">
              <div class="stat-value">
                <app-counter [target]="30000" suffix="+"></app-counter>
              </div>
              <div class="stat-label">SKUs Tracked</div>
            </div>
            <div class="stat-divider"></div>
            <div class="stat-block">
              <div class="stat-value">
                <app-counter [target]="10" prefix="₹" suffix="Cr"></app-counter>
              </div>
              <div class="stat-label">Revenue Reconciled</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  `,
  styles: [`
    .hero {
      padding: 10rem 0 8rem; /* Added bottom padding for space to stats */
      position: relative;
      overflow: visible;
      min-height: 90vh;
      display: flex;
      align-items: center;
      background: transparent;
    }

    .hero-container {
      max-width: 1300px; /* Tightened from 1400px for better U-shape feel */
      margin: 0 auto;
      padding: 0 2rem;
      position: relative;
      z-index: 10;
    }

    .metrics-wrapper {
      display: grid;
      grid-template-columns: 300px 1fr 300px; /* Slightly narrower columns */
      grid-template-areas: 
        "left main right"
        "bottom bottom bottom";
      align-items: center;
      gap: 1.5rem; /* Tightened gap */
    }

    .hero-main {
      grid-area: main;
      text-align: center;
      z-index: 5;
      padding: 0 1.5rem;
    }

    .metrics-column {
      display: flex;
      flex-direction: column;
      gap: 2.5rem; /* Balanced gap between stacked cards */
    }

    .side-left { grid-area: left; }
    .side-right { grid-area: right; }

    .metrics-bottom {
      grid-area: bottom;
      display: flex;
      justify-content: center;
      gap: 3rem;
      margin-top: 3.5rem;
    }

    /* Headline & Typography */
    .headline {
      font-size: 5.2rem; /* Adjusted for better fit */
      line-height: 1.05;
      font-weight: 900;
      letter-spacing: -0.04em;
      margin-bottom: 2rem;
      color: var(--text-dark);
    }

    .text-gradient {
      background: var(--gradient-text);
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
      background-clip: text;
    }

    .subtext {
      font-size: 1.3rem;
      color: var(--text-medium);
      max-width: 550px;
      margin: 0 auto 3rem;
      line-height: 1.6;
    }

    .eyebrow {
      font-size: 0.8rem;
      font-weight: 700;
      letter-spacing: 0.2em;
      color: var(--primary-color);
      margin-bottom: 2rem;
      background: rgba(99, 102, 241, 0.1);
      padding: 0.5rem 1.4rem;
      border-radius: 99px;
      display: inline-block;
      border: 1px solid rgba(99, 102, 241, 0.2);
    }

    /* Metric Cards - Enhanced Contrast & Popping */
    .metric-card {
      background: rgba(255, 255, 255, 0.85); /* Slightly more opaque */
      backdrop-filter: blur(16px);
      -webkit-backdrop-filter: blur(16px);
      border-radius: 24px;
      padding: 1.5rem;
      border: 1px solid rgba(255, 255, 255, 0.6);
      /* Stronger shadow for 3D depth */
      box-shadow: 
        0 10px 40px -10px rgba(99, 102, 241, 0.1),
        0 4px 12px -2px rgba(0, 0, 0, 0.05);
      transition: all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275);
      position: relative;
    }

    .metric-card:hover {
      transform: translateY(-10px) scale(1.03);
      background: #ffffff;
      box-shadow: 
        0 25px 50px -15px rgba(99, 102, 241, 0.2),
        0 0 0 1px var(--primary-light);
    }

    /* Moving Purple Gradient Border - Visible but subtle */
    .metric-card::after {
      content: '';
      position: absolute;
      inset: -1px;
      background: linear-gradient(135deg, var(--primary-color), #a855f7, var(--primary-color));
      background-size: 400% 400%;
      z-index: -1;
      border-radius: 25px;
      opacity: 0;
      transition: 0.4s;
    }

    .metric-card:hover::after {
      opacity: 0.5;
      animation: movingGradient 4s ease infinite;
    }

    @keyframes movingGradient {
      0% { background-position: 0% 50%; }
      50% { background-position: 100% 50%; }
      100% { background-position: 0% 50%; }
    }

    .label {
      display: block;
      font-size: 0.75rem;
      text-transform: uppercase;
      font-weight: 800;
      color: var(--text-light);
      margin-bottom: 0.75rem;
      letter-spacing: 0.08em;
    }

    .value {
      font-size: 2.25rem;
      font-weight: 900;
      color: var(--text-dark);
      line-height: 1;
    }

    .value.small { font-size: 1.6rem; }

    .trend {
      font-size: 0.85rem;
      font-weight: 700;
      margin-top: 0.6rem;
      display: flex;
      align-items: center;
      gap: 0.4rem;
      color: #10b981;
    }

    /* Mini Charts - Now Vibrant and Brand-Aligned */
    .mini-chart {
      height: 55px;
      display: flex;
      align-items: flex-end;
      gap: 8px;
      padding: 5px 0;
    }

    .bar {
      flex: 1;
      background: rgba(99, 102, 241, 0.15); /* Light Indigo base */
      border-radius: 4px;
      min-height: 15%;
      transition: all 0.3s ease;
    }

    /* Gradient bars for "understandable" metrics */
    .bar:nth-child(even) { background: rgba(168, 85, 247, 0.15); }

    .metric-card:hover .bar {
      background: var(--primary-color);
      box-shadow: 0 0 8px rgba(99, 102, 241, 0.2);
    }
    .metric-card:hover .bar:nth-child(even) { background: #a855f7; }

    .sparkline { width: 100%; height: 100%; overflow: visible; }
    
    .path-glow {
      stroke-dasharray: 200;
      stroke-dashoffset: 200;
      animation: lineDraw 2.5s cubic-bezier(0.4, 0, 0.2, 1) forwards 0.5s;
      stroke: var(--primary-color); /* Explicit brand color */
      filter: drop-shadow(0 0 4px rgba(99, 102, 241, 0.3));
    }

    @keyframes lineDraw { to { stroke-dashoffset: 0; } }

    .caption {
      font-size: 0.85rem;
      font-weight: 700;
      color: var(--text-medium);
      margin-top: 0.75rem;
      display: block;
    }

    .roas-indicator {
      display: flex;
      align-items: center;
      gap: 1rem;
    }

    .roas-value {
      font-size: 1.6rem;
      font-weight: 900;
      color: #a855f7;
    }

    .dot-radar {
      width: 10px;
      height: 10px;
      background: #a855f7;
      border-radius: 50%;
      position: relative;
    }

    .dot-radar::after {
      content: '';
      position: absolute;
      top: 50%; left: 50%;
      width: 100%; height: 100%;
      border: 2px solid #a855f7;
      border-radius: 50%;
      transform: translate(-50%, -50%);
      animation: radar 2.5s infinite;
    }

    @keyframes radar {
      0% { width: 100%; height: 100%; opacity: 1; }
      100% { width: 400%; height: 400%; opacity: 0; }
    }

    /* Horizontal Metric card style */
    .metric-horizontal {
      display: flex;
      justify-content: space-between;
      align-items: center;
      gap: 2rem;
    }

    /* animations for entrance */
    .reveal-left { animation: revealLeft 1.2s cubic-bezier(0.16, 1, 0.3, 1) both; }
    .reveal-right { animation: revealRight 1.2s cubic-bezier(0.16, 1, 0.3, 1) both; }
    .reveal-bottom { animation: revealBottom 1.2s cubic-bezier(0.16, 1, 0.3, 1) both; }

    @keyframes revealLeft { from { opacity: 0; transform: translateX(-50px); } to { opacity: 1; transform: translateX(0); } }
    @keyframes revealRight { from { opacity: 0; transform: translateX(50px); } to { opacity: 1; transform: translateX(0); } }
    @keyframes revealBottom { from { opacity: 0; transform: translateY(50px); } to { opacity: 1; transform: translateY(0); } }

    .cta-group {
      display: flex;
      justify-content: center;
      gap: 1.8rem;
    }

    .btn {
       padding: 1.1rem 2.4rem;
       border-radius: 12px;
       font-weight: 700;
       text-decoration: none;
       transition: all 0.3s;
       font-size: 1.05rem;
    }

    .btn-primary {
       background: var(--text-dark);
       color: white;
       box-shadow: 0 10px 30px rgba(15, 23, 42, 0.2);
       &:hover { transform: translateY(-4px); box-shadow: 0 15px 40px rgba(15, 23, 42, 0.3); }
    }

    .btn-outline {
       border: 1px solid var(--border-color);
       color: var(--text-dark);
       background: rgba(255, 255, 255, 0.6);
       backdrop-filter: blur(8px);
       &:hover { background: #ffffff; border-color: var(--primary-color); transform: translateY(-4px); }
    }

    /* Mobile handling */
    @media (max-width: 1250px) {
      .hero { padding: 6rem 0; height: auto; }
      .metrics-wrapper {
        grid-template-columns: 1fr;
        grid-template-areas: "main" "left" "right" "bottom";
        gap: 3rem;
      }
      .headline { font-size: 3.8rem; }
      .metrics-column { flex-direction: row; flex-wrap: wrap; justify-content: center; }
      .metrics-bottom { flex-wrap: wrap; gap: 2rem; }
    }
  `]
})
export class HeroComponent { }
