import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";

@Injectable()
export class AddHello implements HttpInterceptor  {
    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        const requisition = req.clone({
            headers: req.headers.set('x-hello', 'world')
        });

        return next.handle(requisition);
    }
}
