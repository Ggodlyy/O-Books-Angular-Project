import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-edit-book',
  templateUrl: './edit-book.component.html',
  styleUrls: ['./edit-book.component.css']
})
export class EditBookComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  submitBook(editBookForm: NgForm): void {
    console.log(editBookForm)
    // this.bookService.addBook$(addBookForm.value).subscribe({
    //   next: (book) => {
    //     console.log(book);
    //     this.router.navigate(['/library']);
    //   },
    //   error: (err) => {
    //     this.errorMessage = err.error.message;
    //   }
    // })
  }

}
