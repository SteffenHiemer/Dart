import { Component } from '@angular/core';

@Component({
  selector: 'app-back-button-with-footer',
  template: '<app-back-to-main />' +
    '<div class="pa-8" style="overflow: auto"><router-outlet/></div>' +
    '<app-footer />',
  styles: [
    `
      :host {
        display: flex;
        justify-content: space-between;
        flex-direction: column;
      }

      ::ng-deep hr {
        margin: 6rem 4rem;
        color: #191919
      }

      ::ng-deep p, ::ng-deep h2, ::ng-deep h3 {
      }
    `
  ]
})
export class BackButtonWithFooterComponent {

}
