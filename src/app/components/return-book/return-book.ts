import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { MatButtonModule } from '@angular/material/button';
import { BookService } from '../../services/book';
import { Book } from '../../models/book.model';

@Component({
  selector: 'app-return-book',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, MatFormFieldModule, MatSelectModule, MatButtonModule],
  templateUrl: './return-book.html',
  styleUrl: './return-book.css'
})
export class ReturnBookComponent implements OnInit {
  returnForm!: FormGroup;
  borrowedBooks: Book[] = [];

  constructor(private fb: FormBuilder, private bookService: BookService) {}

  ngOnInit(): void {
    this.refreshBorrowedList();
    this.returnForm = this.fb.group({
      bookId: ['', Validators.required]
    });
  }

  refreshBorrowedList(): void {
    // Uses *ngIf logic: only show books that are NOT available
    this.borrowedBooks = this.bookService.books.filter(b => !b.isAvailable);
  }

  onSubmit(): void {
    if (this.returnForm.valid) {
      // Fixes TS2339 by ensuring ID is a number and method exists
      const id = Number(this.returnForm.value.bookId);
      this.bookService.toggleAvailability(id);

      alert('Book successfully returned!');
      this.returnForm.reset();
      this.refreshBorrowedList();
    }
  }
}
