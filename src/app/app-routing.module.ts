import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TodoFormComponent } from './pages/todo-form/todo-form.component';
import { TodoComponent } from './pages/todo/todo.component';


const routes: Routes = [{
  path: '',
  component: TodoComponent
},{
  path: 'cadastro',
  component: TodoFormComponent
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
