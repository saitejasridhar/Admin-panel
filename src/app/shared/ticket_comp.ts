import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { Ticket } from './ticket';

@Injectable({
  providedIn: 'root'
})
export class TicketcompService {
  formData: Ticket;

  constructor(private firestore: AngularFirestore) { }

  getTickets() {
    return this.firestore.collection('tickets_complete').snapshotChanges();
  }
}