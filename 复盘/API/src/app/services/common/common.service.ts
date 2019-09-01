import { Injectable, EventEmitter } from '@angular/core';
import { HttpParams } from '@angular/common/http';
import { NzModalService, NzMessageService, NzModalRef } from 'ng-zorro-antd';
import { Observable, Observer } from 'rxjs';
import {isArray, isObject} from 'util';

@Injectable({
  providedIn: 'root'
})
export class CommonService {
  tplModalButtonLoading = false;

  constructor(private modalService: NzModalService, private message: NzMessageService) { }



  mapObjectToParams (params: Object): HttpParams {
    let httpParams = new HttpParams();
    // tslint:disable-next-line:forin
    for (const key in params) {
      console.log(params[key]);

      if (isArray(params[key] || isObject(params[key]) )) {
        httpParams = httpParams.append(key, JSON.stringify(params[key]));
      } else {
        httpParams = httpParams.append(key, params[key]);

      }

    }
    console.log(httpParams);

    return httpParams;
  }



  mapArrayToParams (params: any[], id: string): HttpParams {
    let httpParams = new HttpParams();
    // tslint:disable-next-line:forin
    for (const key in params) {
      httpParams = httpParams.append(id, params[key]);
    }
    return httpParams;
  }

  confirm(type: any, title: string, content: string , okFn: Function= () => false, callback: Function= () => false): void {
    // https://ng.ant.design/components/modal/zh#components-modal-demo-info 中可看所有效果。配合食用更佳。

    this.modalService.confirm( {
        nzTitle: title,
        nzContent: content,
        nzOnOk:  () => {
          okFn();
        }
        ,
        nzCancelText: null,
        nzMaskClosable: true},
      type
    );
    window.setTimeout(() => {
      this.modalService.closeAll();
    }, 3000);
    this.modalService.afterAllClose.subscribe(() => {
      callback();
    });
  }





  messageProp (type: string, message: string): void {
    this.message.create(type, message);
  }


  objectKeys() {
    return Object.keys;
  }

}

