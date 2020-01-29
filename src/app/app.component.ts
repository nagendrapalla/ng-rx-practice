import { Component } from '@angular/core';
import { FormControl, FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})


export class AppComponent {
  title = 'ngrx-demo';  
  error: string;
  myForm: FormGroup;
  submitted = false;

  constructor(private fb: FormBuilder) {

  }

  ngOnInit() {
    this.myForm = this.fb.group({
      startDate: ['', Validators.required],
      endDate: ['']
    });
  }

  onSubmit(form: FormGroup) {
    this.submitted = true;    
    let startDate = form.value.startDate;
    let endDate = form.value.endDate;

    if (!startDate) {
      form.controls['endDate'].setValue(new Date());
    } else if (!endDate) {
      form.controls['endDate'].setValue(new Date());
    }

    if (startDate && endDate) {
      let betweenDays = this.diffDate(startDate, endDate);
      if (betweenDays <= 0) {
        form.controls['endDate'].setErrors({'incorrect': true});
      }
    }

  }

  clearDates() {    
    this.myForm.reset();
  }

  diffDate(date1, date2) {
    // To calculate the time difference of two dates 
    var Difference_In_Time = date2.getTime() - date1.getTime();

    // To calculate the no. of days between two dates 
    var Difference_In_Days = Difference_In_Time / (1000 * 3600 * 24);

    return Difference_In_Days;
  }

}
