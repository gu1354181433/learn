import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router }   from '@angular/router';
import { FormBuilder, FormGroup} from '@angular/forms';
@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.scss']
})
export class ArticleComponent implements OnInit {

  constructor(public http:HttpClient,public router:Router,private fb: FormBuilder,){}
  validateForm: FormGroup;
  ngOnInit() {
    this.validateForm = this.fb.group({
      idinput: [''],
      titleinput: [''],
      authorinput: [''],
      gradeselect: [''],
      floorselect: [''],
      toplimitselect: [''],
      startdatePicker:[''],
      enddatePicker:[''],
    });
    this.search();
  }

  // 日历关联
  startValue: Date | null = null;
  endValue: Date | null = null;
  endOpen = false;

  disabledStartDate = (startValue: Date): boolean => {
    if (!startValue || !this.endValue) {
      return false;
    }
    return startValue.getTime() > this.endValue.getTime();
  }

  disabledEndDate = (endValue: Date): boolean => {
    if (!endValue || !this.startValue) {
      return false;
    }
    return endValue.getTime() <= this.startValue.getTime();
  }

  onStartChange(date: Date): void {
    this.startValue = date;
  }

  onEndChange(date: Date): void {
    this.endValue = date;
  }
  handleStartOpenChange(open: boolean): void {
    if (!open) {
      this.endOpen = true;
    }
    console.log('handleStartOpenChange', open, this.endOpen);
  }
  handleEndOpenChange(open: boolean): void {
    console.log(open);
    this.endOpen = open;
  }
  // 搜索
  public articleList:any[]
  search(): void {
    this.validateForm.value.startdatePicker==null?this.validateForm.value.startdatePicker='':''
    this.validateForm.value.enddatePicker==null?this.validateForm.value.enddatePicker='':''
    console.log(this.validateForm.value.startdatePicker)
    console.log(this.validateForm.value.startdatePicker)
    const dates = {}
    this.http.get("/mail/a/u/article/list",{params: dates}).subscribe((response:any)=>{    
      this.articleList=response.data.article
      console.log(response) 
     })
  }
  // 清除
  reset(): void {
  this.validateForm.reset();
  // this.searchForm()
  }

  // articleDetails():void {
  //   var obj1="articleDetails"
  //   sessionStorage.setItem("obj1Key",obj1)
  // }
}
 