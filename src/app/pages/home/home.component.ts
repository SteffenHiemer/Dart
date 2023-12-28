import { Component} from "@angular/core";

@Component({
  template: `
    <app-logo [size]="12" [mt]="2" [mb]="2"/>

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

    <app-footer />
  `,
  styleUrls: ['home.component.scss']
})

export class HomeComponent {

}
