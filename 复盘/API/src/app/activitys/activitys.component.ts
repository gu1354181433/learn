import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { HttpService } from '../services/http/http.service'
import { response } from '../services/common/common.namespec';
import { CommonService } from '../services/common/common.service';
@Component({
    selector: 'activity',
    templateUrl: './activitys.component.html',
    styleUrls: ['./activitys.component.scss']
  })
  export class activityComponent implements OnInit {
    constructor( private  activeRouter: ActivatedRoute,private route: Router,private routerParams: ActivatedRoute,private http: HttpService, ){}
    data:any
    dateil (id:number):void{
      this.http.articlesDateil(id).subscribe((resp: response) => {
        this.data = resp.data.article
        this.data.img = JSON.parse(resp.data.article.img)
        this.data.content = JSON.parse(resp.data.article.content)
        console.log(this.data)
    })
  }
    ngOnInit(): void {
      this.activeRouter.queryParams.subscribe(res => {
        const id = res.id
        this.dateil(id)
      })
    }
}