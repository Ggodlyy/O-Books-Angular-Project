import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { BookService } from 'src/app/core/book.service';

@Component({
  selector: 'app-add-book',
  templateUrl: './add-book.component.html',
  styleUrls: ['./add-book.component.css']
})
export class AddBookComponent implements OnInit {

  errorMessage: string;

  constructor(private bookService: BookService, private router: Router) { }

  ngOnInit(): void {
  }

  submitBook(addBookForm: NgForm): void {
    this.bookService.addBook$(addBookForm.value).subscribe({
      next: (book) => {
        console.log(book);
        this.router.navigate(['/library']);
      },
      error: (err) => {
        this.errorMessage = err.error.message;
      }
    })
  }

}
