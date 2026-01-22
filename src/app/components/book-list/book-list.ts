import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { BookService } from '../../services/book';
import { Book } from '../../models/book.model';

@Component({
  selector: 'app-book-list',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './book-list.html',
  styleUrl: './book-list.css'
})
export class BookListComponent implements OnInit {
  displayBooks: Book[] = [];

  constructor(private bookService: BookService) {}

  ngOnInit(): void {
    // This pulls the array from your service
    this.displayBooks = this.bookService.books;
  }
}
