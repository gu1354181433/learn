import { Component, OnInit } from '@angular/core';
import { Observable, Observer } from 'rxjs';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { HttpClient, HttpHeaders, HttpRequest, HttpParams } from "@angular/common/http";
import { HttpService } from "../../http/http.service"
import { DatePipe } from '@angular/common';
@Component({
  selector   : 'app-add-comment',
  templateUrl: './add-comment.component.html',
  styleUrls  : ['./add-comment.component.scss']
})
export class AddCommentComponent implements OnInit {
  floors     : any;
  name       : any;
  source     : any;
  sourceTitle: any;
  startDate  : any;
  changeDate : any;
  commentMain: any;
  statusData : any = ['全部','正常', '屏蔽'];
  status     : any = '正常';
  params     : any;
  hide       : any = false;
  userId     : any;
  paramsName : any;
  sourceData : any=['全部','文章区','视频区'];
  user       : any;
  umeditor   : any='123';
  constructor( private route: ActivatedRoute, private router :Router,private http:HttpService, private datePipe: DatePipe) { }

  ngOnInit() {
    this.userId     = +this.route.snapshot.params.id;
    this.paramsName = this.route.snapshot.queryParams["name"];
    this.http.commentDetail(this.userId).subscribe(
      (data:any) => {
        console.log(data.data.comment)
        this.user        = data.data.comment
        this.floors      = this.user.commentId+'#';
        this.name        = this.user.author;
        this.source      = this.sourceData[this.user.classify];
        this.sourceTitle = this.user.workName;
        this.startDate   = this.datePipe.transform(this.user.createAt, 'yyyy-MM-dd HH:mm:ss');
        this.changeDate  = this.datePipe.transform(this.user.updateAt, 'yyyy-MM-dd HH:mm:ss');
        this.commentMain = this.user.content;
        this.status      = this.statusData[this.user.commentState];
      }
    )
    if(this.paramsName){
        this.hide = true;
    }
  }
  cancel(){
    this.router.navigate(['home/comment'])
  }
  save() {
    // this.params={
    //   content     : this.commentMain,
    //   commentState: this.statusData.indexOf(this.status)
    // }
    // this.http.commentSave(this.userId,this.params).subscribe(
    //   (data:any) => {
    //     console.log(data)
    //   }
    // )
    console.log(this.commentMain)
  }
  umeditorData(){
    console.log(this.umeditor)
  }
}

