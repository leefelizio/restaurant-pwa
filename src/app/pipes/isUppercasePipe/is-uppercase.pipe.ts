import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'isUppercase',
  standalone: true,
})

// -- implements PipeTransform - says that it implements a interface
export class IsUppercasePipe implements PipeTransform {
  // -- ...args: unknown[] - is where I am going to say how
  // -- many parameters I will need. if more, instead of that,
  // -- param1,param2,param3

  // -- this custom pipe will do the work and to test if
  // -- it can do the work
  transform(value?: string): boolean {
    if (!value) {
      return false;
    }
    return true;
  }
}

