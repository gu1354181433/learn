import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector   : 'main-part',
  templateUrl: './main-part.component.html',
  styleUrls  : ['./main-part.component.css']
})
export class MainPartComponent {
  title = '萝卜多后台管理';
constructor(private router: Router) {}
  home(): void {
    this.router.navigate(['main-part/home']);
  }
}








