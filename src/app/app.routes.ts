import { Routes } from '@angular/router';
import { BookListComponent } from './components/book-list/book-list';
import { BorrowBookComponent } from './components/borrow-book/borrow-book';
import { ReturnBookComponent } from './components/return-book/return-book';

export const routes: Routes = [
  { path: '', component: BookListComponent }, // This makes it the home page
  { path: 'books', component: BookListComponent },
  { path: 'borrow', component: BorrowBookComponent },
  { path: 'return', component: ReturnBookComponent }
];
