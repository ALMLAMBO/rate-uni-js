import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'base64'
})
export class Base64Pipe implements PipeTransform {
  transform(value: any, ...args: any[]): string {
    let base64 = value as string;
    return `data:image/jpeg;base64,${base64}`;
  }
}
