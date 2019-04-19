import { Component ,OnInit} from '@angular/core';
import { HttpClient,HttpHeaders,HttpRequest,HttpParams } from "@angular/common/http";
import { Observable } from 'rxjs';
import { Router, NavigationEnd, ActivatedRoute } from '@angular/router';
import 'rxjs/add/operator/filter';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/mergeMap';
const headers = new HttpHeaders().set("Content-Type", "application/x-www-form-urlencoded");
@Component({
    selector   : 'app-table',
    templateUrl: './article.component.html',
    styleUrls  : ['./article.component.css']
})

export class ArticleComponent implements OnInit {
     typeList      : any[]=['首页banner','找职位banner','找精英banner','行业大图'];
     statusA       : any[]=['','草稿','上线'];
     statusB       : any[]=['','上线','下线'];
     articleRequest: Observable<any>;
     searchOb      : Observable<any>;
     highLight     : any=1;
     list          : any;
     heroes        : any;
     paramSearch   : any={
       title   : '',
       author  : '',
       creatAt : '',
       updateAt: '',
       type    : '',
       status  : '',
       page    : 1
     }
     paramChange:any={
       id    : '',
       status: ''
     }
     input1  : any = '';
     input2  : any = '';
     date1   : any = '';
     date2   : any = '';
     select1 : any  = ' ';
     select2 : any  = ' ';
     statusC : any;
     statusId: any;
    constructor( private router:Router,private http:HttpClient,private activatedRoute: ActivatedRoute ){
      this.articleRequest = this.http.get('/mail/a/article/search');
    }
    httpSearch(){
      this.searchOb = this.http.request('get','/mail/a/article/search',{params: this.paramSearch, headers: headers});
    }
    httpDown(){
      this.searchOb = this.http.request('put','/mail/a/u/article/status',{params: this.paramChange, headers: headers});
    }
    handle(card:any,ref:any):void{
     card.toggle2 = true;
     card.ref     = ref;
    }
    handle1(ref: any): void {
      // console.log(ref.index)
      // console.log(ref.rowData)
      // console.log(ref.innerHTML)
      this.date1 = Date.parse(ref);

      console.log(ref.rowData);
      // ref.destroy()
    }
    handle2(ref: any): void {
      // console.log(ref.index)
      // console.log(ref.rowData)
      // console.log(ref.innerHTML)
      this.date2 = ref;
      console.log(ref);
      // ref.destroy()
    }
    removeItem(card:any){
      card.toggle2 = false;
      card.ref.destroy()
    }
    search(value1?:string,value2?:string,value3?:string,value4?:string,value5?:string,value6?:string){
      if(value3==value4){
      this.paramSearch={
        title   : value1,
        author  : value2,
        createAt: Date.parse(value3)-28800000,
        updateAt: Date.parse(value4)+57599000,
        type    : value6,
        status  : value5,
        page    : 1
      }
      console.log(this.paramSearch)
    }
    else{
      this.paramSearch={
        title   : value1,
        author  : value2,
        createAt: Date.parse(value3)-28800000,
        updateAt: Date.parse(value4)-28800000,
        type    : value5,
        status  : value6,
        page    : 1
      }

    }
    console.log(this.paramSearch)
    this.httpSearch();
    this.searchOb.subscribe(data=>{
      this.list = data;
      console.log(this.list)
    })
    }
    ngOnInit(): void {

      this.articleRequest.subscribe(
        data=>{
          this.list = data;
          console.log(this.list);

        }
      )

    }
    clear(){
     this.input1      = '';
     this.input2      = '';
     this.date1       = '';
     this.date2       = '';
     this.select1     = ' ';
     this.select2     = ' ';
     this.paramSearch = {
      title   : '',
      author  : '',
      createAt: Date.parse(this.date1)-28800000,
      updateAt: Date.parse(this.date2)+57599000,
      type    : ' ',
      status  : ' ',
      page    : 1
    }
    this.httpSearch();
    this.searchOb.subscribe(data=>{
      this.list = data;
      console.log(this.list)
    })
    }
    pChange(page){
      console.log(page);

      this.paramSearch.page = page;
      this.httpSearch();
      console.log(this.paramSearch)
      this.searchOb.subscribe(data=>{
      this.list = data;
      console.log(this.list)
    })
    }
    add():void{
      this.router.navigate(['main-part/add/:id']);
    }
    change(ref:any):void{
      this.router.navigate(['main-part/add',ref.rowData.id]);
      console.log(ref.rowData.id)
    }
    getDown(ref:any):void{
      this.statusC = ref.rowData.status;
      console.log(this.statusC)
      if(this.statusC==1){
        this.paramChange={
          id    : ref.rowData.id,
          status: 2
        };
        ref.rowData.status = 2;
      }
      else{
        this.paramChange={
          id    : ref.rowData.id,
          status: 1
        }
        ref.rowData.status = 1;
      }
      this.httpDown()
      this.searchOb.subscribe(data=>{

        console.log(ref.rowData.status)
      })
    }
}






















