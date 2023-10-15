import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-logo',
  templateUrl: './logo.component.html',
  styleUrls: ['./logo.component.scss']
})
export class LogoComponent {
 private _size: number = 1;

  @Input()
  get size(): number {
    return this._size || 1;
  }
  set size(value: number) {
    // Füge hier deine Validierungslogik hinzu
    if (value >= 1 && value <= 12) {
      this._size = value;
    } else {
      console.error('Ungültiger Wert für myNumber. Muss zwischen 1 und 10 liegen.');
    }
  }

}
