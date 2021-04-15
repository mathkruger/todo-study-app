import { Component, OnInit } from '@angular/core';
import { Todo } from '../../models/todo';
import { TodoService } from '../../services/todo.service';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css']
})
export class TodoListComponent implements OnInit {
  todoList: Todo[];

  constructor(private todoService: TodoService) { }

  ngOnInit() {
    this.list();
  }

  update(item: Todo) {
    this.todoService.update(item).subscribe(() => {
      this.list;
    })
  }

  delete(id: number) {
    this.todoService.delete(id).subscribe(() => {
      this.list();
    })
  }

  list() {
    this.todoService.list().subscribe(re => {
      this.todoList = re;
    });
  }

}
