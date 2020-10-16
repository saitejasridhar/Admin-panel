import { Component, OnInit, ViewChild } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { TicketprogService } from 'src/app/shared/ticket_inprog'
import { Ticket } from 'src/app/shared/ticket';
import { MatPaginator, MatTableDataSource } from '@angular/material';



@Component({
  selector: 'app-ticket-inprogress',
  templateUrl: './ticket-inprogress.component.html',
  styleUrls: ['./ticket-inprogress.component.css']
})
export class TicketInprogressComponent implements OnInit {


  dataSource: MatTableDataSource<Ticket>;
  @ViewChild(MatPaginator) paginator: MatPaginator;
    list: Ticket[];
    constructor(private service: TicketprogService,
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
  
 

    oncomp(id:string,userid:string,name:string,phone:string,email:string,address:string,issue:string,issue_desc:string,image:string,image1:string,time:string)
    {
     
      this.firestore.collection('tickets_complete').doc(id).set({'name':name,'phone':phone,'email':email,'taddress':address,'tissue':issue,'tissue_desc':issue_desc,'image0':image,'image1':image1,'ttime':time,'userid':userid});
      this.firestore.doc('tickets_pending/' + id).delete();

    }
  
  
  
  }


