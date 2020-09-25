import { AngularFirestore } from '@angular/fire/firestore';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ContactUsService {

  constructor(private afs: AngularFirestore) {

  }

  submitFeedback(content) {
    return this.afs.collection('/contactUsData').add(content);
  }
}
