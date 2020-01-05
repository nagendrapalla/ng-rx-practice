import { Observable, of, from, concat, fromEvent } from 'rxjs';
import { allBooks } from './data';

const booksObservable$ = Observable.create(subscriber => {
    if (document.title !== 'NgrxDemo') {
        subscriber.error('Incorrect Page Titile');
    }

    allBooks.forEach(book => {
        subscriber.next(book);
    });

    setTimeout(() => {
        subscriber.complete();
    }, 2000);

    return () => console.log('Executing teardown code.');
});

const ofSource$ = of('Hello Nag', 28, true, null);

const fromSource$ = from(allBooks);

const concatSource$ = concat(ofSource$, fromSource$);


export {
    booksObservable$,
    ofSource$,
    fromSource$,
    concatSource$
}