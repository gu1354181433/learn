import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class RoleService {

  constructor() { }

  mapTreeListToParams (checkList: any, halfList: any): any[] {
    const subArr = [];
    const checkedArr = checkList;
    const halfCheckedArr = halfList;
    checkedArr.forEach((element: {key: string, children: [{key: string}]}) => {
      subArr.push(element.key);
      if (element.children) {
        element.children.forEach((el: {key: string, children: [{key: string}]}) => {
          subArr.push(el.key);
        });
      }
    });
    halfCheckedArr.forEach((element: {key: string}) => {
      subArr.push(element.key);
    });
   return subArr;
  }
}
