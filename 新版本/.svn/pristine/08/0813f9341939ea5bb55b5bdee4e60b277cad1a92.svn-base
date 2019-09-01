import { Component, OnInit } from '@angular/core';
import { NzMessageService, UploadFile } from 'ng-zorro-antd';
import { Observable, Observer } from 'rxjs';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { HttpClient, HttpHeaders, HttpRequest, HttpParams } from "@angular/common/http";
import { HttpService } from "../http/http.service"

@Component({
  selector   : 'app-add',
  templateUrl: './add.component.html',
  styleUrls  : ['./add.component.scss']
})
export class AddComponent implements OnInit {
  headers     = new HttpHeaders().set("Content-Type", "formdata");
  subjectName = '全部';
  subjectData = ['全部', '语文', '英语', '数学'];
  gradeId     = '全部'
  classData   = ['全部', '幼升小', '一年级', '二年级', '三年级', '四年级', '五年级', '六年级'];
  author      = '';
  radioValue  = 'A';
  url        : string;
  videoId    : any;
  user       : any;
  title      : any;
  userList   : any=[0];
  source     : any;        //来源
  state      : any;
  paramAdd   : any;
  requestType: any;
  paramName  : any;
  hide       : any=false;
  constructor(private msg: NzMessageService, private route: ActivatedRoute, private router :Router ,private http: HttpClient,private detailHttp:HttpService) { }

  ngOnInit() {
    this.videoId = +this.route.snapshot.params.id;
    if(this.videoId){
      this.paramName = this.route.snapshot.queryParams["name"];
      console.log(this.paramName)
      this.detailHttp.videoDetail(this.videoId).subscribe(
        (Data:any) => {
          this.userList = Data.data.video;

          console.log(this.userList);
          this.user = this.userList;
          console.log(this.user)
          this.title       = this.user.title;
          this.subjectName = this.user.subjectName;
          this.gradeId     = this.user.gradeName;
          this.author      = this.user.author;
          this.picture     = this.userList.picture;
          console.log(this.title)
        }
      )
    }
    if(this.paramName=="detail"){
      this.hide = true;
    }

  }

  imgName  : any;
  imgSize  : any;
  imgStatus: any;
  reset() {
    this.imgName   = "";
    this.imgSize   = "";
    this.imgStatus = "";
  }
  loading = false;
  picture: string;


  beforeUpload = (file: File) => {
    return new Observable((observer: Observer<boolean>) => {
      //限制文件类型 用或符分割
      const isJPG        = file.type === 'image/jpeg';
            this.imgName = file.name;
            this.imgSize = file.size / 1024 / 1024;
            console.log(this.imgName)
      console.log(window.URL.createObjectURL(file))
      if (!isJPG) {
        this.msg.error('You can only upload JPG file!');
        observer.complete();
        this.reset();
        return;
      }
      //检测图片大小 限制大小
      const isLt2M = file.size / 1024 / 1024 < 2;
      if (!isLt2M) {
        this.msg.error('Image must smaller than 2MB!');
        observer.complete();
        this.reset();
        return;
      }
      // check height
      //图片尺寸限制 此处只是判断 具体函数在下面
      this.checkImageDimension(file).then(dimensionRes => {
        if (!dimensionRes) {
          this.msg.error('Image only 300x300 above');
          observer.complete();
          this.reset();
          return;
        }
        observer.next(isJPG && isLt2M && dimensionRes);
        observer.complete();
      });
    });
  };

  private getBase64(img: File, callback: (img: string) => void): void {
    const reader = new FileReader();
    reader.addEventListener('load', () => callback(reader.result!.toString()));
    reader.readAsDataURL(img);
  }
  //获取尺寸以及比较规定尺寸函数
  private checkImageDimension(file: File): Promise<boolean> {
    return new Promise(resolve => {
      const img        = new Image();                       // create image
            img.src    = window.URL.createObjectURL(file);
            img.onload = () => {
        const width  = img.naturalWidth;
        const height = img.naturalHeight;
        resolve(width !== 0 && height !== 0);
      };
    });
  }

  handleChange(info: { file: UploadFile }): void {
    switch (info.file.status) {
      case 'uploading':
        this.loading = true;
        break;
      case 'done':
        // Get this url from response in real world.
        // this.getBase64(info.file!.originFileObj!, (img: string) => {
        //   this.loading = false;
        //   this.picture = img;
        //   console.log(this.picture)
        //   this.imgStatus = '上传成功';
        // });
        this.loading = false;
        this.picture = info.file.response.data.url;
          console.log(this.picture)
          this.imgStatus = '上传成功';
        break;
      case 'error':
        this.msg.error('Network error');
        this.loading = false;
        this.reset();
        break;
    }
  }
  public     fileUrl                    : any = false;
  public     fileName                   : any;
  fileChange(info: { file: UploadFile }): void {
    console.log(info.file.status)
    this.fileUrl = true;
    switch (info.file.status) {
      case 'uploading':
        // this.loading = true;

        break;
      case 'done':
        // Get this url from response in real world.
        // this.getBase64(info.file!.originFileObj!, (img: string) => {
          // this.loading = false;
          this.fileUrl = info.file.response.data.url;
          console.log(this.fileUrl);
        // });
        break;
      case 'removed':
        this.fileUrl = false;
        break;
      case 'error':
        this.msg.error('Network error');
        this.fileUrl = '../../assets/video1.mp4'
        break;
    }
  }
  beforeFileUpload = (file: File) => {
    console.log(window.URL.createObjectURL(file));
    this.fileName = file.name;
    return new Observable((observer: Observer<boolean>) => {
      const isFile5M = file.size / 1024 / 1024 < 5;
      if (!isFile5M) {
        this.msg.error('Image must smaller than 5MB!');
        observer.complete();
        this.reset();
        return;
      }
      //限制文件类型 用或符分割
      observer.next(isFile5M);
      observer.complete();

    });
  }
  request(){
    this.requestType.subscribe(
      (Data:any) => {
        if(Data.message=='0'){
          alert('上传成功')
          this.router.navigate(['./home/video'])
        }
        else{
          alert('上传失败');
        }
      }
    )
  }
  cancel(){
    this.router.navigate(['./home/video'])
  }
  save(){
    this.state    = 1;
    this.paramAdd = {
      // videoId  : this.videoId,
      title    : this.title,
      picture  : this.picture,
      subjectId: this.subjectData.indexOf(this.subjectName),
      gradeId  : this.classData.indexOf(this.gradeId),
      author   : this.author,
      source   : this.source,
      url      : this.fileUrl
    }
    if(this.videoId){
      this.requestType = this.detailHttp.videoEdit(this.videoId,this.paramAdd)
    }
    else{
      this.requestType = this.detailHttp.videoAdd(this.paramAdd)
    }
    this.request();
  }
  outline(){
    this.state    = 2;
    this.paramAdd = {
      title    : this.title,
      picture  : this.picture,
      subjectId: this.subjectData.indexOf(this.subjectName),
      gradeId  : this.classData.indexOf(this.gradeId),
      author   : this.author,
      source   : this.source,
      url      : this.fileUrl
    }
    if(this.videoId){
      this.requestType = this.detailHttp.videoEdit(this.videoId,this.paramAdd)
    }
    else{
      this.requestType = this.detailHttp.videoAdd(this.paramAdd)
    }
    this.request();
  }
}
