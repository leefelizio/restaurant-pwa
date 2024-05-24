// import { Firestore, addDoc, collection } from '@angular/fire/firestore';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { IonFooter, IonToolbar, IonButton } from '@ionic/angular/standalone';
import { TotalPricePipe } from '../../pipes/totalPricePipe/total-price.pipe';
import { LocalStorageService } from '../../services/local-storage.service';
import { FirestoreService } from '../../services/firestore.service';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [
    IonFooter,
    IonToolbar,
    IonButton,
    TotalPricePipe
  ],
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent {
  @Input() isValid!:boolean;
  @Input() value!:any;
  @Output() orderNow: EventEmitter<any[]> = new EventEmitter();
  
  constructor(private localStorageService: LocalStorageService, public firestoreService: FirestoreService) { 
    
  }

  saveToLocalStorage() {
    this.localStorageService.setItem('allOrders', JSON.stringify(this.value));
    this.retrieveFromLocalStorage()
  }

  retrieveFromLocalStorage() {
    const value = this.localStorageService.getItem('allOrders');
    value ? console.log('localStorage value', JSON.parse(value)) : null
  }
  
  // private - like below / public I can use the service directly on the HTML as firestoreService.addData(value)
  // addData(){
  //   this.firestoreService.addData(this.value)
  // }

}
