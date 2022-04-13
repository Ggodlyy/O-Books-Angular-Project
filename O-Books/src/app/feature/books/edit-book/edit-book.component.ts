import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { BookService } from 'src/app/core/book.service';

@Component({
  selector: 'app-edit-book',
  templateUrl: './edit-book.component.html',
  styleUrls: ['./edit-book.component.css']
})
export class EditBookComponent implements OnInit {

  errorMessage: string;

  constructor(
    private bookService: BookService,
    private router: Router,
    private activatedRoute: ActivatedRoute
  ) { }

  ngOnInit(): void {

  }

  submitBook(editBookForm: NgForm): void {
    console.log(editBookForm.value)
    this.activatedRoute.params.subscribe(params => {
      const bookId = params['bookId'];
      this.bookService.editBookById$(bookId, editBookForm.value).subscribe({
        next: (book) => {
          console.log(book);
          this.router.navigate(['/library']);
        },
        error: (err) => {
          this.errorMessage = err.error.message;
        }
      })
    })
  }
}
