import { Component, OnInit, EventEmitter } from '@angular/core';
import { Router, Route, ActivatedRoute ,ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, CanActivate,} from '@angular/router';
import { HttpService } from '../services/http/http.service';
import { response } from '../services/common/common.namespec';
import { CommonService } from '../services/common/common.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NzMessageService, UploadFile } from 'ng-zorro-antd';
import { Observable, Observer } from 'rxjs';
import { CookieService } from 'ngx-cookie-service';
@Component({
    selector: 'personal',
    templateUrl: './personal.component.html',
    styleUrls: ['./personal.component.scss']
  })
  export class personalComponent implements OnInit {
    activeItem: number;
    binding: boolean;
    serial:'';
    itemsParams:any;
    valilistForm: FormGroup;//表单验证
    paramsData:{id:number;img:string;nick:string;birthday:number;mobile:string;age:number;sex:number;nowTime:number};
    constructor( private cookieService: CookieService,private fb: FormBuilder,private route: Router, private http: HttpService,private commonService: CommonService,) { }
  
    navbarList = [
      { name: '个人信息',},
      { name: '修改密码',},
      { name: '我的基因盒', }
    ];
    loading = false
   number=0
    changeItem = function (i: number, aItem: any) {
      this.number = i
      this.navbarList.map((item: { isClick: Boolean }) => {
        return item.isClick = false;
      });
      aItem.isClick = true;
      this.activeItem = i;
      //  console.log(this.route.url)
    };
    dataList:[]
  total:number
      show = false
      error= false
      style = {
        display: 'inline-block',
        width: '240px',
        height: '35px',
        color: '#303540',
        border: 'none',
        'background': '#f4f4f4',
        'border-radius': '4px',
      }
      params = {
        img:[],
        nick:'',
        birthday:'',
        sex:1,
        mobile:'',
      }
      name=false
      headImg:string
      img:string
      birthday=''
     //上传图片
     showUploadList = {
      showPreviewIcon: true,
      showRemoveIcon: true,
      hidePreviewIconInNonImage: true
    };
    handlePreview = (file: UploadFile) => {
      this.img = file.url || file.thumbUrl;
      this.previewVisible = true;
    }

  fileList = [];
//上传图片
showPwd=true;
confirmPwd = false;
pwd = false;
newPwd = false;
isValid =  false;
showImg = false
paramsPwd = {
oldPwd:'',
newPwd:'',
confirmPwd:''
}
//验证旧密码是否正确。
before():void{
var patrn=/^(\w){6,16}$/;
if(patrn.test(this.paramsPwd.oldPwd)){
  this.pwd = false
  var params = {oldPwd:this.paramsPwd.oldPwd}
  this.http.editPwd(params).subscribe((resp:response)=>{
    if(resp.code == 0 ){
    }else{
    }
      // this.CommonService.confirm('success', '提示', 'resp.msg', () => {}, () => {
           
      // });
})
}else{
  this.pwd = true
}
}
//首次更改密码时提示格式
newPassWord():void{
var patrn=/^(\w){6,16}$/;
if(patrn.test(this.paramsPwd.newPwd)){
  this.newPwd = false
}else{
  this.newPwd = true
}
}
//二次确认密码时提示
confirmPassWord():void{
console.log('asd')
if(this.paramsPwd.newPwd !== this.paramsPwd.confirmPwd){
  this.confirmPwd = true
}else{
  this.confirmPwd = false
  this.isValid = true
  console.log(this.isValid)
}
}
submit():void{
delete this.paramsPwd.confirmPwd
 this.http.editPwd(this.params).subscribe((resp:response)=>{
  if(resp.code == 0 ){
    this.show =false
    this.cookieService.delete("isLogin");
    this.route.navigate(['login', '1']).then(() => {
      window.location.reload();
    });
  }else{
    this.commonService.messageProp('error', resp.message);

  }
})

}
beforeUpload = (file: File) => {
  return new Observable((observer: Observer<boolean>) => {
    const isJPG = file.type === 'image/jpeg'|| 'image/BMP'|| 'image/PNG';
    if (!isJPG) {
      this.error = true
      observer.complete();
      return;
    }
    const isLt2M = file.size / 1024 / 1024 < 2;
    if (!isLt2M) {
      this.error = true
      observer.complete();
      return;
    }
    // check height
    this.checkImageDimension(file).then(dimensionRes => {
      observer.next(isJPG && isLt2M);
      observer.complete();
    });
  });
};
private getBase64(img: File, callback: (img: string) => void): void {
  const reader = new FileReader();
  reader.addEventListener('load', () => callback(reader.result!.toString()));
  reader.readAsDataURL(img);
}

private checkImageDimension(file: File): Promise<boolean> {
  return new Promise(resolve => {
    const img = new Image(); // create image
    img.src = window.URL.createObjectURL(file);
    img.onload = () => {
      const width = img.naturalWidth;
      const height = img.naturalHeight;
      window.URL.revokeObjectURL(img.src!);
      resolve(width === height && width >= 300);
    };
  });
}
  previewVisible = false;
      transformTime(timestamp:string = ''+new Date()) {
        if (timestamp) {
            var time = new Date(timestamp);
            var y = time.getFullYear(); //getFullYear方法以四位数字返回年份
            var M = time.getMonth() + 1; // getMonth方法从 Date 对象返回月份 (0 ~ 11)，返回结果需要手动加一
            var d = time.getDate(); // getDate方法从 Date 对象返回一个月中的某一天 (1 ~ 31)
        
            return y + '-' + M + '-' + d
          } else {
              return '';
          }
    }
    handleChange(info: { file: UploadFile }): void {
    if (info.file.status === 'uploading') {
      this.loading = true;
      return;
    }
    if (info.file.status === 'done') {
      // Get this url from response in real world.
      this.headImg = info.file.response.data.url;
      // console.log('this.resImgLind------', this.resImgLink);
      // this.getBase64(info.file.originFileObj, (img: string) => {
      //   this.loading = false;
      //   this.avatarUrl = img;
      // });
    }
  }
    getPerson(){
      this.http.getPerson().subscribe((resp:response)=>{
        if(resp.code == 0 ){
          console.log(resp.data)
          this.headImg = resp.data.img?JSON.parse(resp.data.img)[0].url:'../../assets/img/person.png'
        if(this.headImg){
          this.showImg=true
        }
          this.params.nick = resp.data.nick?resp.data.nick:'请前往编辑页面'
          this.params.sex = resp.data.sex?resp.data.sex:'请前往编辑页面'
          this.params.mobile = resp.data.mobile?resp.data.mobile:'请前往编辑页面'
          this.birthday = ''+resp.data.birthday?this.transformTime(resp.data.birthday):'请前往编辑页面'
          console.log(this.params.birthday)
            // this.CommonService.confirm('success', '提示', '新增成功', () => {}, () => {
              this.show = false
            //   });
        }
    })
    }
    huanbang(){
      this.route.navigate(['ChangeComponent']).then(() => {
        return
      });
    }
    upDate (){
      console.log(this.fileList[0])
      this.params.img.push({
        url:this.headImg 
      })
      console.log(this.headImg )
      var regex = new RegExp("^([\u4E00-\uFA29]|[\uE7C7-\uE7F3]|[a-zA-Z_]){1,20}$"); 
      if(!regex.test(this.params.nick)){
        this.name = true
        return
      }
      this.params.birthday = ''+new Date(this.birthday).getTime();
      this.http.updatePerson(this.params).subscribe((resp:response)=>{
        if(resp.code == 0 ){
          this.getPerson()
          this.show = false
        }
    })
    }
    //关闭编辑
    top():void{
      this.getPerson()
      //关闭编辑
     
    }
    //编辑
    edit():void{
      //显示编辑
      this.show = true
    }
    //获取基因盒列表
  getGeneLi():void{
    this.http.getGeneLi().subscribe((resp: response) => {
      if (resp.code == 0) {
        if(resp.data.length!=0){
          this.binding = true;
          this.itemsParams = resp.data;
        }
      } else {
        this.commonService.messageProp('error', resp.message);
      }
    })
  }
  
 
    ngOnInit(): void {
      this.activeItem = 0;
      this.getPerson();
      this.getGeneLi();
    }
}