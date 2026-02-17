import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-privacy-section',
  standalone: true,
  imports: [CommonModule],
  template: `
    <section class="privacy-section">
      <!-- Identity Layer: Ghost Dots -->
      <div class="ghost-grid"></div>
      
      <div class="container relative z-10">
        <div class="privacy-layout">
          <!-- Left: Brand Trust Statement -->
          <div class="trust-statement">
            <div class="trust-eyebrow">SECURITY & TRUST</div>
            <h2 class="trust-headline">Enterprise-Grade Data Privacy & Control.</h2>
            <p class="trust-subtext">
              Your financial data, customer records, and operational flows are protected 
              by a layered, auditable security architecture that scales with your growth.
            </p>
            <div class="trust-badges">
              <div class="badge-item">
                <svg viewBox="0 0 24 24" fill="none" class="badge-icon">
                  <path d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z" fill="var(--primary-color)" fill-opacity="0.1"/>
                  <path d="M7 13L10 16L17 9" stroke="var(--primary-color)" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>
                <span>Bank-Level Encryption</span>
              </div>
            </div>
          </div>

          <!-- Right: Pillar Grid -->
          <div class="pillars-container">
            <div class="pillars-grid">
              <!-- Pillar 1 -->
              <div class="pillar-glass-card">
                <div class="pillar-head">
                  <div class="pillar-icon-box">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor">
                      <path d="M9 12L11 14L15 10M21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12Z" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                    </svg>
                  </div>
                  <h3 class="pillar-title">SOC 2 Type II Ready</h3>
                </div>
                <p class="pillar-desc">Independent controls aligned with global enterprise compliance standards.</p>
              </div>

              <!-- Pillar 2 -->
              <div class="pillar-glass-card">
                <div class="pillar-head">
                  <div class="pillar-icon-box">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor">
                      <path d="M17 21V19C17 17.8954 16.1046 17 15 17H9C7.89543 17 7 17.8954 7 19V21M12 14C14.2091 14 16 12.2091 16 10C16 7.79086 14.2091 6 12 6C9.79086 6 8 7.79086 8 10C8 12.2091 9.79086 14 12 14Z" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                    </svg>
                  </div>
                  <h3 class="pillar-title">RBAC Access</h3>
                </div>
                <p class="pillar-desc">Granular permissioning across stores, roles, and complex departments.</p>
              </div>

              <!-- Pillar 3 -->
              <div class="pillar-glass-card">
                <div class="pillar-head">
                  <div class="pillar-icon-box">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor">
                      <rect x="3" y="11" width="18" height="11" rx="2" ry="2" stroke-width="2"/>
                      <path d="M7 11V7a5 5 0 0110 0v4" stroke-width="2"/>
                    </svg>
                  </div>
                  <h3 class="pillar-title">E2E Encryption</h3>
                </div>
                <p class="pillar-desc">All financial and transactional data encrypted at rest and in transit.</p>
              </div>

              <!-- Pillar 4 -->
              <div class="pillar-glass-card">
                <div class="pillar-head">
                  <div class="pillar-icon-box">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor">
                      <path d="M21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12Z" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                      <path d="M12 3V21M3.6 9H20.4M3.6 15H20.4" stroke-width="1.5"/>
                    </svg>
                  </div>
                  <h3 class="pillar-title">Data Residency</h3>
                </div>
                <p class="pillar-desc">Hosted with regional compliance alignment and full failure redundancy.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  `,
  styles: [`
    .privacy-section {
      padding: 10rem 0;
      position: relative;
      background: radial-gradient(circle at center, hsl(230, 100%, 98%) 0%, hsl(260, 100%, 98%) 100%);
      overflow: hidden;
    }

    .ghost-grid {
      position: absolute; top: 0; left: 0; width: 100%; height: 100%;
      background-image: radial-gradient(var(--primary-color) 1.2px, transparent 1.2px);
      background-size: 80px 80px; opacity: 0.06; pointer-events: none;
    }

    .privacy-layout {
      display: grid;
      grid-template-columns: 1fr 1fr;
      gap: 6rem;
      align-items: center;
    }

    .trust-statement { max-width: 520px; }

    .trust-eyebrow {
      font-size: 0.85rem; font-weight: 800; letter-spacing: 0.2em;
      color: var(--primary-color); margin-bottom: 1.5rem;
    }

    .trust-headline {
      font-size: 2.75rem; font-weight: 900; color: #0f172a;
      line-height: 1.15; margin-bottom: 1.5rem; letter-spacing: -0.03em;
    }

    .trust-subtext {
      font-size: 1.15rem; color: #475569; line-height: 1.6;
      margin-bottom: 3rem; font-weight: 500;
    }

    .badge-item {
      display: inline-flex; align-items: center; gap: 0.75rem;
      padding: 0.6rem 1.2rem; background: #ffffff;
      border-radius: 99px; border: 1px solid rgba(0,0,0,0.05);
      font-size: 0.9rem; font-weight: 700; color: #1e293b;
      box-shadow: 0 4px 12px rgba(0,0,0,0.02);
    }
    .badge-icon { width: 18px; height: 18px; }

    .pillars-grid {
      display: grid; grid-template-columns: 1fr 1fr; gap: 1.5rem;
    }

    .pillar-glass-card {
      background: rgba(255, 255, 255, 0.6); backdrop-filter: blur(20px);
      border: 1px solid rgba(255, 255, 255, 0.7); border-radius: 20px;
      padding: 1.75rem; transition: all 0.3s cubic-bezier(0.16, 1, 0.3, 1);
    }

    .pillar-glass-card:hover {
      background: #ffffff; transform: translateY(-4px);
      box-shadow: 0 20px 40px rgba(15, 23, 42, 0.05);
      border-color: var(--primary-light);
    }

    .pillar-head { display: flex; align-items: center; gap: 1rem; margin-bottom: 1rem; }

    .pillar-icon-box {
      width: 38px; height: 38px; background: rgba(99, 102, 241, 0.08);
      border-radius: 10px; display: flex; align-items: center; justify-content: center;
      color: var(--primary-color); flex-shrink: 0;
    }
    .pillar-icon-box svg { width: 20px; height: 20px; }

    .pillar-title { font-weight: 800; color: #1e293b; font-size: 1rem; margin: 0; }
    .pillar-desc { font-size: 0.9rem; color: #64748b; line-height: 1.5; font-weight: 500; margin: 0; }

    @media (max-width: 1024px) {
      .privacy-layout { grid-template-columns: 1fr; gap: 4rem; text-align: center; justify-items: center; }
      .trust-headline { font-size: 2.25rem; }
      .trust-subtext { margin: 0 auto 3rem; }
    }

    @media (max-width: 640px) {
      .pillars-grid { grid-template-columns: 1fr; }
      .privacy-section { padding: 6rem 0; }
    }
  `]
})
export class PrivacySectionComponent { }
