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

  constructor() {
    // booksObservable$.subscribe(book => console.log(book.title));
    // ofSource$.subscribe(val => console.log(val));
    // fromSource$.subscribe(book => console.log(book.title));
    // concatSource$.subscribe(val => console.log(val));
    // let btn = document.getElementById('btn');
    // console.log(btn);
    // fromEvent(btn, 'click').subscribe(event => {
    //   console.log(event);
    // });
  }

}
