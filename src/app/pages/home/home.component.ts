import { Component } from '@angular/core';
import { HeroComponent } from '../../components/hero/hero.component';
import { FeaturesComponent } from '../../components/features/features.component';
import { TestimonialsComponent } from '../../components/testimonials/testimonials.component';
import { PowerFeaturesComponent } from '../../components/power-features/power-features.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [HeroComponent, FeaturesComponent, TestimonialsComponent, PowerFeaturesComponent],
  template: `
    <main>
      <app-hero />
      <app-features />
      <app-power-features />
      <app-testimonials />
    </main>
  `
})
export class HomeComponent {}
