import { Component } from '@angular/core';
import { booksObservable$ } from './Observables';
import { fromEvent } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})


export class AppComponent {
  title = 'ngrx-demo';
  startDate: Date;
  endDate: Date;
  error: string;

  constructor() {

  }

  clearDates() {
    this.startDate = null;
    this.endDate = null;
    this.error = null;
  }

  checkDate() {    
    if (!this.startDate) {
      this.error = "Start Date must be filled";
      this.endDate = new Date();
    } else if (!this.endDate) {
      this.endDate = new Date();
    }

    if (this.startDate && this.endDate) {
      let betweenDays = this.diffDate(this.startDate, this.endDate);
      if (betweenDays <= 0) {
        this.error = "Start date must be before the end date";
      }
    }

  }

  diffDate(date1, date2) {
    // To calculate the time difference of two dates 
    var Difference_In_Time = date2.getTime() - date1.getTime();

    // To calculate the no. of days between two dates 
    var Difference_In_Days = Difference_In_Time / (1000 * 3600 * 24);

    return Difference_In_Days;
  }

}
