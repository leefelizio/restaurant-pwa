import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'totalPrice',
  standalone: true,
})
export class TotalPricePipe implements PipeTransform {
  transform(value: { quantity: number; recipe: { price: number } }[]): number {
    const total = value?.reduce((prev, current) => {
      return prev + current.quantity * current.recipe.price;
    },
    // prev by default is 0 - reduce() is one function and a default value
    0);
    return total / 100;
  }
}
