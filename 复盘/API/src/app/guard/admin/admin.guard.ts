import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, CanActivate, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { LocalStorageService } from 'src/app/services/local-storage/local-storage.service';
import { USER_INFO } from 'src/app/services/local-storage/local-storage.namespec';
import { CookieService } from 'ngx-cookie-service';
@Injectable({
  providedIn: 'root'
})
export class AdminGuard implements  CanActivate {
  url: string;

  constructor(private ls: LocalStorageService , private cookieService: CookieService , private router: Router) {}
  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): boolean {
      const url: string = state.url;
    return this.checkLogin(url);
  }

  checkLogin(url: string): boolean {
    console.log('路由守卫');
    // console.log(url);
    this.url = url;

    if (this.cookieService.check('isLogin')) {
      return true; }
      this.cookieService.deleteAll();
      this.ls.clear();
    // this.router.navigate(['/login']);
    return true;
  }

}
