import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from "@angular/router";
import { Observable } from "rxjs";
import { TokenService } from "../token/token.service";

@Injectable({providedIn: 'root'})
export class AuthGuard implements CanActivate{
  
  constructor(private tokenService: TokenService,
              private router: Router) {}
  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean | UrlTree | Observable<boolean | UrlTree> | Promise<boolean | UrlTree> {
    
    if(this.isLogged()) {
      this.router.navigate(['/admin']);
      return false;
    }
    
    return true;
  }

  isLogged() {
    return this.tokenService.hasTokenAndIsValid();
  }

}