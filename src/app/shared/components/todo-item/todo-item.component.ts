import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Todo } from '../../models/todo';

@Component({
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.css']
})
export class TodoItemComponent implements OnInit {

  @Input() item: Todo;

  @Output() onDelete = new EventEmitter<number>();
  @Output() onStatusChange = new EventEmitter<Todo>();

  constructor() { }

  ngOnInit() {
  }

  onDeleteClick() {
    this.onDelete.emit(this.item.id);
  }

  onStatusChangeClick() {
    this.item.done = !this.item.done;
    this.onStatusChange.emit(this.item);
  }
}
