import { Directive, ElementRef, Renderer2, HostListener, HostBinding } from '@angular/core';

/**
 * - Renderer allows us to access the element and change its properties without the DOM.
 *   This is best used in case the angular app doesn't run on a browser
 * - ElementRef gives us access to the html element in which the directive is on. It should
 *   not be used to change element properties directly
 * - @HostListener allows us to listen for events on the element in which the directive is on
 * - @HostBinding allows us to bind to a property of the element in which the directive is on
 */
@Directive({
  selector: '[appHighlight]'
})
export class HighlightDirective {

  @HostBinding('style.color') color = 'black';

  constructor(private elemRef: ElementRef, private renderer: Renderer2) { }

  @HostListener('mouseenter') onHover() {
    // this.renderer.setStyle(this.elemRef.nativeElement, 'color', 'red');
    this.color = 'red';
  }

  @HostListener('mouseleave') onLeave() {
    // this.renderer.setStyle(this.elemRef.nativeElement, 'color', 'black');
    this.color = 'black';
  }

}
