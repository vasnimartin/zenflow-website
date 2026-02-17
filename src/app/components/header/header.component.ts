import { Component, HostListener } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [RouterLink, RouterLinkActive],
  template: `
    <header class="header" [class.scrolled]="isScrolled" [class.menu-open]="isMenuOpen">
      <div class="container header-content">
        <div class="header-left">
          <a routerLink="/" class="logo" (click)="colorsMenu()">
            Zenflow<span class="highlight">.ai</span>
          </a>
        </div>
        
        <!-- Desktop Nav -->
        <nav class="nav desktop-nav">
          <a routerLink="/" routerLinkActive="active" [routerLinkActiveOptions]="{exact: true}">Home</a>
          <a routerLink="/billing" routerLinkActive="active">Billing</a>
          <a routerLink="/inventory" routerLinkActive="active">Inventory</a>
          <a routerLink="/accounting" routerLinkActive="active">Accounting</a>
          <a routerLink="/omnichannel" routerLinkActive="active">Omnichannel</a>
          <a routerLink="/pricing" routerLinkActive="active">Pricing</a>
        </nav>

        <div class="header-right desktop-only">
          <a routerLink="/contact" class="btn btn-primary btn-sm">Get Started</a>
        </div>

        <!-- Mobile Toggle -->
        <button class="menu-toggle" (click)="toggleMenu()" aria-label="Toggle Menu">
          <span class="bar"></span>
          <span class="bar"></span>
          <span class="bar"></span>
        </button>
      </div>

      <!-- Mobile Nav Overlay -->
      <nav class="mobile-nav" [class.open]="isMenuOpen">
        <a routerLink="/" routerLinkActive="active" [routerLinkActiveOptions]="{exact: true}" (click)="closeMenu()">Home</a>
        <a routerLink="/billing" routerLinkActive="active" (click)="closeMenu()">Billing</a>
        <a routerLink="/inventory" routerLinkActive="active" (click)="closeMenu()">Inventory</a>
        <a routerLink="/accounting" routerLinkActive="active" (click)="closeMenu()">Accounting</a>
        <a routerLink="/omnichannel" routerLinkActive="active" (click)="closeMenu()">Omnichannel</a>
        <a routerLink="/pricing" routerLinkActive="active" (click)="closeMenu()">Pricing</a>
        <a routerLink="/contact" routerLinkActive="active" class="btn btn-primary" (click)="closeMenu()">Get Started</a>
      </nav>
    </header>
  `,
  styles: [`
    .header {
      height: var(--header-height);
      position: fixed;
      top: 0;
      left: 0;
      right: 0;
      z-index: 1000;
      display: flex;
      align-items: center;
      transition: all 0.4s cubic-bezier(0.165, 0.84, 0.44, 1);
      background: rgba(255, 255, 255, 0.01);
      backdrop-filter: blur(8px);
      -webkit-backdrop-filter: blur(8px);
      border-bottom: 1px solid rgba(255, 255, 255, 0.05);
      width: 100%;
    }

    .header.scrolled {
      top: 1.5rem;
      width: 95%;
      max-width: 1100px;
      margin: 0 auto;
      height: 64px;
      border-radius: 999px;
      background: rgba(255, 255, 255, 0.8);
      backdrop-filter: blur(12px);
      -webkit-backdrop-filter: blur(12px);
      border: 1px solid rgba(255, 255, 255, 0.4);
      box-shadow: 0 20px 40px -15px rgba(0, 0, 0, 0.1);
    }

    .header-content {
      display: grid;
      grid-template-columns: 200px 1fr 200px;
      align-items: center;
      width: 100%;
    }

    .header-left { display: flex; align-items: center; }
    .header-right { display: flex; align-items: center; justify-content: flex-end; }

    .logo {
      font-size: 1.5rem;
      font-weight: 800;
      letter-spacing: -0.03em;
      transition: all 0.3s ease;
      position: relative;
      z-index: 1002;
      
      .highlight { color: var(--primary-color); }
    }
    
    .header.scrolled .logo { font-size: 1.35rem; }

    .nav.desktop-nav {
      display: flex;
      align-items: center;
      justify-content: center;
      gap: 2.5rem;

      a {
        font-weight: 600;
        font-size: 0.9rem;
        color: var(--text-dark);
        opacity: 0.7;
        position: relative;
        transition: all 0.2s;
        cursor: pointer;
        letter-spacing: 0.01em;

        &:hover, &.active { 
          opacity: 1;
          color: var(--primary-color);
        }
        
        &.active::after {
          content: '';
          position: absolute;
          bottom: -4px;
          left: 0;
          width: 100%;
          height: 2px;
          background: var(--primary-color);
          border-radius: 2px;
        }
      }
    }

    .btn-sm {
      padding: 0.6rem 1.5rem;
      font-size: 0.85rem;
      font-weight: 700;
      border-radius: 99px;
      box-shadow: 0 4px 12px rgba(99,102,241,0.2);
    }

    .desktop-only {
      display: flex;
    }
    
    /* Mobile Toggle */
    .menu-toggle {
      display: none;
      background: none;
      border: none;
      cursor: pointer;
      flex-direction: column;
      gap: 6px;
      padding: 8px;
      z-index: 1002;
      border-radius: 8px;
      transition: background 0.2s;

      &:active { background: rgba(0,0,0,0.05); }
      
      .bar {
        width: 24px;
        height: 2px;
        background-color: var(--text-dark);
        transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
        border-radius: 2px;
      }
    }
    
    /* Mobile Nav Overlay */
    .mobile-nav {
      position: fixed;
      top: 0;
      left: 0;
      width: 100%;
      height: 100vh;
      background: rgba(255, 255, 255, 0.98); /* Opaque for readability */
      backdrop-filter: blur(20px);
      -webkit-backdrop-filter: blur(20px);
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      gap: 1rem;
      transform: translateX(100%);
      transition: all 0.5s cubic-bezier(0.16, 1, 0.3, 1);
      z-index: 1001;
      opacity: 0;
      pointer-events: none;
      padding: env(safe-area-inset-top) 2rem env(safe-area-inset-bottom);
      
      a {
        width: 100%;
        text-align: center;
        padding: 1rem;
        font-size: 1.5rem;
        font-weight: 800;
        color: var(--text-dark);
        letter-spacing: -0.02em;
        opacity: 0;
        transform: translateY(20px);
        transition: all 0.4s cubic-bezier(0.16, 1, 0.3, 1);
        border-radius: 12px;
        
        &.active { 
          color: var(--primary-color);
          background: rgba(99, 102, 241, 0.05);
        }
        
        &:active {
          background: rgba(0, 0, 0, 0.05);
        }
      }

      .btn {
        margin-top: 2rem;
        width: 80%;
        max-width: 300px;
        padding: 1.2rem;
        font-size: 1.1rem;
      }
      
      &.open {
        transform: translateX(0);
        opacity: 1;
        pointer-events: all;

        a {
            opacity: 1;
            transform: translateY(0);
            
            @for $i from 1 through 7 {
                &:nth-child(#{$i}) { transition-delay: #{$i * 0.05}s; }
            }
        }
      }
    }

    @media (max-width: 1024px) {
      .header-content {
        display: flex;
        justify-content: space-between;
        padding: 0 1.5rem;
      }
      .desktop-nav, .nav.desktop-nav, .desktop-only { display: none !important; }
      .menu-toggle { display: flex !important; }
      
      .header.scrolled {
        width: calc(100% - 2rem);
        top: 1rem;
        margin: 0 1rem;
      }

      .logo { font-size: 1.35rem; }
    }

    @media (max-width: 640px) {
       .header {
         border-bottom: 1px solid rgba(0, 0, 0, 0.05);
       }
       .header.scrolled {
         width: 100% !important;
         top: 0 !important;
         margin: 0 !important;
         border-radius: 0 !important;
       }
       .logo { font-size: 1.2rem; }
    }
    
    /* Menu Open State handling aka "Burger Animation" */
    .header.menu-open .menu-toggle .bar:nth-child(1) { transform: translateY(8px) rotate(45deg); width: 28px; }
    .header.menu-open .menu-toggle .bar:nth-child(2) { opacity: 0; transform: translateX(-10px); }
    .header.menu-open .menu-toggle .bar:nth-child(3) { transform: translateY(-8px) rotate(-45deg); width: 28px; }
  `]
})
export class HeaderComponent {
  isScrolled = false;
  isMenuOpen = false;

  private scrollTicking = false;

  @HostListener('window:scroll', [])
  onWindowScroll() {
    if (!this.scrollTicking) {
      window.requestAnimationFrame(() => {
        this.isScrolled = window.scrollY > 20;
        this.scrollTicking = false;
      });
      this.scrollTicking = true;
    }
  }

  toggleMenu() {
    this.isMenuOpen = !this.isMenuOpen;
    this.updateScrollLock();
  }

  closeMenu() {
    this.isMenuOpen = false;
    this.updateScrollLock();
  }

  private updateScrollLock() {
    if (this.isMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
  }

  colorsMenu() {
    // Just a helper to close if clicking logo
    this.closeMenu();
  }

  ngOnDestroy() {
    // Safety: ensure scrolling is restored if component destroyed while menu open
    document.body.style.overflow = '';
  }
}
