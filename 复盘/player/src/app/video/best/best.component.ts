import { Component, OnInit } from '@angular/core';
import { HttpService } from "../../http/http.service"
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
@Component({
  selector   : 'app-best',
  templateUrl: './best.component.html',
  styleUrls  : ['./best.component.scss']
})
export class BestComponent implements OnInit {
  num     : any = 666;
  hitColor: any = false;
  cac     : any;
  img     : any="../../../assets/1441938430568.jpg";
  data    : any = [
    {
    videoId    : 1,
    picture    : "../../../assets/1441938430568.jpg",
    likes      : 233,
    collection : 666,
    subjectName: '语文',
    author     : 'Tom',
    title      : '母猪的产后护理'
  },
  {
    videoId    : 1,
    picture    : "../../../assets/1441938430568.jpg",
    likes      : 233,
    collection : 666,
    subjectName: '语文',
    author     : 'Tom',
    title      : '母猪的产后护理'
  },
  {
    videoId    : 1,
    picture    : "../../../assets/1441938430568.jpg",
    likes      : 233,
    collection : 666,
    subjectName: '语文',
    author     : 'Tom',
    title      : '母猪的产后护理'
  },
  {
    videoId    : 1,
    picture    : "../../../assets/1441938430568.jpg",
    likes      : 233,
    collection : 666,
    subjectName: '语文',
    author     : 'Tom',
    title      : '母猪的产后护理'
  }
]
  state = {
    data     : ['AiyWuByWklrrUDlFignR', 'TekJlZRVCjLFexlOCuWn', 'IJOtIlfsYdTyaDTRVrLI'],
    imgHeight: '200px',
  };

  beforeChange(event) {
    // console.log('slide ' + event.from + ' to ' + event.to);
  }

  afterChange(event) {
    // console.log(event);
  }
  Click(event) {
    console.log(event.target.id)//点击图片下标
  }
  constructor(private http: HttpService,private router:Router ) { }

  ngOnInit() {
    this.http.videoList().subscribe(
      (data: any) => {
        this.data = data.data;
        console.log(this.data);

      }
    )
  }
  detail(id:any){
    this.router.navigate(['/detail',id])
  }
  hit(event,name:any) {
    const color = event.target.style.color;
    if (color == "red") {
      event.target.style = "color:#b8b8b8"
      this.data.forEach((d,index) => {
        if(d.author==name){
          d.collection--;
        }
      });
    }
    else {
      event.target.style = "color:red";
      this.data.forEach((d,index) => {
        if(d.author==name){
          d.collection++;
        }
      });
    }
  }
  like(event,name:any) {
    const color = event.target.style.color;
    if (color == "red") {
      event.target.style = "color:#b8b8b8"
      this.data.forEach((d,index) => {
        if(d.author==name){
          d.likes--;
        }
      });
    }
    else {
      event.target.style = "color:red";
      this.data.forEach((d,index) => {
        if(d.author==name){
          d.likes++;
        }
      });
    }
  }
}
