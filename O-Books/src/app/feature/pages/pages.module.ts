import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NotFoundPageComponent } from './not-found-page/not-found-page.component';
import { HomePageComponent } from './home-page/home-page.component';
import { BooksModule } from '../books/books.module';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    HomePageComponent,
    NotFoundPageComponent
  ],
  imports: [
    CommonModule,
    BooksModule,
    FormsModule,
  ]
})
export class PagesModule { }
