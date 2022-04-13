import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { BookService } from 'src/app/core/book.service';

@Component({
  selector: 'app-add-book',
  templateUrl: './add-book.component.html',
  styleUrls: ['./add-book.component.css']
})
export class AddBookComponent implements OnInit {

  errorMessage: string;

  constructor(private bookService: BookService) { }

  ngOnInit(): void {
  }

  submitBook(addBookForm: NgForm): void {
    this.bookService.addBook$(addBookForm.value).subscribe({
      next: (book) => {
        console.log(book);
      },
      error: (err) => {
        this.errorMessage = err.error.message;
      }
    })
  }

}
