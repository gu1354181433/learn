import { Component, OnInit } from '@angular/core';
import { Router, NavigationEnd, ActivatedRoute } from '@angular/router';
import { HttpClient, HttpHeaders, HttpRequest, HttpParams } from "@angular/common/http";
import { HttpService } from "../../http/http.service"

@Component({
  selector   : 'app-comment',
  templateUrl: './comment.component.html',
  styleUrls  : ['./comment.component.scss']
})
export class CommentComponent implements OnInit {
  dateFormat = 'yyyy/MM/dd';
  status     = '全部';
  statusData = ['全部', '正常', '屏蔽'];
  sourceData = ['全部', '视频', '文章'];
  source     = '全部';
  title     : any;
  main      : any;
  name      : any;
  startDate : any;
  endDate   : any;
  params    : any;
  viewParam : any = 'detail';
  listOfData: any      = [];
  constructor(private router: Router, private http: HttpService) {
  }

  deleteRow(key: string): void {
    this.listOfData = this.listOfData.filter(d => d.commentId !== key);
  }
  add(id: string,params?:any) {
    console.log(id)
    this.router.navigate(['./home/add-comment', id], { queryParams: { name: params } })
  }
  videoAdd() {
    this.router.navigate(['./home/add/'])
  }

  ngOnInit() {
    this.http.commentSearch().subscribe(
      (data: any) => {
        this.listOfData = data.data.commentList;

        console.log(this.listOfData);

      }
    )
  }
  search() {
    this.params = {
      classify    : this.sourceData.indexOf(this.source),
      worksName   : this.title,
      content     : this.main,
      author      : this.name,
      createAt    : this.startDate.valueOf(),
      commentState: this.statusData.indexOf(this.status)
    }
    this.http.commentSearch(this.params).subscribe(
      (data: any) => {
        this.listOfData = data.data.comment;

        console.log(data.message);

      }
    )
  }
  reset(){
  window.location.reload();
  }
}
