import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'joinjsonstring'
})
export class JsonPipe implements PipeTransform {

  transform(value: any[]): any {
    if (value instanceof Array) {
      return value.join('\n');
    }
    return value;
  }

}
