import { Component, OnInit } from '@angular/core';
import { Router,ActivatedRoute } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';
@Component({
  selector   : 'main-part',
  templateUrl: './main-part.component.html',
  styleUrls  : ['./main-part.component.css']
})
export class MainPartComponent implements OnInit {
  highLight = 1;
  title     = '萝卜多后台管理';
constructor(private router: Router,private cookieService: CookieService,private activatedRoute: ActivatedRoute) {}
  loginOut(){
    this.cookieService.delete("www.zonzii.com");
    this.router.navigate(['/login']);
  }
  home(): void {
    this.router.navigate(['main-part/home']);
  }
  ngOnInit():void{
    console.log(this.activatedRoute.snapshot)
    if(!this.cookieService.get("www.zonzii.com")){
      this.router.navigate(['/login']);
    }
  }
}









