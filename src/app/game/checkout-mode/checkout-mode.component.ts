import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-checkout-mode',
  templateUrl: './checkout-mode.component.html',
  styleUrls: ['./checkout-mode.component.scss']
})
export class CheckoutModeComponent {

  @Output() changeEvent = new EventEmitter<string>();

  changeCheckoutMode(value: string) {
    console.log(value)
    this.changeEvent.emit(value)
  }

  activeMode = "doubleOut"

}
