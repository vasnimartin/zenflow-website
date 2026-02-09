import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, HeaderComponent, FooterComponent],
  template: `
    <!-- Global Living Background -->
    <div class="scanning-grid fixed-bg"></div>
    <div class="hero-glow fixed-bg"></div>
    <div class="brand-watermark fixed-bg">Zenflow</div>
    
    <app-header />
    <main>
      <router-outlet />
    </main>
    <app-footer />
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
      z-index: 2; /* Ensure content sits ON TOP of fixed background (z-index: 0) */
    }
  `]
})
export class AppComponent {
  title = 'my-website';
}
