import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appToggleDetails]',
})
export class ToggleDetailsDirective {
  constructor(private el: ElementRef) {}

  @HostListener('click') onClick() {
    const paymentDetails =
      this.el.nativeElement.querySelector('.payment_details');
    const buttonToggler =
      this.el.nativeElement.querySelector('.button_toggler');
    if (paymentDetails.classList[1] !== 'hide') {
      paymentDetails.classList.add('hide');
      buttonToggler.innerHTML = 'Show Details ⬇';
    } else {
      paymentDetails.classList.remove('hide');
      buttonToggler.innerHTML = 'Hide Details ⬆';
    }
  }
}
