import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-final-cta',
  standalone: true,
  imports: [CommonModule, RouterModule],
  template: `
    <section class="final-cta">
      <div class="container">
        <div class="cta-card glass-card">
          <div class="cta-content">
            <h2 class="cta-headline">Ready to Simplify <br>Retail Operations for Good?</h2>
            <p class="cta-subtext">
              See how Zenflow transforms billing, inventory, and accounting into one seamless retail system.
            </p>
            
            <div class="cta-actions">
              <a routerLink="/contact" class="btn-primary">Get Started Now</a>
              <a href="#" class="btn-secondary">Schedule a Live Demo</a>
            </div>
          </div>
          
          <div class="cta-visual">
            <div class="pulse-ring pr-1"></div>
            <div class="pulse-ring pr-2"></div>
            <div class="pulse-ring pr-3"></div>
            <div class="logo-circle">
              <span class="logo-z">Z</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  `,
  styles: [`
    .final-cta {
      padding: 6rem 0 10rem;
      background: #ffffff;
    }

    .cta-card {
      background: linear-gradient(135deg, #4f46e5 0%, #7c3aed 100%);
      border-radius: 40px;
      padding: 6rem;
      display: grid;
      grid-template-columns: 1.2fr 0.8fr;
      gap: 4rem;
      align-items: center;
      position: relative;
      overflow: hidden;
      color: white;
      box-shadow: 0 40px 100px rgba(79, 70, 229, 0.2);
    }

    .cta-card::before {
      content: '';
      position: absolute;
      top: 0; left: 0; width: 100%; height: 100%;
      background: url('data:image/svg+xml,<svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg"><filter id="noiseFilter"><feTurbulence type="fractalNoise" baseFrequency="0.65" numOctaves="3" stitchTiles="stitch"/></filter><rect width="100%" height="100%" filter="url(%23noiseFilter)"/></svg>');
      opacity: 0.1;
      pointer-events: none;
    }

    .cta-headline {
      font-size: 4rem;
      font-weight: 900;
      line-height: 1.1;
      margin-bottom: 2rem;
      letter-spacing: -0.04em;
    }

    .cta-subtext {
      font-size: 1.4rem;
      color: rgba(255, 255, 255, 0.85);
      line-height: 1.5;
      margin-bottom: 3.5rem;
      max-width: 500px;
    }

    .cta-actions {
      display: flex;
      gap: 1.5rem;
    }

    .btn-primary {
      background: #ffffff;
      color: #4f46e5;
      padding: 1.2rem 2.5rem;
      border-radius: 14px;
      font-weight: 800;
      text-decoration: none;
      transition: all 0.3s cubic-bezier(0.16, 1, 0.3, 1);
    }

    .btn-primary:hover {
      transform: translateY(-2px);
      box-shadow: 0 10px 30px rgba(0, 0, 0, 0.15);
    }

    .btn-secondary {
      background: rgba(255, 255, 255, 0.1);
      color: #ffffff;
      padding: 1.2rem 2.5rem;
      border-radius: 14px;
      font-weight: 800;
      text-decoration: none;
      backdrop-filter: blur(10px);
      border: 1px solid rgba(255, 255, 255, 0.2);
      transition: all 0.3s;
    }

    .btn-secondary:hover {
      background: rgba(255, 255, 255, 0.2);
    }

    /* Pulse Visual */
    .cta-visual {
      display: flex;
      justify-content: center;
      align-items: center;
      position: relative;
    }

    .logo-circle {
      width: 120px;
      height: 120px;
      background: #ffffff;
      border-radius: 50%;
      display: flex;
      justify-content: center;
      align-items: center;
      box-shadow: 0 0 50px rgba(0, 0, 0, 0.1);
      z-index: 2;
    }

    .logo-z {
      font-size: 3.5rem;
      font-weight: 950;
      color: #4f46e5;
    }

    .pulse-ring {
      position: absolute;
      border: 1px solid rgba(255, 255, 255, 0.3);
      border-radius: 50%;
      animation: pulse-ring-anim 4s infinite linear;
    }

    .pr-1 { width: 180px; height: 180px; animation-delay: 0s; }
    .pr-2 { width: 260px; height: 260px; animation-delay: 1s; }
    .pr-3 { width: 340px; height: 340px; animation-delay: 2s; }

    @keyframes pulse-ring-anim {
      from { transform: scale(0.8); opacity: 0.8; }
      to { transform: scale(1.5); opacity: 0; }
    }

    @media (max-width: 1200px) {
      .cta-card { padding: 4rem; grid-template-columns: 1fr; text-align: center; }
      .cta-headline { font-size: 3rem; }
      .cta-subtext { max-width: 100%; margin: 0 auto 3rem; }
      .cta-actions { justify-content: center; }
      .cta-visual { margin-top: 3rem; }
    }

    @media (max-width: 640px) {
      .cta-card { border-radius: 30px; padding: 3rem 1.5rem; }
      .cta-headline { font-size: 2.2rem; }
      .cta-actions { flex-direction: column; width: 100%; }
      .btn-primary, .btn-secondary { width: 100%; text-align: center; }
    }
  `]
})
export class FinalCtaComponent { }
