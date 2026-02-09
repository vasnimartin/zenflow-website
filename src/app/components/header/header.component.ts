import { Component, HostListener } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [RouterLink, RouterLinkActive],
  template: `
    <header class="header" [class.scrolled]="isScrolled" [class.menu-open]="isMenuOpen">
      <div class="container header-content">
        <a routerLink="/" class="logo" (click)="colorsMenu()">
          Zenflow<span class="highlight">.ai</span>
        </a>
        
        <!-- Desktop Nav -->
        <nav class="nav desktop-nav">
          <a routerLink="/" routerLinkActive="active" [routerLinkActiveOptions]="{exact: true}">Home</a>
          <a routerLink="/billing" routerLinkActive="active">Billing</a>
          <a routerLink="/inventory" routerLinkActive="active">Inventory</a>
          <a routerLink="/accounting" routerLinkActive="active">Accounting</a>
          <a routerLink="/pricing" routerLinkActive="active">Pricing</a>
          <a routerLink="/contact" routerLinkActive="active" class="btn btn-primary btn-sm">Get Started</a>
        </nav>

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
      background: transparent;
      width: 100%;
    }

    .header.scrolled {
      top: 1rem;
      width: 90%;
      max-width: 1000px;
      margin: 0 auto;
      height: 60px;
      border-radius: 999px;
      background: rgba(255, 255, 255, 0.75);
      backdrop-filter: blur(16px);
      -webkit-backdrop-filter: blur(16px);
      border: 1px solid rgba(255, 255, 255, 0.5);
      box-shadow: 0 10px 30px -10px rgba(0, 0, 0, 0.05);
    }

    .header-content {
      display: flex;
      justify-content: space-between;
      align-items: center;
      width: 100%;
    }

    .logo {
      font-size: 1.5rem;
      font-weight: 700;
      letter-spacing: -0.02em;
      transition: font-size 0.3s ease;
      position: relative;
      z-index: 1002; /* Above mobile menu */
      
      .highlight { color: var(--primary-color); }
    }
    
    .header.scrolled .logo { font-size: 1.25rem; }

    .nav.desktop-nav {
      display: flex;
      align-items: center;
      gap: 2rem;

      a:not(.btn) {
        font-weight: 500;
        font-size: 0.95rem;
        color: var(--text-medium);
        position: relative;
        transition: color 0.2s;
        cursor: pointer;

        &:hover, &.active { color: var(--primary-color); }
      }
      
      .btn-sm {
        padding: 0.5rem 1.25rem;
        font-size: 0.9rem;
        border-radius: 50px;
        cursor: pointer;
      }
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
