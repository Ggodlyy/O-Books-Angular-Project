import { RouterModule, Routes } from "@angular/router";
import { BooksListComponent } from "./books-list/books-list.component";




const routes: Routes = [
    {
        path: 'library',
        component: BooksListComponent
    },
   
   
];

export const BookRoutingModule = RouterModule.forChild(routes);