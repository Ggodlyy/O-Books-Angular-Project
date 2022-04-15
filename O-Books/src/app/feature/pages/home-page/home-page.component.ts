import { Component, OnInit } from '@angular/core';
import { BookService } from 'src/app/core/book.service';
import { IBook } from 'src/app/core/interfaces/book';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent implements OnInit {

  book: IBook;
  searchPressed: boolean;

  constructor(private bookService: BookService) { }

  ngOnInit(): void {
  }

  searchHandler(searchForm) {
    this.searchPressed = true;
    let searchValue = searchForm.value.search;

    if (searchValue === '') {
      this.book = undefined;
      return;
    }

    this.bookService.loadBookList$().subscribe(bookList => {
      let pattern = new RegExp(searchValue, 'i');
      const myBookList = bookList.slice();
     
      for (let i = 0; i < myBookList.length; i++) {
        let currentBook = myBookList[i];

        if(pattern.test(currentBook.title)) {
          this.book = currentBook;
          break;
        }
      }
    
    })

  }
}
