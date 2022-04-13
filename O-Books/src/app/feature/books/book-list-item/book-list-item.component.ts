import { Component, Input, OnInit } from '@angular/core';
import { IBook } from 'src/app/core/interfaces/book';

@Component({
  selector: 'app-book-list-item',
  templateUrl: './book-list-item.component.html',
  styleUrls: ['./book-list-item.component.css']
})
export class BookListItemComponent implements OnInit {

  @Input() book: IBook;

  constructor() { }

  ngOnInit(): void {
  }

}
