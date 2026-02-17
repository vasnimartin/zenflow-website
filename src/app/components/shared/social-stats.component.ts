import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CounterComponent } from './counter.component';

@Component({
  selector: 'app-social-stats',
  standalone: true,
  imports: [CommonModule, CounterComponent],
  template: `
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
  `,
  styles: [`
    .stats-container {
      padding: 10rem 0;
      display: flex;
      justify-content: center;
      position: relative;
      background: radial-gradient(circle at center, rgba(99, 102, 241, 0.03) 0%, transparent 70%);
      z-index: 5;
    }

    /* Grid Overlay for Section 2 */
    .stats-container::before {
      content: '';
      position: absolute;
      inset: 0;
      background-image: 
        linear-gradient(rgba(99, 102, 241, 0.05) 1px, transparent 1px),
        linear-gradient(90deg, rgba(99, 102, 241, 0.05) 1px, transparent 1px);
      background-size: 60px 60px;
      mask-image: radial-gradient(circle at center, black 30%, transparent 80%);
      z-index: -1;
    }

    .stats-row {
      display: flex;
      align-items: center;
      gap: 4rem;
      padding: 3rem 6rem;
      background: white;
      border-radius: 100px; /* Pill shape */
      border: 1px solid rgba(0, 0, 0, 0.03);
      box-shadow: 
        0 40px 100px -20px rgba(0, 0, 0, 0.08),
        0 4px 20px rgba(0, 0, 0, 0.02);
    }

    .stat-block {
      text-align: center;
      min-width: 200px;
    }

    .stat-value {
      font-size: 4rem;
      font-weight: 950;
      color: #5b5ff7; /* High-impact blue/indigo from reference */
      line-height: 1;
      margin-bottom: 0.75rem;
      letter-spacing: -0.04em;
    }

    .stat-label {
      font-size: 0.75rem;
      font-weight: 900;
      color: #94a3b8; /* Slate gray labels */
      text-transform: uppercase;
      letter-spacing: 0.15em;
      white-space: nowrap;
    }

    .stat-divider {
      width: 1px;
      height: 60px;
      background: rgba(0, 0, 0, 0.05); /* Faint divider from image */
    }

    @media (max-width: 1100px) {
      .stats-row {
        flex-direction: column;
        gap: 4rem;
        padding: 4rem;
        border-radius: 40px;
      }
      .stat-divider {
        width: 100px;
        height: 1px;
      }
    }
  `]
})
export class SocialStatsComponent { }
