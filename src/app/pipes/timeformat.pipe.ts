import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'timeformat'
})
export class TimeformatPipe implements PipeTransform {

  constructor() { }

  transform(value: number, ...args: unknown[]): unknown {
    let hour = Math.floor(value / 3600000)
    let min = Math.floor((value - (3600000 * hour)) / 60000)
    let sec = Math.round((value - (3600000 * hour) - (60000 * min)) / 1000);

    if (hour == 0 && min == 0) {
      return `<b>${sec}</b> Second`;
    }
    else if (hour == 0) {
      return `${min} Minute : ${sec} Second`
    }
    else {
      return `${hour} Hour : ${min} Minute : ${sec} Second`
    }
  }

}
