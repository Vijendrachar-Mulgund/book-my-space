import { AngularFirestore } from '@angular/fire/firestore';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class RequestSubmitService {

  constructor(private afs: AngularFirestore) { }

  saveReqToDataBase(theRequest) {
    return this.afs.collection('/OwnerprivilegeReqForm').add(theRequest);
  }

}
