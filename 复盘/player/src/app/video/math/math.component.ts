import { Component, OnInit } from '@angular/core';
import { HttpService } from "../../http/http.service";
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
@Component({
  selector   : 'app-math',
  templateUrl: './math.component.html',
  styleUrls  : ['./math.component.scss']
})
export class MathComponent implements OnInit {
  delayData = [];
  sortData  = [
    '全部',
    '播放最多',
    '最新发表',
    '评论最多'

  ];
  gradeData = [
    '全部', '初一', '初二', '初三', '高一', '高二', '高三'
  ]
  name1  : any = '播放最多';
  name2  : any = '全部';
  value  : any = [];
  value1: any  = [];
  vaule2: any  = [];
  params: any  = {
    subjectId: 1,
    gradeId  : 0,
    filtrate : 1
  };
  num     : any = 666;
  hitColor: any = false;
  cac     : any;
  img     : any = "../../../assets/1441938430568.jpg";
  data    : any = [];

  constructor(private http: HttpService,private router:Router) {
    setTimeout(() => {
      this.delayData = this.data;
    }, 10000);
  }

  ngOnInit() {
    this.http.videoList(this.params).subscribe(
      (data: any) => {
        this.data = data.data;
        console.log(this.data);

      }
    )
  }
  detail(id:any){
    this.router.navigate(['/detail',id])
  }
  onOk1(result) {
    this.name1  = this.getResult(result);
    this.params = {
      subjectId: 3,
      filtrate : this.sortData.indexOf(this.name1),
      gradeId  : this.gradeData.indexOf(this.name2)
    }
    this.http.videoList(this.params).subscribe(
      (data: any) => {
        this.data = data.data.data;
        console.log(this.data);

      }
    )
    console.log(this.name1)
  }
  onOk2(result) {
    this.name2  = this.getResult(result);
    this.params = {
      subjectId: 3,
      filtrate : this.sortData.indexOf(this.name1),
      gradeId  : this.gradeData.indexOf(this.name2)
    }
    this.http.videoList(this.params).subscribe(
      (data: any) => {
        this.data = data.data.data;
        console.log(this.data);

      }
    )
    console.log(this.name2)
  }
  getResult(result) {
                                this.value = [];
                            let temp: any  = '';
    result.forEach(item => {
      this.value.push(item.label || item);
      temp += item.label || item;
    });

    return this.value.map(v => v).join(',');
  }
  hit(event, name: any) {
    const color = event.target.style.color;
    if (color == "red") {
      event.target.style = "color:#b8b8b8"
      this.data.forEach((d, index) => {
        if (d.author == name) {
          d.collection--;
        }
      });
    }
    else {
      event.target.style = "color:red";
      this.data.forEach((d, index) => {
        if (d.author == name) {
          d.collection++;
        }
      });
    }
  }
  like(event, name: any) {
    const color = event.target.style.color;
    if (color == "red") {
      event.target.style = "color:#b8b8b8"
      this.data.forEach((d, index) => {
        if (d.author == name) {
          d.likes--;
        }
      });
    }
    else {
      event.target.style = "color:red";
      this.data.forEach((d, index) => {
        if (d.author == name) {
          d.likes++;
        }
      });
    }
  }

}
