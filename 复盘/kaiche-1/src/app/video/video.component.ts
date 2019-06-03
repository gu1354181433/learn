import { Component, OnInit } from '@angular/core';
import { Router, NavigationEnd, ActivatedRoute } from '@angular/router';
import { HttpClient, HttpHeaders, HttpRequest, HttpParams } from "@angular/common/http";
import { HttpService } from "../http/http.service"
@Component({
  selector   : 'app-video',
  templateUrl: './video.component.html',
  styleUrls  : ['./video.component.scss']
})
export class VideoComponent implements OnInit {
  dateFormat       = 'yyyy/MM/dd';
  statusData       = ['全部', '上架', '下架'];
  classData        = ['全部', '幼升小', '一年级', '二年级', '三年级', '四年级', '五年级', '六年级'];
  subjectData      = ['全部', '语文', '英语', '数学'];
  selectedProvince = 'all';
  selectedCity     = 'all';
  provinceData     = ['all', '0', '1000', '5000'];
  dadad      : any;
  title      : any = '';
  author     : any = '';
  status     : any = '全部';
  class      : any = '全部';
  subject    : any = '全部';
  searchParam: any;
  startDate  : any = NaN;
  endDate    : any = NaN;
  laji       : any;
  cityData   : { [place: string]: string[] } = {
    all : ['all'],
    0   : ['100', '1000', '5000', '10000'],
    1000: ['5000', '10000'],
    5000: ['10000']
  };
  listOfData: any = [];
  constructor(private router: Router, private http: HttpClient, private listHttp: HttpService) {
  }
  ngOnInit() {
    this.listHttp.videoList().subscribe(
      (data: any) => {
        this.listOfData = data.data.video;

        console.log(this.listOfData);

      }
    )
  }
  provinceChange(value: string): void {
    this.selectedCity = this.cityData[value][0];
  }

  deleteRow(key: string): void {
    this.listOfData = this.listOfData.filter(d => d.videoId !== key);
  }
  add(id: string) {
    console.log(id)
    this.router.navigate(['./home/add', id], { queryParams: { name: "detail" } })
  }
  videoAdd() {
    this.router.navigate(['./home/add/'])
  }
  videoSearch() {
    this.searchParam = {
      title        : this.title,
      state        : this.statusData.indexOf(this.status),
      author       : this.author,
      subjectId    : this.subjectData.indexOf(this.subject),
      gradeId      : this.classData.indexOf(this.class),
      watchCount1  : this.selectedProvince,
      watchCount2  : this.selectedCity,
      createAtStart: this.startDate.valueOf(),
      createAtEnd  : this.endDate.valueOf()
    }
    this.listHttp.videoList(this.searchParam).subscribe(
      (data: any) => {
        this.listOfData = data.data.video;

        console.log(data.message);

      }
    )
  }


}
