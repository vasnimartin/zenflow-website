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
          
          <!-- Left Side Metrics -->
          <div class="metrics-column side-left">
            <div class="metric-card numeric-card reveal-left">
              <span class="label">Live Store Sales</span>
              <div class="value">
                <app-counter [target]="124500" prefix="₹"></app-counter>
              </div>
              <span class="trend up">↑ 12%</span>
            </div>

            <div class="metric-card visual-card reveal-left">
              <span class="label">Inventory Health</span>
              <div class="mini-chart bar-chart">
                <div class="bar" style="height: 60%"></div>
                <div class="bar" style="height: 85%"></div>
                <div class="bar" style="height: 45%"></div>
                <div class="bar" style="height: 70%"></div>
              </div>
              <span class="caption">94% Optimal</span>
            </div>
          </div>

          <!-- Central Hero Content -->
          <div class="hero-main">
            <div class="eyebrow">ENTERPRISE RETAIL OS</div>
            <h1 class="headline">
              Powering the future of <span class="text-gradient-indigo">Retail operations</span>
            </h1>
            <p class="subtext">
              The only platform you need to scale your business. 
              Billing, Inventory, and Accounting, unified in one premium experience.
            </p>
            <div class="cta-group">
              <a routerLink="/contact" class="btn btn-primary">Get Started</a>
              <a routerLink="/pricing" class="btn btn-outline">View Pricing</a>
            </div>
          </div>

          <!-- Right Side Metrics -->
          <div class="metrics-column side-right">
            <div class="metric-card numeric-card reveal-right">
              <span class="label">Active Orders</span>
              <div class="value">
                <app-counter [target]="840" suffix="+"></app-counter>
              </div>
              <span class="trend up">↑ 8% Today</span>
            </div>

            <div class="metric-card visual-card reveal-right">
              <span class="label">Revenue Growth</span>
              <div class="mini-chart line-chart">
                <svg viewBox="0 0 100 40" class="sparkline">
                   <path d="M0 35 Q 25 30, 40 10 T 80 5 T 100 20" fill="none" class="path-glow" stroke="url(#lineGradient)" stroke-width="3" />
                   <defs>
                     <linearGradient id="lineGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                       <stop offset="0%" style="stop-color:var(--primary-light);stop-opacity:1" />
                       <stop offset="100%" style="stop-color:var(--primary-color);stop-opacity:1" />
                     </linearGradient>
                   </defs>
                </svg>
              </div>
              <span class="caption">₹ 14.2M MTD</span>
            </div>
          </div>

          <!-- Bottom Metrics (Completing the U) -->
          <div class="metrics-bottom">
            <div class="metric-card numeric-card reveal-bottom">
              <div class="metric-horizontal">
                <span class="label">Avg Order Value</span>
                <div class="value small">
                  <app-counter [target]="2450" prefix="₹"></app-counter>
                </div>
              </div>
            </div>
            <div class="metric-card numeric-card reveal-bottom">
              <div class="metric-horizontal">
                <span class="label">Customer Happiness</span>
                <div class="value small">
                  <app-counter [target]="98" suffix="%"></app-counter>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  `,
  styles: [`
    .hero {
      padding: 10rem 0 8rem;
      position: relative;
      overflow: hidden;
      min-height: 100vh;
      display: flex;
      align-items: center;
      background: radial-gradient(circle at 50% 100%, rgba(99, 102, 241, 0.05) 0%, transparent 50%);
    }

    .hero-container {
      max-width: 1400px; /* Wider for U-shape */
      margin: 0 auto;
      padding: 0 2rem;
    }

    .metrics-wrapper {
      display: grid;
      grid-template-columns: 280px 1fr 280px;
      grid-template-areas: 
        "left main right"
        "bottom bottom bottom";
      align-items: center;
      gap: 2rem;
    }

    .hero-main {
      grid-area: main;
      text-align: center;
      z-index: 5;
    }

    .metrics-column {
      display: flex;
      flex-direction: column;
      gap: 2rem;
    }

    .side-left { grid-area: left; }
    .side-right { grid-area: right; }

    .metrics-bottom {
      grid-area: bottom;
      display: flex;
      justify-content: center;
      gap: 2rem;
      margin-top: 3rem;
    }

    /* Headline & Typography */
    .headline {
      font-size: 5rem;
      line-height: 1.05;
      font-weight: 850;
      letter-spacing: -0.04em;
      margin-bottom: 2rem;
      color: var(--text-dark);
    }

    .text-gradient-indigo {
      background: linear-gradient(135deg, var(--primary-color) 0%, #8b5cf6 100%);
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
      background-clip: text;
    }

    .subtext {
      font-size: 1.4rem;
      color: var(--text-medium);
      max-width: 600px;
      margin: 0 auto 3rem;
      line-height: 1.6;
    }

    .eyebrow {
      font-size: 0.9rem;
      font-weight: 700;
      letter-spacing: 0.1em;
      color: var(--primary-color);
      margin-bottom: 1.5rem;
      background: rgba(99, 102, 241, 0.08);
      padding: 0.5rem 1.25rem;
      border-radius: 99px;
      display: inline-block;
    }

    /* Metric Cards */
    .metric-card {
      background: rgba(255, 255, 255, 0.8);
      backdrop-filter: blur(16px);
      border-radius: 20px;
      padding: 1.5rem;
      border: 1px solid rgba(255, 255, 255, 0.5);
      box-shadow: 0 20px 40px rgba(0, 0, 0, 0.03);
      transition: all 0.4s cubic-bezier(0.2, 0.8, 0.2, 1);
      position: relative;
      overflow: hidden;
    }

    .metric-card:hover {
      transform: translateY(-8px) scale(1.02);
      box-shadow: 0 30px 60px rgba(99, 102, 241, 0.1);
      border-color: rgba(99, 102, 241, 0.3);
    }

    .metric-card::after {
      content: '';
      position: absolute;
      top: 0; left: -100%;
      width: 100%; height: 100%;
      background: linear-gradient(90deg, transparent, rgba(255,255,255,0.4), transparent);
      transition: 0.5s;
    }
    .metric-card:hover::after {
      left: 100%;
    }

    .label {
      display: block;
      font-size: 0.85rem;
      text-transform: uppercase;
      font-weight: 700;
      color: var(--text-light);
      margin-bottom: 0.75rem;
      letter-spacing: 0.05em;
    }

    .value {
      font-size: 2.25rem;
      font-weight: 800;
      color: var(--primary-color);
      line-height: 1.2;
    }

    .value.small { font-size: 1.5rem; }

    .trend {
      font-size: 0.8rem;
      font-weight: 700;
      margin-top: 0.5rem;
      display: block;
    }
    .trend.up { color: #10b981; }

    /* Mini Charts */
    .mini-chart {
      height: 60px;
      display: flex;
      align-items: flex-end;
      gap: 6px;
      padding: 5px 0;
    }

    .bar {
      flex: 1;
      background: var(--primary-light);
      border-radius: 4px;
      min-height: 10%;
      animation: barGrow 1.5s ease-out forwards;
      transform-origin: bottom;
      opacity: 0.7;
    }

    @keyframes barGrow {
      from { transform: scaleY(0); }
      to { transform: scaleY(1); }
    }

    .sparkline {
      width: 100%;
      height: 100%;
    }
    
    .path-glow {
      filter: drop-shadow(0 0 4px rgba(99, 102, 241, 0.4));
      stroke-dasharray: 200;
      stroke-dashoffset: 200;
      animation: lineDraw 2s ease-out forwards 0.5s;
    }

    @keyframes lineDraw {
      to { stroke-dashoffset: 0; }
    }

    .caption {
      font-size: 0.8rem;
      font-weight: 600;
      color: var(--text-medium);
      margin-top: 0.5rem;
      display: block;
    }

    /* Horizontal Metric card style */
    .metric-horizontal {
      display: flex;
      justify-content: space-between;
      align-items: center;
      gap: 2rem;
    }

    /* animations for entrance */
    .reveal-left { animation: revealLeft 1s cubic-bezier(0.2, 0.8, 0.2, 1) both; }
    .reveal-right { animation: revealRight 1s cubic-bezier(0.2, 0.8, 0.2, 1) both; }
    .reveal-bottom { animation: revealBottom 1s cubic-bezier(0.2, 0.8, 0.2, 1) both; }

    @keyframes revealLeft { from { opacity: 0; transform: translateX(-40px); } to { opacity: 1; transform: translateX(0); } }
    @keyframes revealRight { from { opacity: 0; transform: translateX(40px); } to { opacity: 1; transform: translateX(0); } }
    @keyframes revealBottom { from { opacity: 0; transform: translateY(40px); } to { opacity: 1; transform: translateY(0); } }

    /* Mobile handling */
    @media (max-width: 1100px) {
      .hero { padding-top: 8rem; }
      .metrics-wrapper {
        grid-template-columns: 1fr;
        grid-template-areas: 
          "main"
          "left"
          "right"
          "bottom";
      }
      .headline { font-size: 3.5rem; }
      .metrics-column { flex-direction: row; flex-wrap: wrap; justify-content: center; }
      .metrics-column .metric-card { width: 280px; }
      .metrics-bottom { flex-wrap: wrap; }
    }
  `]
})
export class HeroComponent {}
