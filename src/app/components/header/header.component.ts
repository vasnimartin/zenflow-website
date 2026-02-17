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
      backdrop-filter: blur(20px);
      -webkit-backdrop-filter: blur(20px);
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
    
    /* Mobile Toggle */
    .menu-toggle {
      display: none;
      background: none;
      border: none;
      cursor: pointer;
      flex-direction: column;
      gap: 5px;
      padding: 5px;
      z-index: 1002;
      
      .bar {
        width: 24px;
        height: 2px;
        background-color: var(--text-dark);
        transition: all 0.3s ease;
      }
    }
    
    /* Mobile Nav Overlay */
    .mobile-nav {
      position: fixed;
      top: 0;
      left: 0;
      width: 100%;
      height: 100vh;
      background: rgba(255, 255, 255, 0.98);
      backdrop-filter: blur(20px);
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      gap: 2rem;
      transform: translateY(-100%);
      transition: transform 0.4s cubic-bezier(0.165, 0.84, 0.44, 1);
      z-index: 1001;
      opacity: 0;
      pointer-events: none;
      
      a {
        font-size: 1.5rem;
        font-weight: 600;
        color: var(--text-dark);
        
        &.active { color: var(--primary-color); }
      }
      
      &.open {
        transform: translateY(0);
        opacity: 1;
        pointer-events: all;
      }
    }

    @media (max-width: 768px) {
      .header-content {
        display: flex;
        justify-content: space-between;
      }
      .desktop-nav { display: none; }
      .menu-toggle { display: flex; }
      
      .header.scrolled {
        width: 100%;
        top: 0;
        border-radius: 0;
        border-bottom: 1px solid rgba(0,0,0,0.05);
      }
    }
    
    /* Menu Open State handling aka "Burger Animation" */
    .header.menu-open .menu-toggle .bar:nth-child(1) { transform: rotate(45deg) translate(5px, 5px); }
    .header.menu-open .menu-toggle .bar:nth-child(2) { opacity: 0; }
    .header.menu-open .menu-toggle .bar:nth-child(3) { transform: rotate(-45deg) translate(5px, -5px); }
  `]
})
export class HeaderComponent {
  isScrolled = false;
  isMenuOpen = false;

  @HostListener('window:scroll', [])
  onWindowScroll() {
    this.isScrolled = window.scrollY > 20;
  }

  toggleMenu() {
    this.isMenuOpen = !this.isMenuOpen;
  }

  closeMenu() {
    this.isMenuOpen = false;
  }

  colorsMenu() {
    // Just a helper to close if clicking logo
    this.closeMenu();
  }
}
