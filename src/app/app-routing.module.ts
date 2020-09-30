import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AddBookComponent } from './components/add-book/add-book.component';
import { BookListComponent } from './components/book-list/book-list.component';
import { EditBookComponent } from './components/edit-book/edit-book.component';
import { TicketsViewComponent } from './components/tickets-view/tickets-view.component';
import { UsersViewComponent } from './components/users-view/users-view.component';
import { TicketInprogressComponent } from './components/ticket-inprogress/ticket-inprogress.component';
import { TicketCompletedComponent } from './components/ticket-completed/ticket-completed.component';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'add-book' },
  { path: 'add-book', component: AddBookComponent },
  { path: 'edit-book/:id', component: EditBookComponent },
  { path: 'books-list', component: BookListComponent },
  {path:'tickets-view',component: TicketsViewComponent},
  { path:'users-view',component:UsersViewComponent},
  { path:'ticket-inprogress',component:TicketInprogressComponent},
   { path:'ticket-completed',component:TicketCompletedComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }