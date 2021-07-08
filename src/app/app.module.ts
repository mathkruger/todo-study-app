import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { TodoItemComponent } from './shared/components/todo-item/todo-item.component';
import { TodoListComponent } from './shared/components/todo-list/todo-list.component';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { TodoComponent } from './pages/todo/todo.component';
import { TodoFormComponent } from './pages/todo-form/todo-form.component';
import { AddHello } from './shared/interceptors/add-hello.interceptor';
import { AddFoo } from './shared/interceptors/add-foo.interceptor';
import { AddPost } from './shared/interceptors/add-post.interceptor';

@NgModule({
  declarations: [
    AppComponent,
    TodoItemComponent,
    TodoListComponent,
    TodoComponent,
    TodoFormComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AddHello,
      multi: true
    },
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AddFoo,
      multi: true
    },
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AddPost,
      multi: true
    },
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
