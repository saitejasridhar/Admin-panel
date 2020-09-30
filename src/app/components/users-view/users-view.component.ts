import { Component, OnInit, ViewChild } from '@angular/core';
import { COMMA, ENTER } from '@angular/cdk/keycodes';
import { MatChipInputEvent } from '@angular/material';
import { BookService } from './../../shared/book.service';
import { AngularFireStorage } from '@angular/fire/storage';
import { FormGroup, FormBuilder, Validators } from "@angular/forms";
import { finalize } from "rxjs/operators";
import { AngularFirestore } from '@angular/fire/firestore';
import { UserService } from 'src/app/shared/user.service';
import { User } from 'src/app/shared/user';
import { MatPaginator, MatTableDataSource } from '@angular/material';



@Component({
  selector: 'app-users-view',
  templateUrl: './users-view.component.html',
  styleUrls: ['./users-view.component.css']
})
export class UsersViewComponent implements OnInit {


  dataSource: MatTableDataSource<User>;
  @ViewChild(MatPaginator) paginator: MatPaginator;
    list: User[];
    constructor(private service: UserService,
      private firestore: AngularFirestore
      ) { }
  
    ngOnInit() {
      this.service.getTickets().subscribe(actionArray => {
        this.list = actionArray.map(item => {
          return {
            id: item.payload.doc.id,
            ...item.payload.doc.data() as User
          } ;
        })
      });
    }
  
    onEdit(emp: User) {
      this.service.formData = Object.assign({}, emp);
    }
  
    onDelete(id: string) {
      if (confirm("Are you sure to delete this record?")) {
        this.firestore.doc('users/' + id).delete();
      }
    }
  
  }


