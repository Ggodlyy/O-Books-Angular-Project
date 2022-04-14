import { AfterViewInit, Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
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
  likes: number;
  canLike: boolean = true;

  constructor(
    private activatedRoute: ActivatedRoute,
    private bookService: BookService,
    private userService: UserService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(params => {
      const bookId = params['bookId'];
      this.bookService.loadBookById$(bookId).subscribe(book => {
        this.book = book;
        this.likes = this.book.likes.length;

        if (this.book.owner === this.currentUser?._id) {
          this.isOwner = true;
        }
      })
    });
  }

  deleteBook() {
    this.activatedRoute.params.subscribe(params => {
      const bookId = params['bookId'];
      this.bookService.removeBook$(bookId).subscribe(result => {
        console.log(result)
        this.router.navigate(['/library']);
      });
    });
  }

  likeBook() {

    if (this.book.likes.includes(this.currentUser?._id)) {
      this.canLike = false;
      return;
    }

    this.activatedRoute.params.subscribe(params => {
      const bookId = params['bookId'];

      this.bookService.likeBook$(bookId).subscribe({
        next: data => {
          console.log(data);
          console.log(this.currentUser);

          if (!this.book.likes.includes(this.currentUser?._id)) {
            this.likes++;
            this.canLike = false;
          }
        },
        error: (err) => {
          console.log(err);
        }
      });
    });
  }

}
