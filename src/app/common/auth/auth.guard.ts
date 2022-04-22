import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from "@angular/router";
import { Observable } from "rxjs";
import { TokenService } from "../token/token.service";

@Injectable({providedIn: 'root'})
export class AuthGuard implements CanActivate{
  
  constructor(private tokenService: TokenService,
              private router: Router) {}
  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean | UrlTree | Observable<boolean | UrlTree> | Promise<boolean | UrlTree> {
    
    if(this.hasValidToken()) {
      // this.router.navigate(['/admin']);
      return true;
    }
    
    this.router.navigate(['/login']);
    return false;
  }

  hasValidToken() {
    return this.tokenService.hasTokenAndIsValid();
  }
}