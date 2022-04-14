import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { BookService } from 'src/app/core/book.service';
import { IBook } from 'src/app/core/interfaces/book';

@Component({
  selector: 'app-books-list',
  templateUrl: './books-list.component.html',
  styleUrls: ['./books-list.component.css']
})
export class BooksListComponent implements OnInit {

  bookList: IBook[];
  filteredBookList: IBook[];

  constructor(private bookService: BookService) { }

  ngOnInit(): void {
    this.bookService.loadBookList$().subscribe(booklist => {
      this.bookList = booklist;
    })
  }

  filterBooks(filterForm: NgForm) {
    let genre = filterForm.value.genre;

    if (genre === 'any') {
      this.filteredBookList = this.bookList;
      return;
    }

    this.filteredBookList = this.bookList.filter(b => b.genre === genre);
  }
}
