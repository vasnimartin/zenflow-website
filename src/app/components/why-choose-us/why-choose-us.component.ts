import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-why-choose-us',
  standalone: true,
  imports: [CommonModule],
  template: `
    <section class="why-us-section">
      <div class="container">
        <!-- Human-Centric Header -->
        <div class="section-header">
          <div class="section-label">WHY OUR CUSTOMERS CHOOSE ZENFLOW</div>
          <h2 class="headline">Designed for Those Who <br>Refuse to Outgrow Their Software.</h2>
          <p class="subtext">
            Power without complexity — built for modern retail growth.
          </p>
        </div>

        <!-- Asymmetric Bento Grid -->
        <div class="bento-grid">
          
          <!-- Featured Pillar 1: UX (Smartphone Simplicity) -->
          <!-- Spans 2 columns to highlight Emotional Hook -->
          <div class="bento-card featured-card">
            <div class="card-content">
              <div class="icon-box featured-icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor">
                  <rect x="5" y="2" width="14" height="20" rx="2" ry="2" stroke-width="2"/>
                  <path d="M12 18h.01" stroke-width="2" stroke-linecap="round"/>
                </svg>
              </div>
              <div class="text-group">
                <h3>Zero-Training Interface</h3>
                <p>Forget complex manuals. Your staff can start billing in minutes with a design that feels as simple as a smartphone app.</p>
              </div>
            </div>
            <div class="visual-hint"></div>
          </div>

          <!-- Pillar 2: Pricing -->
          <div class="bento-card">
            <div class="icon-box">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor">
                <path d="M12 1v22M17 5H9.5a3.5 3.5 0 000 7h5a3.5 3.5 0 010 7H6" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
              </svg>
            </div>
            <h3>Transparent Pricing</h3>
            <p>No hidden fees. Usage-based pricing that scales only when you do.</p>
          </div>

          <!-- Pillar 3: Control -->
          <div class="bento-card">
            <div class="icon-box">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor">
                <rect x="2" y="3" width="20" height="14" rx="2" ry="2" stroke-width="2"/>
                <path d="M8 21h8M12 17v4" stroke-width="2" stroke-linecap="round"/>
              </svg>
            </div>
            <h3>Unified Commerce Control</h3>
            <p>Manage billing, inventory, and accounting from one single, calm dashboard.</p>
          </div>

          <!-- Pillar 4: Human Support -->
          <div class="bento-card">
            <div class="icon-box">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor">
                <path d="M20 21v-2a4 4 0 00-3-3.87M4 21v-2a4 4 0 013-3.87M12 11a4 4 0 100-8 4 4 0 000 8z" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
              </svg>
            </div>
            <h3>World-Class Support</h3>
            <p>Direct access to a dedicated retail expert who understands your margins.</p>
          </div>

        </div>
      </div>
    </section>
  `,
  styles: [`
    .why-us-section {
      padding: 10rem 0;
      background: #ffffff;
      position: relative;
    }

    .section-header {
      max-width: 720px;
      margin-bottom: 5rem; /* Reduced from 6rem */
    }

    .section-label {
      font-size: 0.85rem;
      font-weight: 800;
      color: var(--primary-color);
      letter-spacing: 0.2em;
      margin-bottom: 2rem;
      text-transform: uppercase;
    }

    .headline {
      font-size: 3.5rem;
      font-weight: 950;
      color: #0f172a;
      line-height: 1.1;
      margin-bottom: 1.5rem;
      letter-spacing: -0.04em;
    }

    .subtext {
      font-size: 1.25rem;
      color: #475569;
      line-height: 1.6;
      font-weight: 500;
      max-width: 600px;
    }

    /* Asymmetric Bento Grid */
    .bento-grid {
      display: grid;
      grid-template-columns: 1.4fr 1fr 1fr; /* Asymmetric balance */
      grid-template-rows: auto auto;
      gap: 2rem;
    }

    /* Featured Card - Spans 2 columns */
    .featured-card {
      grid-column: span 1;
      grid-row: span 2;
      display: flex;
      flex-direction: column;
      justify-content: center;
      background: #ffffff !important;
    }

    .bento-card {
      padding: 2.5rem;
      background: #ffffff;
      border: 1px solid #e2e8f0; /* Soft border */
      border-radius: 24px;
      transition: all 0.3s cubic-bezier(0.16, 1, 0.3, 1);
      display: flex;
      flex-direction: column;
      gap: 1.25rem;
      box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.02), 0 2px 4px -1px rgba(0, 0, 0, 0.02); /* Subtle functional shadow */
    }

    .bento-card:hover {
      transform: translateY(-4px);
      box-shadow: 0 20px 40px -10px rgba(15, 23, 42, 0.08); /* Lift on hover */
      border-color: var(--primary-light);
    }

    /* Featured Card Styling */
    .featured-card .card-content {
      position: relative;
      z-index: 2;
      height: 100%;
      display: flex;
      flex-direction: column;
      justify-content: center;
    }
    
    .featured-card h3 { font-size: 2rem; margin-bottom: 1rem; }
    .featured-card p { font-size: 1.15rem; max-width: 400px; }

    /* Standard Card Styling */
    .bento-card h3 {
      font-size: 1.25rem;
      font-weight: 800;
      color: #0f172a;
      margin: 0;
      letter-spacing: -0.01em;
    }

    .bento-card p {
      font-size: 1rem;
      color: #64748b;
      line-height: 1.5;
      margin: 0;
      font-weight: 500;
    }

    .icon-box {
      width: 48px;
      height: 48px;
      background: #f1f5f9; /* Very subtle grey for icon bg */
      border-radius: 12px;
      display: flex;
      align-items: center;
      justify-content: center;
      color: #334155;
      margin-bottom: 0.5rem;
      transition: all 0.3s ease;
    }

    .featured-icon {
      width: 64px; height: 64px;
      background: #eff6ff;
      color: var(--primary-color);
      margin-bottom: 1.5rem;
    }

    .icon-box svg { width: 24px; height: 24px; }
    .featured-icon svg { width: 32px; height: 32px; }

    .bento-card:hover .icon-box {
      background: var(--primary-color);
      color: white;
    }

    @media (max-width: 1024px) {
      .bento-grid {
        grid-template-columns: 1fr 1fr;
        grid-template-rows: auto; 
      }
      .featured-card { grid-column: span 2; grid-row: span 1; flex-direction: row; align-items: center; gap: 2rem; }
      .featured-card .card-content { display: block; }
    }

    @media (max-width: 768px) {
      .bento-grid { grid-template-columns: 1fr; }
      .featured-card { grid-column: span 1; flex-direction: column; align-items: flex-start; }
      .headline { font-size: 2.5rem; }
      .section-header { margin-bottom: 3rem; }
    }
  `]
})
export class WhyChooseUsComponent { }
