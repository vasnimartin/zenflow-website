import { Component, OnInit, OnDestroy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { AccountingChartComponent } from './accounting-chart.component';
import { ScrollRevealDirective } from '../../directives/scroll-reveal.directive';

interface HubTab {
  id: string;
  title: string;
  benefit: string;
  headline: string;
  subtext: string;
  features: { title: string; desc: string }[];
  visualType: 'pos' | 'inventory' | 'accounting' | 'omnichannel';
}

@Component({
  selector: 'app-solution-hub',
  standalone: true,
  imports: [CommonModule, AccountingChartComponent, RouterLink, ScrollRevealDirective],
  template: `
    <section class="solution-hub">
      <div class="container relative">
        <!-- Tab Grid (Zenflow Hybrid Style) -->
        <div class="tab-grid">
          <div 
            *ngFor="let tab of tabs; let i = index" 
            class="tab-card glass-tab" 
            [class.active]="activeTab.id === tab.id"
            [class]="'stagger-' + (i + 1)"
            appScrollReveal
            (click)="onTabClick(tab)"
          >
            <div class="tab-info">
              <div class="tab-title">{{ tab.title }}</div>
              <div class="tab-benefit">{{ tab.benefit }}</div>
            </div>
          </div>
        </div>

        <!-- Integrated Feature Viewport -->
        <div class="hub-viewport glass-card-main" appScrollReveal>
          <!-- Moving Gradient Background Element for Hub -->
          <div class="hub-visual-glow"></div>
          
          <div class="hub-content" [class.fade-in]="isAnimating">
            <!-- Left Side: Strategic Narratives -->
            <div class="text-side">
              <h2 class="text-gradient-premium">{{ activeTab.headline }}</h2>
              <p class="hub-subheading">{{ activeTab.subtext }}</p>
              
              <ul class="sophisticated-list">
                <li *ngFor="let feat of activeTab.features">
                  <div class="feat-icon">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3">
                      <path d="M20 6L9 17L4 12" stroke-linecap="round" stroke-linejoin="round"/>
                    </svg>
                  </div>
                  <div>
                    <strong>{{ feat.title }}:</strong>
                    <span> {{ feat.desc }}</span>
                  </div>
                </li>
              </ul>
              
              <a [routerLink]="['/' + activeTab.id]" class="btn btn-primary glass-btn">
                Get Started with {{ activeTab.title }} &rarr;
              </a>
            </div>

            <!-- Right Side: High-Fidelity Technical Visualization -->
            <div class="visual-side">
              <div class="visual-container glass-surface">
                <div class="hud-corner top-left"></div>
                <div class="hud-corner bottom-right"></div>
                
                <ng-container [ngSwitch]="activeTab.visualType">
                  <!-- Specialized POS Visual -->
                  <div class="pos-terminal" *ngSwitchCase="'pos'">
                    <div class="pos-header">
                      <span>TERMINAL: ZEN-01</span>
                      <span>LIVE</span>
                    </div>
                    <div class="pos-item"><span>Elite SKU-44</span><span>₹ 12,500</span></div>
                    <div class="pos-item"><span>GST (18%)</span><span>₹ 2,250</span></div>
                    <div class="pos-total"><span>TOTAL</span><span>₹ 14,750</span></div>
                    <div class="success-badge">PAYMENT RECONCILED</div>
                  </div>

                  <!-- Specialized Inventory Visual -->
                  <div class="inventory-tracker" *ngSwitchCase="'inventory'">
                    <div class="inventory-header">
                      <span>STOCK LEVELS</span>
                      <span>AUTO-SCAN ACTIVE</span>
                    </div>
                    <div class="stock-item">
                      <div class="stock-info"><span>Prime Cotton</span><span>85%</span></div>
                      <div class="stock-bar"><div class="stock-level" style="width: 85%"></div></div>
                    </div>
                    <div class="stock-item">
                      <div class="stock-info"><span>Silk Blend</span><span>65%</span></div>
                      <div class="stock-bar"><div class="stock-level" style="width: 65%"></div></div>
                    </div>
                    <div class="stock-item">
                      <div class="stock-info"><span>Denim Core</span><span>15%</span><span class="low-stock-alert">LOW STOCK</span></div>
                      <div class="stock-bar"><div class="stock-level alert" style="width: 15%"></div></div>
                    </div>
                  </div>

                  <!-- Accounting Visual -->
                  <div class="mockup-accounting" *ngSwitchCase="'accounting'">
                    <div class="acc-header">
                      <span>GST COMPLIANCE</span>
                      <div class="gst-marker">✓ GST FILED</div>
                    </div>
                    <app-accounting-chart></app-accounting-chart>
                  </div>

                  <!-- Omnichannel Visual -->
                  <div class="omni-hub" *ngSwitchCase="'omnichannel'">
                    <div class="omni-header"><span>UNIFIED QUEUE</span></div>
                    <div class="pulse-center"></div>
                    <div class="channel-dot web">Web Store</div>
                    <div class="channel-dot store">In-Store</div>
                    <div class="channel-dot app">Mobile App</div>
                  </div>
                </ng-container>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  `,
  styles: [`
    .solution-hub { padding: 8rem 0 10rem; position: relative; background: transparent; overflow: visible; }
    
    .dot-pattern-matrix {
      position: absolute; top: 0; left: 0; width: 100%; height: 100%;
      background-image: radial-gradient(var(--text-light) 1.2px, transparent 1.2px);
      background-size: 80px 80px; opacity: 0.15; z-index: 0; pointer-events: none;
    }

    .container.relative { position: relative; z-index: 1; max-width: 1300px; margin: 0 auto; }

    .tab-grid { 
      display: flex; justify-content: center; gap: 1.2rem; 
      margin-bottom: 3rem; position: relative; z-index: 10;
    }

    .glass-tab {
      background: rgba(255, 255, 255, 0.5); backdrop-filter: blur(12px); -webkit-backdrop-filter: blur(12px);
      padding: 0.85rem 1.5rem; border-radius: 14px;
      border: 1px solid rgba(255, 255, 255, 0.4); display: flex; align-items: center;
      cursor: pointer; transition: all 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275); 
      user-select: none;
    }

    @media (hover: hover) {
      .glass-tab:hover { background: rgba(255, 255, 255, 0.85); border-color: var(--primary-light); transform: translateY(-2px); }
    }
    
    .glass-tab.active { 
      background: #ffffff; border-color: var(--primary-color);
      box-shadow: 0 12px 24px rgba(15, 23, 42, 0.08);
      transform: translateY(-4px);
    }

    .tab-title { font-weight: 800; font-size: 0.95rem; color: #1e293b; margin-right: 10px; }
    .tab-benefit { font-size: 0.75rem; color: #64748b; font-weight: 700; text-transform: uppercase; letter-spacing: 0.05em; }
    .glass-tab.active .tab-title { color: var(--primary-color); }

    .glass-card-main { 
      min-height: 520px; padding: 4rem; position: relative;
      background: rgba(255, 255, 255, 0.65); backdrop-filter: blur(12px); -webkit-backdrop-filter: blur(12px);
      border-radius: 28px; border: 1px solid rgba(255, 255, 255, 0.5);
      box-shadow: 0 40px 80px -20px rgba(15, 23, 42, 0.08);
      z-index: 1; overflow: hidden;
    }

    /* Moving Gradient Border Signature */
    .glass-card-main::after {
      content: ''; position: absolute; inset: -2px;
      background: linear-gradient(135deg, var(--primary-color), #a855f7, var(--primary-color));
      background-size: 400% 400%; z-index: -1; opacity: 0.25;
      border-radius: 30px; animation: movingGradient 6s ease infinite;
    }

    @keyframes movingGradient { 0% { background-position: 0% 50%; } 50% { background-position: 100% 50%; } 100% { background-position: 0% 50%; } }

    .hub-visual-glow {
      position: absolute; top: -20%; right: -20%; width: 50%; height: 50%;
      background: radial-gradient(circle, rgba(99, 102, 241, 0.12) 0%, transparent 70%);
      filter: blur(50px); pointer-events: none; z-index: 0;
    }

    .hub-content { 
      display: grid; 
      grid-template-columns: 1fr 1.15fr; 
      gap: 4rem; 
      align-items: center; 
      position: relative; 
      z-index: 1;
      width: 100%;
      min-width: 0; /* Enable shrinking */
    }
    .hub-content.fade-in { animation: contentFadeIn 0.3s cubic-bezier(0.16, 1, 0.3, 1) both; }
    @keyframes contentFadeIn { from { opacity: 0; transform: translateY(12px); } to { opacity: 1; transform: translateY(0); } }

    .text-side h2 { font-size: 2.75rem; font-weight: 900; margin-bottom: 1.5rem; letter-spacing: -0.03em; line-height: 1.1; }
    .text-gradient-premium { background: linear-gradient(135deg, #1f2937 0%, #6366f1 100%); -webkit-background-clip: text; -webkit-text-fill-color: transparent; background-clip: text; }

    .hub-subheading { font-size: 1.15rem; color: #475569; line-height: 1.6; margin-bottom: 2.5rem; font-weight: 500; max-width: 90%; }
    
    .sophisticated-list { list-style: none; padding: 0; margin-bottom: 2.5rem; }
    .sophisticated-list li { margin-bottom: 1.2rem; display: flex; align-items: center; gap: 1rem; font-size: 1.05rem; }
    
    .feat-icon {
      width: 24px; height: 24px; background: rgba(99, 102, 241, 0.08);
      border-radius: 50%; display: flex; align-items: center; justify-content: center;
      color: var(--primary-color); flex-shrink: 0;
    }
    .feat-icon svg { width: 14px; height: 14px; }

    .glass-btn { 
      padding: 1rem 2.2rem; font-size: 1rem; border-radius: 12px; background: #0f172a;
      box-shadow: 0 8px 20px rgba(15, 23, 42, 0.15);
    }

    /* Visualization Side Refinements */
    .glass-surface {
      background: rgba(255, 255, 255, 0.5); backdrop-filter: blur(10px);
      border: 1px solid rgba(255, 255, 255, 0.4); border-radius: 24px;
      padding: 2.5rem 3rem; min-height: 380px; position: relative;
      box-shadow: 0 20px 40px rgba(0,0,0,0.03); display: flex; align-items: center; justify-content: center;
      width: 100%;
      max-width: 100%;
      overflow: hidden; /* Contain specialized visuals */
    }

    .hud-corner {
      position: absolute; width: 18px; height: 18px; border: 2px solid var(--primary-color);
      opacity: 0.4; pointer-events: none;
    }
    .top-left { top: 18px; left: 18px; border-right: 0; border-bottom: 0; }
    .bottom-right { bottom: 18px; right: 18px; border-left: 0; border-top: 0; }

    /* POS Terminal Visuals */
    .pos-terminal { font-family: 'Inter', sans-serif; }
    .pos-header { display: flex; justify-content: space-between; margin-bottom: 2rem; color: #64748b; font-size: 0.8rem; font-weight: 800; letter-spacing: 0.1em; border-bottom: 1px solid rgba(0,0,0,0.05); padding-bottom: 1rem; }
    .pos-item { display: flex; justify-content: space-between; margin-bottom: 1rem; font-size: 1.1rem; font-weight: 600; color: #1e293b; }
    .pos-total { margin-top: 2rem; padding-top: 1.5rem; border-top: 2px dashed rgba(0,0,0,0.1); display: flex; justify-content: space-between; font-size: 1.8rem; font-weight: 900; color: var(--primary-color); }
    .success-badge { margin-top: 2.5rem; background: #10b981; color: white; padding: 0.8rem 1.5rem; border-radius: 12px; text-align: center; font-weight: 800; font-size: 0.9rem; box-shadow: 0 10px 20px rgba(16, 185, 129, 0.2); }

    /* Inventory Visuals */
    .inventory-tracker { width: 100%; }
    .inventory-header { display: flex; justify-content: space-between; margin-bottom: 2.5rem; color: #64748b; font-size: 0.8rem; font-weight: 800; border-bottom: 1px solid rgba(0,0,0,0.05); padding-bottom: 1rem; }
    .stock-item { margin-bottom: 2rem; }
    .stock-info { display: flex; justify-content: space-between; margin-bottom: 0.8rem; font-weight: 700; color: #1e293b; }
    .stock-bar { height: 10px; background: rgba(0,0,0,0.05); border-radius: 99px; overflow: hidden; position: relative; }
    .stock-level { height: 100%; background: var(--primary-color); border-radius: 99px; transition: width 1s ease-out; }
    .stock-level.alert { background: #f43f5e; }
    .low-stock-alert { color: #f43f5e; font-size: 0.7rem; background: rgba(244, 63, 94, 0.1); padding: 2px 8px; border-radius: 4px; margin-left: 10px; }

    /* Accounting Visuals */
    .mockup-accounting { width: 100%; }
    .acc-header { display: flex; justify-content: space-between; margin-bottom: 2rem; color: #64748b; font-size: 0.8rem; font-weight: 800; align-items: center; border-bottom: 1px solid rgba(0,0,0,0.05); padding-bottom: 1rem; }
    .gst-marker { background: #f0fdf4; color: #16a34a; padding: 6px 12px; border-radius: 8px; font-size: 0.75rem; border: 1px solid #22c55e20; }

    /* Omnichannel Pulse */
    .omni-hub { height: 320px; display: flex; align-items: center; justify-content: center; position: relative; }
    .omni-header { position: absolute; top: 0; left: 0; width: 100%; display: flex; justify-content: space-between; color: #64748b; font-size: 0.8rem; font-weight: 800; border-bottom: 1px solid rgba(0,0,0,0.05); padding-bottom: 1rem; }
    .pulse-center { width: 60px; height: 60px; background: var(--primary-color); border-radius: 50%; box-shadow: 0 0 30px var(--primary-color); position: relative; z-index: 2; }
    .pulse-center::after { content: ''; position: absolute; inset: -40px; border: 2px solid var(--primary-color); border-radius: 50%; opacity: 0.2; animation: pulseRing 2s infinite; }
    @keyframes pulseRing { 0% { transform: scale(0.8); opacity: 0.5; } 100% { transform: scale(1.5); opacity: 0; } }
    .channel-dot { position: absolute; padding: 0.8rem 1.4rem; background: white; border-radius: 12px; box-shadow: 0 10px 20px rgba(0,0,0,0.05); font-weight: 800; font-size: 0.85rem; z-index: 3; border: 1px solid #f1f5f9; }
    @media (max-width: 1300px) {
      .glass-card-main { padding: 3rem; }
      .hub-content { gap: 3rem; }
    }

    @media (max-width: 1024px) {
      .solution-hub { padding: 6rem 0; }
      
      .tab-grid {
        justify-content: flex-start;
        overflow-x: auto;
        padding-bottom: 1rem;
        margin-right: -1.5rem;
        margin-left: -1.5rem;
        padding-left: 1.5rem;
        padding-right: 1.5rem;
        -webkit-overflow-scrolling: touch;
        scrollbar-width: none;
        &::-webkit-scrollbar { display: none; }
      }

      .glass-tab { flex-shrink: 0; white-space: nowrap; }

      .hub-content { grid-template-columns: 1fr; gap: 3rem; }
      
      .text-side { order: 1; text-align: center; display: flex; flex-direction: column; align-items: center; }
      .visual-side { order: 2; width: 100%; }

      .text-side h2 { font-size: 2.25rem; }
      .hub-subheading { margin-left: auto; margin-right: auto; }
      .sophisticated-list { text-align: left; align-self: stretch; max-width: 450px; margin-left: auto; margin-right: auto; }
    }

    @media (max-width: 640px) {
      .glass-card-main { padding: 2.5rem 1.5rem; border-radius: 20px; }
      .text-side h2 { font-size: 1.85rem; }
      .hub-subheading { font-size: 1rem; }
      .glass-surface { padding: 1.5rem; min-height: 300px; }
      
      .pos-total { font-size: 1.4rem; }
      .success-badge { width: 100%; }
      .channel-dot { font-size: 0.7rem; padding: 0.5rem 1rem; }
      .web { top: 15%; }
      .app { top: 35%; }
      .channel-dot { white-space: nowrap; max-width: 100%; overflow: hidden; text-overflow: ellipsis; }
    }
  `]
})
export class SolutionHubComponent implements OnInit, OnDestroy {
  tabs: HubTab[] = [
    {
      id: 'billing',
      title: 'Billing',
      benefit: 'Lightning Fast POS',
      headline: 'Lightning Fast Billing',
      subtext: 'The core of your retail operations, optimized for speed and accuracy.',
      features: [
        { title: 'Zero-Training Checkout', desc: 'Faster billing that handles multiple GST rates.' },
        { title: 'Smart Promotions', desc: 'Customize offers and increase repeat sales.' },
        { title: 'Auto-Reconciliation', desc: 'AI reconciles payments across UPI and Cards.' }
      ],
      visualType: 'pos'
    },
    {
      id: 'inventory',
      title: 'Inventory',
      benefit: 'Real-time Precision',
      headline: 'Live Inventory Intelligence',
      subtext: 'Never lose a sale due to a stock-out or overstocking issues.',
      features: [
        { title: 'Auto-Indents', desc: 'Generate purchase orders based on sales velocity.' },
        { title: 'Stock-Aging', desc: 'Identify slow-moving stock before it becomes overhead.' },
        { title: 'Smart Transfers', desc: 'Optimize stock across your entire store network.' }
      ],
      visualType: 'inventory'
    },
    {
      id: 'accounting',
      title: 'Accounting',
      benefit: 'Hands-free Ledger',
      headline: 'Automated Financial Control',
      subtext: 'Real-time financial visibility without the manual data entry grind.',
      features: [
        { title: 'One-Click GST', desc: 'Auto-generate reports for GST R1 and 3B compliance.' },
        { title: 'Audit-Ready', desc: 'Maintain detailed ledgers that stay compliant.' },
        { title: 'Pro-active Alerts', desc: 'Get notified of unusual cashflow patterns.' }
      ],
      visualType: 'accounting'
    },
    {
      id: 'omnichannel',
      title: 'Omnichannel',
      benefit: 'Sell Anywhere',
      headline: 'Unified Multi-Channel Commerce',
      subtext: 'Seamlessly bridge the gap between your physical and digital store.',
      features: [
        { title: 'Integrated App', desc: 'Launch your customer app with live loyalty sync.' },
        { title: 'Hyperlocal Ops', desc: 'Ship from stores for faster customer delivery.' },
        { title: 'Unified Loyalty', desc: 'One reward system across web, app, and store.' }
      ],
      visualType: 'omnichannel'
    }
  ];

  activeTab: HubTab = this.tabs[0];
  progress = 0;
  isAnimating = false;
  private autoCycleInterval: any;

  ngOnInit() {
    this.startAutoCycle();
  }

  ngOnDestroy() {
    this.stopAutoCycle();
  }

  private startAutoCycle() {
    this.stopAutoCycle();
    this.autoCycleInterval = setInterval(() => {
      this.progress += 1.25; // 8 seconds cycle
      if (this.progress >= 100) {
        this.nextTab();
      }
    }, 100);
  }

  private stopAutoCycle() {
    if (this.autoCycleInterval) clearInterval(this.autoCycleInterval);
  }

  private nextTab() {
    const currentIndex = this.tabs.findIndex(t => t.id === this.activeTab.id);
    const nextIndex = (currentIndex + 1) % this.tabs.length;
    this.setActiveTab(this.tabs[nextIndex]);
  }

  onTabClick(tab: HubTab) {
    this.setActiveTab(tab);
    this.startAutoCycle();
  }

  setActiveTab(tab: HubTab) {
    if (this.activeTab.id === tab.id) return;

    this.activeTab = tab;
    this.progress = 0;
    this.isAnimating = false;

    requestAnimationFrame(() => {
      this.isAnimating = true;
    });
  }
}
