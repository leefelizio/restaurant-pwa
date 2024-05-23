import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { HeaderComponent } from '../../components/header/header.component';
import { FooterComponent } from '../../components/footer/footer.component';
// import { FirestoreService } from '../services/firestore.service';
import { KitchenService } from '../../services/kitchen.service';

@Component({
  selector: 'app-kitchen',
  standalone: true,
  imports: [
    RouterLink,
    CommonModule,
    IonicModule,
    HeaderComponent,
    FooterComponent
  ],
  templateUrl: './kitchen.component.html',
  styleUrl: './kitchen.component.scss'
})
export class KitchenComponent {
  title!:string;
  // data$ = this.firestoreService.loadData();
  data$ = this.kitchenService.loadData();

  // constructor(public firestoreService: FirestoreService) { }
  constructor(public kitchenService: KitchenService) { }

}
