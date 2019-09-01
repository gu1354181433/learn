import { Component, OnInit, DoCheck } from '@angular/core';
import { HttpService } from "../../http/http.service";
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { ModalService } from 'ng-zorro-antd-mobile';
import { HttpClient, HttpHeaders, HttpRequest, HttpParams } from "@angular/common/http";
@Component({
  selector   : 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls  : ['./detail.component.scss']
})
export class DetailComponent implements OnInit, DoCheck {

  id          : any;
  time        : any;
  data        : any;
  today       : any = new Date();
  view        : any;
  title       : any;
  changeColor : any = false;
  commentParam: any;
  params      : any = {
    subjectId: 1
  };
  header     : any;
  likes      : any;
  dataList   : any;
  img        : any = "../../../assets/1441938430568.jpg";
  commentList: any = [];
  reload     : any = false;
  commentWord: any;
  addParams  : any;
  parentId   : any;
  constructor(private router: Router, private http: HttpService, private route: ActivatedRoute, private _modal: ModalService) { }

  ngOnInit() {
          this.id = +this.route.snapshot.params.id;
    const headers = new HttpHeaders().set("id", this.id);
    this.http.videoDetail(this.id, headers).subscribe(
      (data: any) => {
        this.data  = data.data;
        this.title = this.data.title;
        this.view  = this.data.watchCount;
        this.time  = new Date(data.data.createAt);
        this.time  = this.timeVs(this.time, this.today);
        console.log(this.data);
      }
    )
    this.http.videoList().subscribe(
      (data: any) => {
        this.dataList = data.data;
        console.log(this.dataList);

      }
    )
  }
  date(date: any) {
    const  year  = date.getFullYear();
    const  month = date.getMonth() + 1;
    const  day   = date.getDate();
    return date  = year + '-' + month + '-' + day;
  }
  timeVs(time: any, today: any) {
    const year    = time.getFullYear()
    const month   = time.getMonth() + 1;
    const day     = time.getDate();
    const yearNum = today.getFullYear() - time.getFullYear();
          time    = this.date(this.time);
          today   = this.date(this.today);
    //转换成年月日字符串 上面是都是时间操作
    const yst = new Date(time).getTime();
    const tod = new Date(today).getTime() + 86400000 - 1;
    const num = tod - yst;

    if (time == today) {
      if (num < 3600000) {
        return time = num / 60000 + '分钟前';
      }
      else {
        return time = num / 3600000 + '小时前';
      }
    }
    else {
      if (num < 172800000) {
        return time = "昨天"
      }
      else {
        if (yearNum == 0) {
          return time = month + '月' + day + '日'
        }
        else {
          return time = year + '年' + month + '月' + day + '日'
        }
      }
    }
  }
  hit(event) {
    const color = event.target.style.color;
    if (color == "red") {
      event.target.style = "color:#b8b8b8"
      this.data.likes--;
    }
    else {
      event.target.style = "color:red!important";
      this.data.likes++;
    }
  }
  like(event) {
    const color = event.target.style.color;
    if (color == "red") {
      event.target.style = "color:#b8b8b8"
      this.data.collectionCount--;
    }
    else {
      event.target.style = "color:red!important";
      this.data.collectionCount++;
    }
  }
  hitBest(event, id: any) {
    const color = event.target.style.color;
    if (color == "red") {
      event.target.style = "color:#b8b8b8"
      this.dataList.forEach((d, index) => {
        if (d.videoID == id) {
          d.collection--;
        }
      });
    }
    else {
      event.target.style = "color:red";
      this.dataList.forEach((d, index) => {
        if (d.videoID == id) {
          d.collection++;
        }
      });
    }
  }
  likeBest(event, id: any) {
    const color = event.target.style.color;
    if (color == "red") {
      event.target.style = "color:#b8b8b8"
      this.dataList.forEach((d, index) => {
        if (d.videoID == id) {
          d.likes--;
        }
      });
    }
    else {
      event.target.style = "color:red";
      this.dataList.forEach((d, index) => {
        if (d.videoID == id) {
          d.likes++;
        }
      });
    }
  }
  state = {
    modal1: false,
    modal2: false,
    modal3: false,
    modal4: false
  };



  modelChange(event) {
    console.log('asdfasdf', event);
  }
  onClose(key) {
    this.state[key] = false;
  }

  showModal(key) {
    this.state[key] = true;
  }

  states: any = {
    open: false
  };
  onOpenChange(event) {
    console.log(event);
    this.states.open  = !this.states.open;
    this.commentParam = {
      classify: 2,
      workId  : this.id
    }
    if (this.states.open) {
      this.http.commentList(this.commentParam).subscribe(
        (data: any) => {
          this.commentList = data.data;
          console.log(this.commentList);

        }
      )
    }
  }
  //   ngDoCheck():void{
  //     if(this.id! = +this.route.snapshot.params.id){
  //       window.location.reload();
  //     }

  // }
  ngDoCheck(): void {
    if (this.reload) {
      window.location.reload();
    }
  }

  detail(id: any) {
    this.router.navigate(['/detail', id])
    //同路由切换时id改变不会刷新，数据也没有变化，所以可以先改变id，再利用数据监测刷新页面
    this.reload = true;
  }
  push() {
    if (this.commentList.length == 0) {
      this.parentId = 0
    }
    else {
      this.parentId = this.commentList[this.commentList.length - 1]
    }
    this.addParams = {
      content : this.commentWord,
      classify: 2,
      parentId: this.parentId,
      workId  : this.id,
      author  : "",
      title   : this.title
    }
    this.http.commentAdd(this.addParams).subscribe(
      (data: any) => {

        console.log(data);

      }
    )
    console.log(this.commentWord)
  }
}
