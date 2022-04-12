import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BooksListComponent } from './books-list/books-list.component';
import { BookRoutingModule } from './books-routing.module';
import { BookListItemComponent } from './book-list-item/book-list-item.component';



@NgModule({
  declarations: [
    BooksListComponent,
    BookListItemComponent
  ],
  imports: [
    CommonModule,
    BookRoutingModule
  ]
})
export class BooksModule { }
