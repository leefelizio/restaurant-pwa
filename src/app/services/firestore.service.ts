import { Injectable } from '@angular/core';
import { Firestore, addDoc, collection, collectionData, query } from '@angular/fire/firestore';

@Injectable({
  providedIn: 'root'
})
export class FirestoreService {

  constructor(private readonly _firestore: Firestore) { }

    addData(value: any){
      const collRef = collection(this._firestore, `resto-demo`);
      const newData: any = {
        order: value,
        timeStamp: Date.now()
      }
      addDoc(collRef, newData);
    }

    // loadData usage: data$ = this.firestoreService.loadData();
    loadData(){
      const refCollect = collection(this._firestore, 'resto-demo');
      const q = query(refCollect);
      return collectionData(q, {idField: 'id'})
    }
}
