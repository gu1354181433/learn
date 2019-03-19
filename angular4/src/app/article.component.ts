import { Component ,OnInit} from '@angular/core';
import { HttpClient,HttpHeaders,HttpRequest,HttpParams } from "@angular/common/http";
import { filter, map } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';

@Component({
    selector   : 'app-table',
    templateUrl: './article.component.html',
    styleUrls  : ['./article.component.css']
})

export class ArticleComponent implements OnInit {

     articleRequest: Observable<any>;
     list          : any;
     heroes        : any;
    constructor( private router:Router,private http:HttpClient ){
      this.articleRequest = this.http.get('/mail/a/article/search');
      console.log(this.articleRequest)
    }
    handle(ref: any): void {
      // console.log(ref.index)
      // console.log(ref.rowData)
      // console.log(ref.innerHTML)
      console.log(ref);
      // ref.destroy()
    }

    ngOnInit(): void {
      this.articleRequest.subscribe(
        data=>{
          this.list = data;
          console.log(this.list.data.articleList);

        }
      )
      console.log(this.list)
    }
}






















