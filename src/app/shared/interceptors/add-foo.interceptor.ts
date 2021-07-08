import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";

@Injectable()
export class AddFoo implements HttpInterceptor  {
    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        const requisition = req.clone({
            headers: req.headers.set('x-foo', 'bar')
        });

        return next.handle(requisition);
    }
}