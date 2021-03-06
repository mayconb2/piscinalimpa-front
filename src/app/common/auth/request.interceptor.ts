import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { TokenService } from "../token/token.service";

@Injectable()
export class RequestInterceptor implements HttpInterceptor {
  

  constructor(private tokenService: TokenService) {

  }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {

    if(this.tokenService.hasTokenAndIsValid()) {
      const token = this.tokenService.getToken();
      
      if(token != null) {
        req = req.clone({ 
          headers: req.headers.set('Authorization', token),
        });
      }
    }
    return next.handle(req);
  }


}