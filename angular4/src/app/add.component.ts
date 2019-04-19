import { Component, OnInit } from "@angular/core";
import { FileUploader, FileItem } from "ng2-file-upload";
import { DomSanitizer } from '@angular/platform-browser';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { CommonModule } from "@angular/common";
import { finalize, switchMap } from 'rxjs/operators';
import { HttpClient,HttpHeaders,HttpRequest,HttpParams } from "@angular/common/http";
const headers = new HttpHeaders().set("Content-Type", "application/x-www-form-urlencoded");
@Component({
  selector   : "home",
  templateUrl: "./add.component.html",
  styleUrls  : ["./add.component.css"]
})

export class AddComponent implements OnInit {

  selectType    : any = "0";
  inputTitle    : any;
  inputUrl      : any;
  mod_resourceId: any;
  newImage      : any;
  file          : any;
  img           : any;
  color         : any="background:#fff";
  x             : any;
  queue         : any;
  name          : any;
  size          : any;
  option        : any;
  change        : any;
  timer         : any;
  count         : any;
  y             : any;
  moveWidth     : any;
  status        : any;
  perfectImg    : any;
  dataSource    : any;
  product       : any;
  id            : any;
  singleData    : any;
  Data          : any;
  cccc          : any;
  boolean       : any=false;
  params        : any={
    title : '',
    type  : '',
    status: '',
    img   : '',
    url   : ''
  }
  mathUrl:any = /(http|https):\/\/([\w.]+\/?)\S*/;
  constructor(private sanitizer: DomSanitizer,private http:HttpClient,private router:Router,private route:ActivatedRoute ) {};
  ngOnInit(){
    //
    this.id = +this.route.snapshot.params.id
    console.log(this.id)
    if(this.id){
      this.getSingleData()
      this.singleData.subscribe(
        data=>{
          this.Data = data.data.article;
         console.log(this.Data)
         this.selectType = this.Data.type+'';
         this.inputTitle = this.Data.title;
         this.inputUrl   = this.Data.url;
         this.perfectImg = this.Data.img;
         this.img        = this.perfectImg;
         this.status     = this.Data.status;
        })
    }

  }
  Url(){
    if(this.mathUrl.test(this.inputUrl)){
      console.log('成功')
    }
    else{
      alert('请输入以 HTTP 或者HTTPS开头的网址');
    }
  }
  getData(){
    this.dataSource = this.http.request('post','/mail/a/u/article',{params: this.params, headers: headers});
  }
  putData(){
    this.dataSource = this.http.request('put',('/mail/a/u/article/'+this.id),{params: this.params, headers: headers});
  }
  getSingleData(){

    this.singleData = this.http.request('get',('/mail/a/article/'+this.id));
  }
  colorChange(){
    this.color = "background:#3a8ee6";
  }
  back(){
    this.color = "background:#fff";
  }
  public uploaderImages: FileUploader = new FileUploader({
    url       : "/mail/a/u/img/{task}",
    method    : "POST",
    itemAlias : "file",
    autoUpload: false
  });
  public selectedFileSmallOnchanged(event) {
    this.editorUploadImages(event); //调用这个方法进行上传
  }
  public editorUploadImages(event): void {
        this.file = event.target.files[0]
        console.log(this.file)
    //增加参数传参过去 是把这个参数加入form表单中添加
    //可以增加多个参数就用form.append('参数'，'自己定义的参数')

    // this.uploaderImages.onBuildItemForm = function( fileItem, form) {
    //   form.append("resourceId", that.mod_resourceId); //这个是自己定义的参数
    // };
    // //uploaderImages要和上面定义的方法名字是一样的 和html input uploader一致
    // this.uploaderImages.queue[0].onSuccess = function( response,status, headers) {
    //   if (status == 200) {
    //      //上传文件后获取服务器返回的数据进行处理 把son字符串转化为son对象
    //         that.newImage = JSON.parse(response);  //声明一个变量接住返回的数据 可以进行赋值
    //     console.log(that.newImage);

    //     //为什么要在外面声明一个that代替this 现在是只在uploader里面 this就只能指uploader
    //     that.uploaderImages.clearQueue(); //上传成功之后清除上传的文件流保证下一个文件流是新的
    //   } else {
    //     alert("上传图片失败");
    //   }
    // };
    // // this.uploaderImages.queue[0].upload(); //图片进行上传
    if(this.file==undefined){
      console.log(this.img)
    }
    else{
      if(/image\/\w+/.test(this.file.type)){
        this.queue      = this.uploaderImages.queue;
        this.x          = this.queue.length;
        this.name       = this.queue[this.x-1].file.name;
        this.size       = this.queue[this.x-1].file.size;
        this.change     = '×';
        this.moveWidth  = '';
        this.count      = 0;
        this.timer      = '';
        this.perfectImg = '';
        this.boolean    = true;
        console.log(this.queue)
        this.img = this.sanitizer.bypassSecurityTrustUrl((URL || webkitURL).createObjectURL(this.file));
        console.log(this.uploaderImages.queue)
        console.log(this.img)
         //上传成功之后清除上传的文件流保证下一个文件流是新的
      }
      else{
        this.img        = '';
        this.perfectImg = '';
        this.uploaderImages.clearQueue();
        alert('请选择图片类型')
      }
    }

  }
  imgRemove(){
    this.uploaderImages.clearQueue();
    this.img = '';
  }
  uploader(){
    var that = this;
        if(this.x!==0){
          this.count = 1;
      this.uploaderImages.queue[this.x-1].upload(); //图片进行上传
    //uploaderImages要和上面定义的方法名字是一样的 和html input uploader一致
    this.queue[this.x-1].onSuccess = function( response,status, headers) {
      if (status == 200) {
         //上传文件后获取服务器返回的数据进行处理 把son字符串转化为son对象
            that.newImage   = JSON.parse(response);
            that.img        = that.newImage.data.url;
            that.boolean    = true;
            that.perfectImg = that.img;
            that.change     = '√';
             //声明一个变量接住返回的数据 可以进行赋值
        console.log(that.newImage.data);
       that.uploaderImages.clearQueue();
       console.log(that.uploaderImages.queue.length)
       that.x = that.uploaderImages.queue.length;
        //为什么要在外面声明一个that代替this 现在是只在uploader里面 this就只能指uploader
         //上传成功之后清除上传的文件流保证下一个文件流是新的
      } else {
        alert("上传图片失败");
      }
        }
    }
    else{
      alert('已上传')
    };

  }
  statusUp(){
    this.status = 2;
    if(this.inputTitle&&this.inputUrl&&this.status&&this.perfectImg&&this.selectType){
      this.params = {
        title : this.inputTitle,
        type  : this.selectType,
        status: this.status,
        img   : this.perfectImg,
        url   : this.inputUrl
      }
      console.log(this.params)
      if(this.id){
        this.putData();
      }
      else{
        this.getData();
      }
      this.dataSource
        .subscribe(data =>
        {
          this.product = data
          console.log(data)
          if(this.product.message=='success'){
            this.router.navigate(['main-part/article'])
            console.log(this.product)
            console.log('成功')

          }
          else{
            this.status = '';
            alert('上传失败')
          }
        }
        );
    }
    else{
      this.status = '';
      alert('请填写信息')
    }
  }
  statusDown(){
        this.status = 1;
    if(this.inputTitle&&this.inputUrl&&this.status&&this.perfectImg&&this.selectType){
      this.params = {
        title : this.inputTitle,
        type  : this.selectType,
        status: this.status,
        img   : this.perfectImg,
        url   : this.inputUrl
      }
      console.log(this.params)
      if(this.id){
        this.putData();
      }
      else{
        this.getData();
      }
      this.dataSource
        .subscribe(data =>
        {
          this.product = data
          console.log(data)
          if(this.product.message=='success'){
            this.router.navigate(['main-part/article'])
            console.log(this.product)
            console.log('成功')

          }
          else{
            this.status = '';
            alert('上传失败')
          }
        }
        );
    }
    else{
      this.status = '';
      alert('请填写信息')
    }
  }
  saveOK(){
if(this.inputTitle&&this.inputUrl&&this.status&&this.perfectImg&&this.selectType){
  this.params = {
    title : this.inputTitle,
    type  : this.selectType,
    status: this.status,
    img   : this.perfectImg,
    url   : this.inputUrl
  }
  console.log(this.params)
  if(this.id){
    this.putData();
  }
  else{
    this.getData();
  }
  this.dataSource
    .subscribe(data =>
    {
      this.product = data
      console.log(data)
      if(this.product.message=='success'){
        this.router.navigate(['main-part/article'])
        console.log(this.product)
        console.log('成功')

      }
      else{
        this.status = '';
        alert('上传失败')
      }
    }
    );
}
else{
  alert('请填写信息')
}
}
  cancel(){
    this.router.navigate(['main-part/article'])
  }

}













