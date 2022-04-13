import { Component, OnInit } from '@angular/core';
import { BookService } from 'src/app/core/book.service';
import { IBook } from 'src/app/core/interfaces/book';

@Component({
  selector: 'app-books-list',
  templateUrl: './books-list.component.html',
  styleUrls: ['./books-list.component.css']
})
export class BooksListComponent implements OnInit {

  bookList: IBook[];

  constructor(private bookService: BookService) { }

  ngOnInit(): void {
    // this.bookService.loadBookList$()
  }

}
