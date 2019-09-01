import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, CanActivateChild, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { LocalStorageService } from 'src/app/services/local-storage/local-storage.service';
import { CookieService } from 'ngx-cookie-service';

@Injectable({
  providedIn: 'root'
})
export class AdminChildGuard implements CanActivateChild  {
  constructor(private ls: LocalStorageService , private cookieService: CookieService , private router: Router) {}
  canActivateChild ( next: ActivatedRouteSnapshot,
  state: RouterStateSnapshot): boolean {

    const url: string = state.url;
    return this.checkLogin(url);
  }


  checkLogin(url: string): boolean {
    console.log('守卫儿子');
    // if (this.cookieService.check('isLogin')) {
    //   return true; }

    //   this.cookieService.deleteAll();
    //   this.ls.clear();
    //  this.router.navigate(['/login']);
    // return false;

    return true;
  }
}
