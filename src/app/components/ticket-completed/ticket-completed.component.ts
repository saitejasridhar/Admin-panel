import { Component, OnInit, ViewChild } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { TicketcompService } from 'src/app/shared/ticket_comp'
import { Ticket } from 'src/app/shared/ticket';
import { MatPaginator, MatTableDataSource } from '@angular/material';

@Component({
  selector: 'app-ticket-completed',
  templateUrl: './ticket-completed.component.html',
  styleUrls: ['./ticket-completed.component.css']
})
export class TicketCompletedComponent implements OnInit {


  dataSource: MatTableDataSource<Ticket>;
  @ViewChild(MatPaginator) paginator: MatPaginator;
    list: Ticket[];
    constructor(private service: TicketcompService,
      private firestore: AngularFirestore
      ) { }
  
    ngOnInit() {
      this.service.getTickets().subscribe(actionArray => {
        this.list = actionArray.map(item => {
          return {
            id: item.payload.doc.id,
            ...item.payload.doc.data() as Ticket
          } ;
        })
      });
    }
  
 

 
    onInprogress(id:string)

    {
      this.firestore.doc('tickets_complete/' + id).delete();

    }
  
  
  
  }





