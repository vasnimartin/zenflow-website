import { Component } from '@angular/core';

@Component({
  selector: 'app-power-features',
  standalone: true,
  template: `
    <section class="power-section">
      <div class="container wide-container">
        <div class="section-header text-center mb-5">
          <h2 style="color:white; margin-bottom:1rem;">Powering the future of Retail</h2>
          <p style="color:rgba(255,255,255,0.7);">Everything you need to scale your business, built right in.</p>
        </div>
        
        <div class="grid feature-grid">
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
            <p>Auto generate POs, Indents, Store wise pick lists and store transfers automatically.</p>
          </div>
          
          <div class="power-card">
            <h3>
              <svg class="icon" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2"><path d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"/></svg>
              Access Control
            </h3>
            <p>Ensure users access only to the info and tools needed and absolutely nothing else.</p>
          </div>
          
          <div class="power-card">
            <h3>
              <svg class="icon" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2"><path d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"/></svg>
              Integrations
            </h3>
            <p>Integrate with any third party applications & Hardware via secure enterprise APIs.</p>
          </div>

          <div class="power-card">
            <h3>
              <svg class="icon" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2"><path stroke-linecap="round" stroke-linejoin="round" d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09zM18.259 8.715L18 9.75l-.259-1.035a3.375 3.375 0 00-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 002.456-2.455l.259-1.036.259 1.036a3.375 3.375 0 002.455 2.456l1.036.259-1.035.259a3.375 3.375 0 00-2.456 2.456zM16.894 20.567L16.5 21.75l-.394-1.183a2.25 2.25 0 00-1.423-1.423L13.5 18.75l1.183-.394a2.25 2.25 0 001.423-1.423l.394-1.183.394 1.183a2.25 2.25 0 001.423 1.423l1.183.394-1.183.394a2.25 2.25 0 00-1.423 1.423z" /></svg>
              Agentic AI
            </h3>
            <p>Autonomous agents that predict stock-outs, optimize pricing, and re-order in real-time.</p>
          </div>
        </div>
      </div>
    </section>
  `,
  styles: [`
    .power-section {
      padding: 10rem 0;
      background: radial-gradient(circle at 50% 0%, #312e81 0%, #1e1b4b 60%, #0f172a 100%);
      color: white;
      position: relative;
      overflow: hidden;
      
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
    
    .wide-container {
      max-width: 1440px; /* Expand for 5-col row to prevent squishing */
      margin: 0 auto;
      padding: 0 2rem;
    }

    .mb-5 { margin-bottom: 4rem; }
    
    .feature-grid {
      display: grid;
      grid-template-columns: repeat(5, 1fr); 
      gap: 1.5rem;
    }
    
    .power-card {
      padding: 3rem 2rem; /* Restore premium spacious padding */
      border-radius: 24px;
      transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
      background: rgba(255, 255, 255, 0.02);
      backdrop-filter: blur(12px);
      border: 1px solid rgba(255, 255, 255, 0.05);
      position: relative;
      overflow: hidden;
      display: flex;
      flex-direction: column;
      height: 100%;

      h3 { 
        font-size: 1.35rem; /* Restore bold size */
        margin-bottom: 1rem; 
        color: white; 
        display: flex; 
        align-items: center; 
        gap: 0.75rem; 
        font-weight: 900;
        letter-spacing: -0.02em;
      }
      
      p { 
        color: rgba(255, 255, 255, 0.5); 
        margin: 0; 
        font-size: 1rem; /* Restore readability */
        line-height: 1.6; 
        font-weight: 500; 
      }
      
      --card-glow: 255, 255, 255;
      
      &:nth-child(1) { --card-glow: 56, 189, 248; }
      &:nth-child(2) { --card-glow: 168, 85, 247; }
      &:nth-child(3) { --card-glow: 236, 72, 153; }
      &:nth-child(4) { --card-glow: 45, 212, 191; }
      &:nth-child(5) { --card-glow: 245, 158, 11; }

      border-top: 1px solid rgba(var(--card-glow), 0.3);
      
      h3 { 
         text-shadow: 0 0 20px rgba(var(--card-glow), 0.2);
         transition: all 0.3s ease;
      }

      &:hover {
        transform: translateY(-8px);
        background: rgba(255, 255, 255, 0.05); 
        border-color: rgba(var(--card-glow), 0.6);
        box-shadow: 
          0 40px 80px -20px rgba(0,0,0,0.6),
          0 0 30px -5px rgba(var(--card-glow), 0.3); 
          
        h3 { color: rgb(var(--card-glow)); }

        .icon { 
          opacity: 1; 
          transform: scale(1.1) rotate(5deg); 
          color: rgb(var(--card-glow));
          filter: drop-shadow(0 0 8px rgba(var(--card-glow), 0.6));
        }
      }
    }
    
    .icon {
      width: 28px; 
      height: 28px;
      min-width: 28px;
      color: rgba(var(--card-glow), 0.8); 
      filter: drop-shadow(0 0 5px rgba(var(--card-glow), 0.2));
      transition: all 0.3s ease;
    }
    
    @media (max-width: 1300px) {
      .feature-grid { grid-template-columns: repeat(auto-fit, minmax(280px, 1fr)); }
    }

    @media (max-width: 768px) {
      .power-section { padding: 6rem 0; }
      .feature-grid { grid-template-columns: 1fr; }
      .power-card { padding: 3rem 1.5rem; }
    }
  `]
})
export class PowerFeaturesComponent { }
