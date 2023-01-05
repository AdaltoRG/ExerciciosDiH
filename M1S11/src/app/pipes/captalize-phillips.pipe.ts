import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'captalizePhillips',
})
export class CaptalizePhillipsPipe implements PipeTransform {
  transform(value: string): string {
    value = value.replace(value.charAt(0), value.charAt(0).toUpperCase());
    return value;
  }
}
