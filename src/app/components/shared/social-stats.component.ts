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
      padding: 6rem 0;
      display: flex;
      justify-content: center;
      position: relative;
      z-index: 5;
    }

    .stats-row {
      display: flex;
      align-items: center;
      gap: 4rem;
      padding: 2.5rem 5rem;
      background: rgba(255, 255, 255, 0.6);
      backdrop-filter: blur(12px);
      border-radius: 40px;
      border: 1px solid rgba(255, 255, 255, 0.5);
      box-shadow: 
        0 20px 50px -10px rgba(99, 102, 241, 0.1),
        0 4px 12px rgba(0,0,0,0.03);
    }

    .stat-block {
      text-align: center;
    }

    .stat-value {
      font-size: 3rem;
      font-weight: 900;
      color: var(--primary-color);
      line-height: 1;
      margin-bottom: 0.75rem;
      letter-spacing: -0.02em;
    }

    .stat-label {
      font-size: 0.85rem;
      font-weight: 800;
      color: var(--text-light);
      text-transform: uppercase;
      letter-spacing: 0.1em;
      white-space: nowrap;
    }

    .stat-divider {
      width: 1px;
      height: 60px;
      background: linear-gradient(to bottom, transparent, var(--border-color), transparent);
    }

    @media (max-width: 992px) {
      .stats-row {
        flex-direction: column;
        gap: 3rem;
        padding: 3rem;
      }
      .stat-divider {
        width: 60px;
        height: 1px;
        background: linear-gradient(to right, transparent, var(--border-color), transparent);
      }
    }
  `]
})
export class SocialStatsComponent { }
