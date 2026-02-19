import { Component, OnInit } from '@angular/core';
import { RouterOutlet, Router, NavigationEnd } from '@angular/router';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { PrivacyConsentComponent } from './components/privacy/privacy-consent.component';
import { filter } from 'rxjs/operators';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, HeaderComponent, FooterComponent, PrivacyConsentComponent],
  template: `
    <!-- Global Living Background -->
    <div class="scanning-grid fixed-bg"></div>
    <div class="hero-glow fixed-bg"></div>
    <div class="brand-watermark fixed-bg">ZENFLOW</div>
    
    <app-header />
    <main>
      <router-outlet />
    </main>
    <app-footer />
    <app-privacy-consent />
  `,
  styles: [`
    :host {
      display: flex;
      flex-direction: column;
      min-height: 100vh;
    }
    main {
      flex: 1;
      display: flex;
      flex-direction: column;
      position: relative;
      z-index: 2;
    }
  `]
})
export class AppComponent implements OnInit {
  title = 'Zenflow - Modern Retail OS';

  constructor(private router: Router) { }

  ngOnInit() {
    this.router.events.pipe(
      filter(event => event instanceof NavigationEnd)
    ).subscribe(() => {
      setTimeout(() => {
        window.scrollTo({ top: 0, left: 0, behavior: 'instant' as any });
        document.body.scrollTop = 0;
        document.documentElement.scrollTop = 0;
      }, 100);
    });
  }
}
