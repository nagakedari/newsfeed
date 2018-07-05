import { Pipe, PipeTransform } from '@angular/core';
import { SlicePipe } from '@angular/common';
import { NO_OF_LINKS } from '../utility/app-contants';

@Pipe({
  name: 'arrayslice'
})
export class ArraySlicePipe implements PipeTransform {

  constructor(private _slicePipe: SlicePipe){}

  transform(value: any[]): any[] {
    return this._slicePipe.transform(value, 0, NO_OF_LINKS);
  }

}
