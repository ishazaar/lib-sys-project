import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatButtonModule } from '@angular/material/button';
import { BookService } from '../../services/book'; // Added .service
import { Book } from '../../models/book.model';

@Component({
  selector: 'app-borrow-book',
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatButtonModule
  ],
  templateUrl: './borrow-book.html', // Added .component
  styleUrls: ['./borrow-book.css']  // Added .component
})
export class BorrowBookComponent implements OnInit {
  borrowForm!: FormGroup;
  availableBooks: Book[] = [];

  constructor(private fb: FormBuilder, private bookService: BookService) {}

  ngOnInit(): void {
    // Filter books from the service
    this.availableBooks = this.bookService.books.filter(b => b.isAvailable);

    this.borrowForm = this.fb.group({
      bookId: ['', Validators.required],
      memberId: ['', [Validators.required, Validators.pattern('^[0-9]*$')]],
      borrowDate: [new Date().toISOString().substring(0, 10), Validators.required]
    });
  }

  onSubmit(): void {
  if (this.borrowForm.valid) {
    // Convert string ID to number using Number()
    const selectedBookId = Number(this.borrowForm.value.bookId);

    // This call will now work without the TS2339 error
    this.bookService.toggleAvailability(selectedBookId);

    alert('Book borrowed successfully!');
    this.borrowForm.reset();

    // Refresh the local list using the service data
    this.availableBooks = this.bookService.books.filter(b => b.isAvailable);
  }
}
}
