import { Component } from '@angular/core';
import {
  FormArray,
  FormGroup,
  FormControl,
  Validators,
} from '@angular/forms';
import { ActivatedRoute, RouterLink, RouterOutlet } from '@angular/router';
import { HeaderComponent } from '../../components/header/header.component';
import { CommonModule } from '@angular/common';
import {
  ReactiveFormsModule,
} from '@angular/forms';
import { FilterByCategoryPipe } from '../../pipes/filterByCategoryPipe/filter-by-category.pipe';
import { TotalPricePipe } from '../../pipes/totalPricePipe/total-price.pipe';
import { ApiService } from '../../services/api.service';
import { IonHeader, IonSplitPane, IonMenu, IonToolbar, IonTitle, IonList, IonItem, IonLabel, IonContent, IonGrid, IonRow, IonCol, IonAvatar, IonButton, IonSkeletonText, IonListHeader, IonThumbnail } from '@ionic/angular/standalone';
import { FooterComponent } from '../../components/footer/footer.component';
import {  } from '@ionic/angular';
// import { LocalStorageService } from '../../services/local-storage.service';

@Component({ selector: 'app-home',
    standalone: true,
    templateUrl: './home.component.html',
    styleUrl: './home.component.scss', 
    imports: [
      RouterOutlet,
      IonHeader, 
      IonSplitPane, 
      IonMenu, 
      IonToolbar, 
      IonTitle, 
      IonList, 
      IonItem, 
      IonThumbnail, 
      IonLabel, 
      IonContent, 
      IonGrid, 
      IonRow, 
      IonCol, 
      IonAvatar, 
      IonButton, 
      IonSkeletonText,
      IonListHeader, 
      RouterLink,
      HeaderComponent,
      FooterComponent,
      CommonModule,
      FilterByCategoryPipe,
      TotalPricePipe,
      ReactiveFormsModule
      ], 
  })
export class HomeComponent {
  title!: string;
  categories!: any[]; 
  selectedCategorie!: any; 
  // orderForm: FormArray<
  //   FormGroup<{
  //     quantity: FormControl;
  //     recipe: FormGroup<{
  //       uuid: FormControl;
  //       price: FormControl;
  //     }>;
  //   }>
  // > = new FormArray(
    // [],
    // Validators.compose([
    //   Validators.required,
    //   // Validators.minLength(2),
    //   // Validators.maxLength(3),
    // ])
  // ) as any;
  orderForm: FormArray<any> = new FormArray<any>([],
    Validators.compose([
      Validators.required,
      Validators.minLength(2),
      Validators.maxLength(3),
    ]));

    // skeleton ux while loading
    public loaded = false;

  constructor(apiService: ApiService, route: ActivatedRoute ) {
    // console.log('route data', route.data);
    // console.log('data', route.snapshot.data);
    // if i have a Observable or a promise I should use FirstValue(data)

    apiService.getData().then((database) => {
      // console.log('database', database);
      // to do a skeleton test, deactivate data below
      this.title = database.title;
      this.categories = database.data;
      this.selectedCategorie = database.data[0];
    });

    // console.log(this.orderForm);
    // console.log(this.orderForm.value);
    this.orderForm.markAsTouched();
  }

  handleClick($event: any) {
    // console.log(this.orderForm);
    if (!this.orderForm.valid) {
      return;
    }
  }

  handleButtonClicked($event: any) {
    console.log($event);
  }

  addToCart(recipe: any) {
    const index = this.orderForm.value.findIndex((r:any) => {
      return r?.recipe?.uuid === recipe.uuid;
    });
    if (index >= 0) {
      // change quantity FormControl value form correct element
      const control = this.orderForm.at(index);
      if (!control) {
        throw new Error('form control not exist');
      }
      // console.log('control', control);
      control.patchValue({ quantity: ++control.value.quantity });
    } else {
      // create new FormGroup to validate data
      const control = new FormGroup({
        quantity: new FormControl(
          1,
          Validators.compose([Validators.required, Validators.min(1)])
        ),
        recipe: new FormGroup({
          price: new FormControl(
            recipe.price,
            Validators.compose([Validators.required, Validators.min(1)])
          ),
          uuid: new FormControl(recipe.uuid),
        }),
      });
      // add FromGroup to FormArray
      this.orderForm.push(control);
    }
  }

}
