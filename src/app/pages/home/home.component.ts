import { Component} from "@angular/core";

@Component({
  template: `

    <app-logo [size]="6"/>

    <h1> YOUR DART APP</h1>
    <h2>Willkommen</h2>

    <ul>
      <li>
        <a [routerLink]="['/user/1']">User</a>
      </li>
      <li>
        <a [routerLink]="['/numbers']">Numbers</a>
      </li>
      <li>
        <a [routerLink]="['/active-game']">Game</a>
      </li>
      <li>
        <a [routerLink]="['/login']">Login</a>
      </li>
    </ul>
  `,
  styleUrls: ['home.component.scss']
})

export class HomeComponent {

}
