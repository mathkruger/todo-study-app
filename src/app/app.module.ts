import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';

import { TodoItemComponent } from './shared/components/todo-item/todo-item.component';
import { TodoListComponent } from './shared/components/todo-list/todo-list.component';
import { HttpClientModule } from '@angular/common/http';
import { TodoComponent } from './pages/todo/todo.component';
import { TodoFormComponent } from './pages/todo-form/todo-form.component';

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
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
