import { Component } from '@angular/core';

@Component({
  selector: 'app-back-to-main',
  template: `
    <div class="container">
      <a [routerLink]="['']">
        <svg width="20" height="20" viewBox="0 0 267 198" fill="white" xmlns="http://www.w3.org/2000/svg">
          <path fill-rule="evenodd"  clip-rule="evenodd" d="M104.115 0H99.1489L95.6352 3.50912L8.52032 90.5091L0.0182343 99L8.52032 107.491L95.6352 194.491L99.1489 198H104.115H255H267V186V99V55.5V12V0H255H104.115ZM45.9976 87L109.081 24H226.002L162.919 87H45.9976ZM202.963 150.991L226.002 174H109.081L45.9976 111H162.919L202.963 150.991Z" />
        </svg>
        <h1>Headline</h1>
      </a>
    </div>
  `,
  styleUrls: ['/back-to-main.component.scss'],
})
export class BackToMainComponent {

}
