import { AfterViewInit, Component, OnInit } from '@angular/core';
import { BookService } from 'src/app/core/book.service';
import { IBook } from 'src/app/core/interfaces/book';
import { IUser } from 'src/app/core/interfaces/user';
import { UserService } from 'src/app/core/user.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit, AfterViewInit {

  bookList: IBook[];
  myBookList: IBook[];

  currentUser: IUser;

  constructor(private userService: UserService, private bookService: BookService) { }

  ngOnInit(): void {
    this.userService.getProfile$().subscribe({
      next: (user) => {
        this.currentUser = user;

        this.bookService.loadBookList$().subscribe(booklist => {
          this.bookList = booklist;
          this.myBookList = this.bookList.filter(b => b.owner === this?.currentUser._id);
        });
      },
      error: (err) => {
        console.log(err);
      }
    });

  

  }

  ngAfterViewInit(): void {
   

  }

}
