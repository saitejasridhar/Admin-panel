import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { User } from './user';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  formData: User;

  constructor(private firestore: AngularFirestore) { }

  getTickets() {
    return this.firestore.collection('users').snapshotChanges();
  }
}