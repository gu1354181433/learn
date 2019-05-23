import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router }   from '@angular/router';
import { FormBuilder, FormGroup} from '@angular/forms';
import { all } from 'q';
@Component({
  selector: 'app-article-add',
  templateUrl: './article-add.component.html',
  styleUrls: ['./article-add.component.scss']
})
export class ArticleAddComponent implements OnInit {

  constructor(public http:HttpClient,public router:Router,private fb: FormBuilder,){}
  validateForm: FormGroup;
  ngOnInit() {
    this.validateForm = this.fb.group({
      titleinput: [''],
      subjectselect: [''],
      gradeselect: [''],
      authorinput: [""],
      sourceradio: [''],
      originalradio: [''],
      reprintradio: [''],
      reprintinput: [""],
    });
  }
  public handle:any="文章编辑" 
  // 单选框初始位置
  radioValue = 'original';

// disabled='true'

  listOfData = [
    {
      key: '1',
      name: 'John Brown',
      age: 32,
      address: 'New York No. 1 Lake Park',
    },
    {
      key: '2',
      name: 'Jim Green',
      age: 42,
      address: 'London No. 1 Lake Park'
    },
    {
      key: '3',
      name: 'Joe Black',
      age: 32,
      address: 'Sidney No. 1 Lake Park'
    }
  ];
}
