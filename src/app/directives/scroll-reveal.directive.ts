import { Directive, ElementRef, Renderer2, OnInit, AfterViewInit } from '@angular/core';

@Directive({
  selector: '[appScrollReveal]',
  standalone: true
})
export class ScrollRevealDirective implements AfterViewInit {

  constructor(private el: ElementRef, private renderer: Renderer2) { }

  ngAfterViewInit() {
    // Add initial class to hide/prepare element
    this.renderer.addClass(this.el.nativeElement, 'reveal-hidden');

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          // Add 'reveal-active' class when in view
          this.renderer.addClass(this.el.nativeElement, 'reveal-active');
          // Optional: Stop observing once revealed
          observer.unobserve(entry.target);
        }
      });
    }, {
      threshold: 0.15, // Trigger when 15% of element is visible
      rootMargin: '0px 0px -50px 0px' // Offset to make it feel deliberate
    });

    observer.observe(this.el.nativeElement);
  }
}
