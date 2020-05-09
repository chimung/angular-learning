import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'productPriceEasy'
})
export class ProductPriceEasyPipe implements PipeTransform {

  transform(value: number, ...args: unknown[]): string {
    return value.toString(10).split('').reverse()
      .map((digit, i) => ((i + 1) % 3 === 0) ? digit + ',' : digit)
      .reverse().join('')
  }

}
