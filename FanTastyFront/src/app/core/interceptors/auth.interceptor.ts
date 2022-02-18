import {Injectable} from "@angular/core";
import {HttpEvent, HttpHandler, HttpInterceptor, HttpRequest} from "@angular/common/http";
import {Observable, of} from "rxjs";
import {AuthService} from "../../services/auth.service";

@Injectable()
export class AuthInterceptor implements HttpInterceptor {
  constructor(private authService: AuthService) {
  }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    console.log(req);
    console.log(next);

    console.log('service');
    console.log(this.authService.isLogged)

    if(this.authService.isLogged){
      req = req.clone( {
        setHeaders: {
          Authorization: this.authService.currentUserValue.token
        }
      });
    }

    console.log(req);

    return next.handle(req);
  }

}
