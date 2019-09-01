import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-scientific',
  templateUrl: './scientific.component.html',
  styleUrls: ['./scientific.component.scss']
})
export class ScientificComponent implements OnInit {
  barNumber:number;
  isBar1 : boolean;
  isBar2 : boolean;
  isBar3 : boolean;
  constructor() { }
  switchBar(num):void{
    if(num == 0){
      this.isBar1 = true;
      this.isBar2 = false;
      this.isBar3 = false;
    }else if(num == 1){
      this.isBar1 = false;
      this.isBar2 = true;
      this.isBar3 = false;
    }else{
      this.isBar1 = false;
      this.isBar2 = false;
      this.isBar3 = true;
    }
  }
  ngOnInit() {
    this.switchBar(0);
  }

}
