import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { UserManagementService } from '../services/user-management.service';

@Injectable({
  providedIn: 'root'
})
export class UsermanagementGuard implements CanActivate {
  constructor(private userService:UserManagementService,
    private  router:Router){

  }
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
   
    if (!this.userService.checkIfUserLogin()) {
      this.router.navigate(['/ManagementModule/login']);
      return false;
    } else {
      // this.router.navigate(['admin'])
      return true;
    }
    
  }

}
