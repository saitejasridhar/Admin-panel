import { Component, OnInit, ViewChild } from '@angular/core';
import { COMMA, ENTER } from '@angular/cdk/keycodes';
import { MatChipInputEvent } from '@angular/material';
import { BookService } from './../../shared/book.service';
import { AngularFireStorage } from '@angular/fire/storage';
import { FormGroup, FormBuilder, Validators } from "@angular/forms";
import { finalize } from "rxjs/operators";
import { AngularFirestore } from '@angular/fire/firestore';
import { TicketService } from 'src/app/shared/ticket.service';
import { Ticket } from 'src/app/shared/ticket';
import { MatPaginator, MatTableDataSource } from '@angular/material';
import { empty } from 'rxjs';



@Component({
  selector: 'app-tickets-view',
  templateUrl: './tickets-view.component.html',
  styleUrls: ['./tickets-view.component.css']
})
export class TicketsViewComponent implements OnInit {


  dataSource: MatTableDataSource<Ticket>;
  @ViewChild(MatPaginator) paginator: MatPaginator;
    list: Ticket[];
    constructor(private service: TicketService,
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
  
 
    onInprogress(id:string,userid:string,name:string,email:string,phone:string,address:string,issue:string,issue_desc:string,image:string,image1:string,time:string)

    {
      if(image1==null)
      image1="https://firebasestorage.googleapis.com/v0/b/ticket-issue-app-48d42.appspot.com/o/noimage.png?alt=media&token=76fe2716-efcb-44b3-8a4f-485cd876e5ac";

      this.firestore.collection('tickets_pending').doc(id).set({'name':name,'email':email,'phone':phone,'taddress':address,'tissue':issue,'tissue_desc':issue_desc,'image0':image,'image1':image1,'ttime':time,'userid':userid})
      this.firestore.doc('tickets/' + id).delete();
    }

    oncomplete(id:string,userid:string,name:string,phone:string,email:string,address:string,issue:string,issue_desc:string,image:string,image1:string,time:string)
    {
      if(image1==null)
      image1="https://firebasestorage.googleapis.com/v0/b/ticket-issue-app-48d42.appspot.com/o/noimage.png?alt=media&token=76fe2716-efcb-44b3-8a4f-485cd876e5ac";
      this.firestore.doc('tickets/' + id).delete();
      this.firestore.collection('tickets_complete').doc(id).set({'name':name,'email':email,'phone':phone,'taddress':address,'tissue':issue,'tissue_desc':issue_desc,'image0':image,'image1':image1,'ttime':time,'userid':userid})

    }
  
  
  }

