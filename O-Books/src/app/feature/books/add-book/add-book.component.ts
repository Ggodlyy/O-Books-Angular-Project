import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-add-book',
  templateUrl: './add-book.component.html',
  styleUrls: ['./add-book.component.css']
})
export class AddBookComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  submitBook(addBookForm: NgForm): void {
    console.log(addBookForm);
  }

}
