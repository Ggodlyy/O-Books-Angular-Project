import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BookService } from 'src/app/core/book.service';
import { IBook } from 'src/app/core/interfaces/book';

@Component({
  selector: 'app-book-list-item-details',
  templateUrl: './book-list-item-details.component.html',
  styleUrls: ['./book-list-item-details.component.css']
})
export class BookListItemDetailsComponent implements OnInit {
  book: IBook;

  constructor(private activatedRoute: ActivatedRoute, private bookService: BookService) { }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(params => {
      const bookId = params['bookId'];
      this.bookService.loadBookById$(bookId).subscribe(book => {
        this.book = book;
        console.log(this.book);
      })
    })
  }

}
