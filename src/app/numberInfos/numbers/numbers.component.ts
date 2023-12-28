import { Component } from '@angular/core';
import { ColorsOfNumbersService } from '../../colors-of-numbers.service';

@Component({
  selector: 'app-numbers',
  template: `
    <app-back-to-main />
    <div>
      <ul>
        <li *ngFor="let number of numbersArray, let i = index">
          <a [routerLink]="['/number/' + number]">{{ number}}</a>
        </li>
      </ul>
    </div>`,
  styleUrls: ['./numbers.component.scss'],

})

export class NumbersComponent {
  numbersArray = Array.from({length: 180}, (_, i) => i + 1);

  colorsOfNumbers: Object = {};

  constructor(private colorsService: ColorsOfNumbersService) { }

  ngOnInit(): void {
    this.colorsOfNumbers = this.colorsService.getColors();
  }
}
