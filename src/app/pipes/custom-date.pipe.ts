import { Pipe, PipeTransform } from '@angular/core';
import * as moment from 'moment';

@Pipe({
  name: 'customDate'
})
export class CustomDatePipe implements PipeTransform {

  private date = moment();
  private today = this.date.clone().startOf('day');
  private yesterday = this.date.clone().subtract(1, 'days').startOf('day');


  transform(value: any, ...args: any[]): any {
    const date = moment(value);
    let result = '';
    if (this.isToday(date)) {
      result = date.format('HH:mm a');
    } else if (this.isYesterday(date)) {
      result = 'Yesterday';
    } else if (this.isOlderDate(date)) {
      result = date.format('MMM DD');
    }
    return result;
  }

  isToday(momentDate) {
    return momentDate.isSame(this.today, 'd');
  }
  isYesterday(momentDate) {
    return momentDate.isSame(this.yesterday, 'd');
  }
  isOlderDate(momentDate) {
    return momentDate.isBefore(this.yesterday);
  }


}
