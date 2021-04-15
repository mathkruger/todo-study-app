import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Todo } from '../models/todo';
import { catchError } from 'rxjs/operators';
import { throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TodoService {

  constructor(
    private httpClient: HttpClient
  ) { }

  url = environment.apiUrl + 'todos';

  list() {
    return this.httpClient.get<Todo[]>(this.url).pipe(
    catchError(err => {
      console.error('an error has occurred: ' + err);
      return throwError(err);
    }));
  }

  post(model: Todo) {
    return this.httpClient.post(this.url, model).pipe(
      catchError(err => {
        console.error('an error has occurred: ' + err);
        return throwError(err);
      }));
  }

  delete(id: number) {
    return this.httpClient.delete(this.url + '/' + id).pipe(
      catchError(err => {
        console.error('an error has occurred: ' + err);
        return throwError(err);
      }));
  }
}
