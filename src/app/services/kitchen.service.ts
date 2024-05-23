import { Injectable } from '@angular/core';
import { FirestoreService } from './firestore.service';
import { ApiService } from './api.service';
import { map, switchMap } from 'rxjs';

// On this file, we mix the JSON with the DATABASE
// on the database we have only the quantity and the UUID
// that is enough. it is cheaper to have less things on the DB
// then here we can get the rest of the details on the JSON
// having the ID by reference

// it is better to have this code inside a service instead of
// a pipe because pipe I would do the query line by line when using it
// here we do just once
@Injectable({
  providedIn: 'root'
})
export class KitchenService {

  constructor(
    private readonly firestoreService: FirestoreService,
    private readonly apiService: ApiService
  ) { }

  loadData(){
    // this.firestoreService.loadData() is a observable
    // pipe, I can enter on my observable/ on my data and 
    // to do something (almost like a then() in a promise)
    // that I can do something before the return
    // flatMap if you have an array inside an array
    return this.firestoreService.loadData().pipe(
      switchMap(async(datas) => {
        const apiData =  await this.apiService.getData();

        // here we go trhough all the orders
        return datas.flatMap((order:any) => {

          // here all the recipe values
          const value = order['order'].map(async (item: any) => {

            // search the category that corresponds to the recipe uuid
           const category = apiData.data.find(
            cat => cat.itemUuids.find(
              (uuid: any) => item.recipe.uuid
              )
            );

            // here we search the detail of the recipe that is on that category
            const recipeFull = category.recipes.find((recipe: any) => recipe.uuid === item.recipe.uuid
            );
            // here instead of returning a string for recipe, I return the full object
            return {
              quantity: item.quantity,
              recipe: recipeFull
            };
          });
          return {
            ...order,
            value
          };
        });
      })
    )
  }


}
