import { AfterViewInit, Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BookService } from 'src/app/core/book.service';
import { IBook } from 'src/app/core/interfaces/book';
import { UserService } from 'src/app/core/user.service';

@Component({
  selector: 'app-book-list-item-details',
  templateUrl: './book-list-item-details.component.html',
  styleUrls: ['./book-list-item-details.component.css']
})
export class BookListItemDetailsComponent implements OnInit {
  book: IBook;
  
  isOwner: boolean = false;
  isLoggedIn: boolean = this.userService.isLogged;
  currentUser = this.userService.currentUser;

  constructor(
    private activatedRoute: ActivatedRoute,
    private bookService: BookService,
    private userService: UserService
  ) { }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(params => {
      const bookId = params['bookId'];
      this.bookService.loadBookById$(bookId).subscribe(book => {
        this.book = book;
        console.log(this.currentUser);
        if(this.book.owner === this.currentUser?._id) {
          this.isOwner = true;
        }
      })
    })
  }




}
