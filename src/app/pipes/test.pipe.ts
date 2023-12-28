import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'test'
})
export class TestPipe implements PipeTransform {

  transform(value: unknown, ...args: unknown[]): unknown {
    return value + 'test';
  }

}

@Pipe({ name: 'keys' })
export class KeysPipe implements PipeTransform {
  transform(value: any): any[] {
    if (!value) return [];
    return Object.keys(value);
  }
}
