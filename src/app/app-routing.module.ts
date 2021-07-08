import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TodoFormComponent } from './pages/todo-form/todo-form.component';
import { TodoComponent } from './pages/todo/todo.component';
import { Logged } from './shared/guards/logged.guard';


const routes: Routes = [{
  path: '',
  component: TodoComponent
},{
  path: 'cadastro',
  component: TodoFormComponent,
  canActivate: [
    Logged
  ]
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
