import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BooksListComponent } from './books-list/books-list.component';
import { BookRoutingModule } from './books-routing.module';
import { BookListItemComponent } from './book-list-item/book-list-item.component';
import { AddBookComponent } from './add-book/add-book.component';
import { FormsModule } from '@angular/forms';
import { BookListItemDetailsComponent } from './book-list-item-details/book-list-item-details.component';
import { EditBookComponent } from './edit-book/edit-book.component';



@NgModule({
  declarations: [
    BooksListComponent,
    BookListItemComponent,
    AddBookComponent,
    BookListItemDetailsComponent,
    EditBookComponent,
  ],
  imports: [
    CommonModule,
    BookRoutingModule,
    FormsModule
  ],
  exports: [
    BookListItemComponent
  ]
})
export class BooksModule { }
