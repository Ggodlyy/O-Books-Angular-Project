import { RouterModule, Routes } from "@angular/router";
import { AuthGuard } from "src/app/core/guards/auth.guard";
import { AddBookComponent } from "./add-book/add-book.component";
import { BookListItemDetailsComponent } from "./book-list-item-details/book-list-item-details.component";
import { BooksListComponent } from "./books-list/books-list.component";
import { EditBookComponent } from "./edit-book/edit-book.component";




const routes: Routes = [
    {
        path: 'library',
        component: BooksListComponent
    },
    {
        path: 'add-book',
        canActivate: [AuthGuard],
        component: AddBookComponent
    },
    {
        path: 'library/:bookId',
        component: BookListItemDetailsComponent
    },
    {
        path: 'edit/:bookId',
        canActivate: [AuthGuard],
        component: EditBookComponent
    }
   
   
];

export const BookRoutingModule = RouterModule.forChild(routes);