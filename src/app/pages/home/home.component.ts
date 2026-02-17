import { Component } from '@angular/core';
import { HeroComponent } from '../../components/hero/hero.component';
import { SolutionHubComponent } from '../../components/features/solution-hub.component';
import { PrivacySectionComponent } from '../../components/shared/privacy-section.component';
import { TestimonialsComponent } from '../../components/testimonials/testimonials.component';
import { PowerFeaturesComponent } from '../../components/power-features/power-features.component';
import { SocialStatsComponent } from '../../components/shared/social-stats.component';
import { WhyChooseUsComponent } from '../../components/why-choose-us/why-choose-us.component';
import { FinalCtaComponent } from '../../components/final-cta/final-cta.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    HeroComponent,
    SolutionHubComponent,
    PrivacySectionComponent,
    PowerFeaturesComponent,
    SocialStatsComponent,
    WhyChooseUsComponent,
    FinalCtaComponent
  ],
  template: `
    <main>
      <app-hero />
      <app-social-stats />
      <app-power-features />
      <app-solution-hub />
      <app-privacy-section />
      <app-why-choose-us />
      <app-final-cta />
    </main>
  `
})
export class HomeComponent { }
