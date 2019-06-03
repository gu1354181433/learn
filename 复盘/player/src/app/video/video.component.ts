import { Component, OnInit, ElementRef, Renderer } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
@Component({
  selector   : 'app-video',
  templateUrl: './video.component.html',
  styleUrls  : ['./video.component.scss']
})
export class VideoComponent implements OnInit {
  searchValue: any;

  constructor(private router:Router) { }

  ngOnInit() {
  }
  flag  = true;
  index = 0;


  onTabClick(item) {
    console.log('onTabClick', item);
  }

  selectCard(e) {
    console.log(' ', JSON.stringify(e));
  }

  changeIndex() {
    this.index = 0;
  }

}
