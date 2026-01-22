import { Injectable } from '@angular/core';
import { Book } from '../models/book.model';

@Injectable({
  providedIn: 'root'
})
export class BookService {
  // Mock data as specified in the approach
  public books: Book[] = [
    { id: 101, title: 'Clean Code', author: 'Robert Martin', isAvailable: true },
    { id: 102, title: 'Angular in Action', author: 'Jeremy Wilken', isAvailable: false },
    { id: 103, title: 'TypeScript Masterclass', author: 'Anders Hejlsberg', isAvailable: true }
  ];

  // This method handles both Borrowing and Returning
  public toggleAvailability(bookId: number): void {
    const book = this.books.find(b => b.id === bookId);
    if (book) {
      book.isAvailable = !book.isAvailable;
    }
  }

  public getBooks(): Book[] {
    return this.books;
  }
}
