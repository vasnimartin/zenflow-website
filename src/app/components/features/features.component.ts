import { Component } from '@angular/core';
import { CommonModule } from '@angular/common'; // Import CommonModule if needed, usually directive is standalone
import { AccountingChartComponent } from './accounting-chart.component';
import { ScrollRevealDirective } from '../../directives/scroll-reveal.directive';

@Component({
  selector: 'app-features',
  standalone: true,
  imports: [AccountingChartComponent, ScrollRevealDirective],
  template: `
    <section class="features">
      <!-- Narrative Process Line (Central Spine) -->
      <div class="process-line"></div>

      <!-- Row 1: Billing -->
      <div class="feature-row" appScrollReveal>
        <div class="container grid-2-col">
          <div class="step-indicator">01</div>
          <div class="text-content">
            <h2 class="text-gradient">Billing (POS)</h2>
            <h3>Lightning fast billing for In-Store and Online orders.</h3>
            <ul class="sophisticated-list">
              <li>Faster Billing, multiple GST rates in same bill</li>
              <li>Customize offers & discounts, loyalty points</li>
              <li>AI-Auto reconcile payments (UPI, Cards, Cash)</li>
              <li>Zero Training Required</li>
            </ul>
          </div>
          <div class="visual-content glass-mockup antigravity">
            <div class="pos-terminal">
              <div class="pos-header">
                <span>ORDER #2045</span>
                <span>Just Now</span>
              </div>
              <div class="pos-items">
                <div class="pos-item">
                  <span>Nike Air Jordan</span>
                  <span>₹ 12,500</span>
                </div>
                <div class="pos-item">
                  <span>Cotton Socks (x2)</span>
                  <span>₹ 998</span>
                </div>
                <div class="pos-item">
                  <span>GST (18%)</span>
                  <span>₹ 2,430</span>
                </div>
              </div>
              <div class="pos-total">
                <span>TOTAL</span>
                <span>₹ 15,928</span>
              </div>
              <div class="success-badge">
                <span style="margin-right:0.5rem">✓</span> PAID
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- Row 2: Inventory -->
      <div class="feature-row" appScrollReveal>
        <div class="container grid-2-col swap-desktop">
          <div class="step-indicator right-side">02</div>
          <div class="text-content">
            <h2 class="text-gradient">Inventory</h2>
            <h3>Real Time stock visibility. Track everything from expiry to batch.</h3>
            <ul class="sophisticated-list">
              <li>Real Time stock visibility across all stores</li>
              <li>Unlock cash trapped as stock: MBQs & reorder levels</li>
              <li>1-click reorder suggestions and PO generation</li>
              <li>No more lost sales due to "out-of stock"</li>
            </ul>
          </div>
          <div class="visual-content glass-mockup antigravity">
             <div class="inventory-tracker">
               <div class="inventory-header">
                 <span>WAREHOUSE A</span>
                 <span style="display:flex; align-items:center; gap:4px">
                   <span style="width:6px; height:6px; background:#10b981; border-radius:50%; animation: pulse-green 2s infinite"></span> 
                   Live
                 </span>
               </div>
               <div class="stock-item">
                 <div class="stock-info">
                   <span>Cotton T-Shirts</span>
                   <span>850 units</span>
                 </div>
                 <div class="stock-bar"><div class="stock-level" style="--target-width: 85%"></div></div>
               </div>
               <div class="stock-item">
                 <div class="stock-info">
                   <span>Denim Jeans</span>
                   <span>650 units</span>
                 </div>
                 <div class="stock-bar"><div class="stock-level" style="--target-width: 65%"></div></div>
               </div>
               <div class="stock-item">
                 <div class="stock-info">
                   <span>Slim Fit Chinos</span>
                   <span style="color:#f43f5e">15 units <span class="low-stock-alert">Low Stock</span></span>
                 </div>
                 <div class="stock-bar"><div class="stock-level" style="--target-width: 15%"></div></div>
               </div>
             </div>
          </div>
        </div>
      </div>

      <!-- Row 3: Accounting -->
      <div class="feature-row" appScrollReveal>
        <div class="container grid-2-col">
          <div class="step-indicator">03</div>
          <div class="text-content">
            <h2 class="text-gradient">Accounting</h2>
            <h3>Auto-Post journal entries. Save 10+hrs/week.</h3>
            <ul class="sophisticated-list">
              <li>Store wise Daily Sales Reports fully reconciled</li>
              <li>Auto-Post journal entries for every sale & expense</li>
              <li>Real-time Balance Sheet, P&L, cashflow & GST reports</li>
              <li>Instant insight into any financial metric</li>
            </ul>
          </div>
          <div class="visual-content glass-mockup antigravity">
            <div style="width: 100%; padding: 2rem;">
              <app-accounting-chart />
            </div>
          </div>
        </div>
      </div>
      
    </section>
  `,
  styles: [`
    .features { 
      padding: 4rem 0;
      position: relative;
    }
    
    /* The Central Connective Spine */
    .process-line {
      position: absolute;
      top: 0;
      bottom: 0;
      left: 50%;
      width: 1px;
      /* Subtle gradient line fading out at ends */
      background: linear-gradient(to bottom, 
        transparent, 
        rgba(99, 102, 241, 0.3) 20%, 
        rgba(99, 102, 241, 0.3) 80%, 
        transparent
      );
      transform: translateX(-50%);
      z-index: 0;
    }

    .feature-row { padding: 4rem 0; position: relative; z-index: 1; }
    
    .grid-2-col { position: relative; }

    /* Step Indicators (01, 02, 03) - Floating Narrative Anchors */
    .step-indicator {
      position: absolute;
      left: 50%;
      top: 0;
      transform: translateX(-50%);
      
      font-size: 8rem; /* Massive transparent numbers */
      font-weight: 900;
      color: rgba(99, 102, 241, 0.03); /* Barely visible */
      line-height: 1;
      font-family: 'Inter', sans-serif;
      z-index: -1;
      pointer-events: none;
    }

    /* Refined Mobile */
    @media (max-width: 992px) {
      .process-line { display: none; /* Hide confusing line on mobile */ }
      .step-indicator {
        left: 2rem;
        top: -1rem;
        transform: none;
        font-size: 5rem;
      }
    }
    
    .mock-widget { text-align: center; padding: 2rem; }
  `]
})
export class FeaturesComponent {}
