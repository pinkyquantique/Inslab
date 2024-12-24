import { Directive, ElementRef, Input, Renderer2, OnChanges } from '@angular/core';

@Directive({
  selector: '[appShimmer]',
  standalone:true
})
export class ShimmerDirective implements OnChanges {
  @Input() appShimmer: boolean = false;

  constructor(private el: ElementRef, private renderer: Renderer2) {}

  ngOnChanges(): void {
    if (this.appShimmer) {
      this.renderer.addClass(this.el.nativeElement, 'shimmer');
    } else {
      this.renderer.removeClass(this.el.nativeElement, 'shimmer');
    }
  }
}
