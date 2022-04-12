import { RouterModule, Routes } from "@angular/router";
import { AddBookComponent } from "./add-book/add-book.component";
import { BooksListComponent } from "./books-list/books-list.component";




const routes: Routes = [
    {
        path: 'library',
        component: BooksListComponent
    },
    {
        path: 'add-book',
        component: AddBookComponent
    }
   
   
];

export const BookRoutingModule = RouterModule.forChild(routes);