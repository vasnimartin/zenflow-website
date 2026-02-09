import { Component, ElementRef, Input, AfterViewInit, signal, ViewChild, PLATFORM_ID, Inject } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';

@Component({
  selector: 'app-counter',
  standalone: true,
  template: `
    <span #counterRef class="stat-number">
      {{ displayValue() }}
    </span>
  `,
  styles: [`
    :host { display: inline-block; }
    .stat-number {
      font-feature-settings: "tnum"; /* Tabular nums for stable width */
      font-weight: 800;
      color: inherit; /* Inherit from parent (usually primary color) */
      letter-spacing: -0.02em;
    }
  `]
})
export class CounterComponent implements AfterViewInit {
  @Input() target: number = 0;
  @Input() prefix: string = '';
  @Input() suffix: string = '';
  @Input() duration: number = 2000;
  
  displayValue = signal('0');
  @ViewChild('counterRef') element!: ElementRef;

  constructor(@Inject(PLATFORM_ID) private platformId: Object) {}

  ngAfterViewInit() {
    if (!isPlatformBrowser(this.platformId)) return; // Skip on server

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          this.animateCount();
          observer.disconnect(); // Run only once
        }
      });
    }, { threshold: 0.1 }); // Trigger when 10% visible
    
    if (this.element) {
      observer.observe(this.element.nativeElement);
    }
  }

  animateCount() {
    const startTime = performance.now();
    const startValue = 0;
    
    // Set initial value
    this.displayValue.set(`${this.prefix}${startValue}${this.suffix}`);

    const step = (currentTime: number) => {
      const progress = Math.min((currentTime - startTime) / this.duration, 1);
      
      // Quartic Ease Out for "Premium" feel (starts fast, slows down gently)
      const ease = 1 - Math.pow(1 - progress, 4); 
      
      const current = Math.floor(ease * this.target);
      this.displayValue.set(`${this.prefix}${current.toLocaleString()}${this.suffix}`);

      if (progress < 1) {
        requestAnimationFrame(step);
      } else {
        // Ensure final value is exact
        this.displayValue.set(`${this.prefix}${this.target.toLocaleString()}${this.suffix}`);
      }
    };
    
    requestAnimationFrame(step);
  }
}
