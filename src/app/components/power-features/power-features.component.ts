import { Component } from '@angular/core';

@Component({
  selector: 'app-power-features',
  standalone: true,
  template: `
    <section class="power-section">
      <div class="container">
        <div class="section-header text-center mb-5">
          <h2 style="color:white; margin-bottom:1rem;">Powering the future of Retail</h2>
          <p style="color:rgba(255,255,255,0.7);">Everything you need to scale your business, built right in.</p>
        </div>
        
        <div class="grid grid-4">
          <div class="power-card">
            <h3>
              <svg class="icon" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2"><path d="M13 10V3L4 14h7v7l9-11h-7z"/></svg>
              PoS Operations
            </h3>
            <p>Hybrid solution that works offline and instantly sync online for uninterrupted operations.</p>
          </div>
          
          <div class="power-card">
            <h3>
              <svg class="icon" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2"><path d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"/></svg>
              Automation
            </h3>
            <p>Auto generate POs, Indents, Store wise pick lists and store transfers.</p>
          </div>
          
          <div class="power-card">
            <h3>
              <svg class="icon" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2"><path d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"/></svg>
              Access Control
            </h3>
            <p>Ensure users access only to the info and tools needed and nothing else.</p>
          </div>
          
          <div class="power-card">
            <h3>
              <svg class="icon" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2"><path d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"/></svg>
              Integrations
            </h3>
            <p>Integrate with any third party applications & Hardware.</p>
          </div>
        </div>
      </div>
    </section>
  `,
  styles: [`
    .power-section {
      padding: 8rem 0;
      /* Deep Premium Background with "Nano Grid" */
      background: radial-gradient(circle at 50% 0%, #312e81 0%, #1e1b4b 60%, #0f172a 100%);
      color: white;
      position: relative;
      overflow: hidden;
      
      /* "Nano" Grid Overlay for Tech Trust Vibe */
      &::before {
         content: '';
         position: absolute;
         top: 0; left: 0; width: 100%; height: 100%;
         background-image: 
           linear-gradient(rgba(255, 255, 255, 0.03) 1px, transparent 1px),
           linear-gradient(90deg, rgba(255, 255, 255, 0.03) 1px, transparent 1px);
         background-size: 40px 40px;
         mask-image: radial-gradient(circle at 50% 50%, black 40%, transparent 80%);
         pointer-events: none;
      }
    }
    
    .mb-5 { margin-bottom: 4rem; }
    
    .grid-4 {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(240px, 1fr)); 
      gap: 2rem;
      /* Structural integrity preserved */
    }
    
    .power-card {
      /* Keep padding identical to preserve size */
      padding: 2rem;
      border-radius: 16px;
      transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
      
      /* Ultra-Premium Glass Surface */
      background: rgba(255, 255, 255, 0.02);
      backdrop-filter: blur(12px);
      border: 1px solid rgba(255, 255, 255, 0.05);
      position: relative;
      overflow: hidden;

      h3 { 
        font-size: 1.25rem; 
        margin-bottom: 0.75rem; 
        color: white; 
        display: flex; 
        align-items: center; 
        gap: 0.75rem; 
      }
      
      p { color: rgba(255, 255, 255, 0.6); margin: 0; font-size: 0.95rem; line-height: 1.6; }
      
      /* Individual "Radiant" Identities - Hidden by default, revealed on interaction */
      --card-glow: 255, 255, 255; /* Fallback */
      
      &:nth-child(1) { --card-glow: 56, 189, 248; }  /* Sky Blue (PoS) */
      &:nth-child(2) { --card-glow: 168, 85, 247; }  /* Purple (Automation) */
      &:nth-child(3) { --card-glow: 236, 72, 153; }  /* Pink (Access) */
      &:nth-child(4) { --card-glow: 45, 212, 191; }  /* Cyan/Teal (Integrations) */

      /* Default State: Subtle "Breath" of color (Fixes "Useless if not hovered" issue) */
      border-top: 1px solid rgba(var(--card-glow), 0.3); /* Visible color hint */
      
      h3 { 
         /* Title gets a slight tint too */
         text-shadow: 0 0 20px rgba(var(--card-glow), 0.2);
         transition: all 0.3s ease;
      }

      /* Hover: "Radiant" Glow - Increases perceived value/trust */
      &:hover {
        transform: translateY(-5px);
        background: rgba(255, 255, 255, 0.05); 
        
        /* The Radiant Pop */
        border-color: rgba(var(--card-glow), 0.6);
        box-shadow: 
          0 20px 40px -10px rgba(0,0,0,0.5),
          0 0 20px -5px rgba(var(--card-glow), 0.4); 
          
        h3 { color: rgb(var(--card-glow)); } /* Title lights up */

        .icon { 
          opacity: 1; 
          transform: scale(1.1); 
          color: rgb(var(--card-glow));
          filter: drop-shadow(0 0 8px rgba(var(--card-glow), 0.6));
        }
      }
    }
    
    .icon {
      width: 24px; 
      height: 24px;
      /* Visible by default, but subtle */
      color: rgba(var(--card-glow), 0.7); 
      filter: drop-shadow(0 0 5px rgba(var(--card-glow), 0.2));
      transition: all 0.3s ease;
    }
    
    h2 { color: white; margin-bottom: 3rem; }
    
    @media (max-width: 768px) {
      .power-section { padding: 4rem 0; } /* Reduce vertical spacing */
      .mb-5 { margin-bottom: 2.5rem; }
      
      .grid-4 { grid-template-columns: 1fr; }
      
      .power-card {
        padding: 1.5rem; /* Compact padding for mobile */
      }
    }
  `]
})
export class PowerFeaturesComponent {}
