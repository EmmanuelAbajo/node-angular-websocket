import { Directive, HostListener, ElementRef } from '@angular/core';
import { Router } from '@angular/router';

@Directive({
  selector: '[appRecentActivity]'
})
export class RecentActivityDirective {

  constructor(private elementRef: ElementRef, private router: Router) { }

   @HostListener('click') onClick(): void {
    console.log('Element inner HTML:::' + this.elementRef.nativeElement.innerHTML);
    console.log('Element link:::' + this.router.routerState.snapshot.url);
  }

}
