import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'state'
})
export class StatePipe implements PipeTransform {

  transform(value: any, args?: any): any {
    if( value == 1){
      return value  = '下架'  ;
    }
    else {
      return value  = '上架'
    }
  }

}
