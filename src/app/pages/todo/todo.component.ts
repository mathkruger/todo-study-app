import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent implements OnInit {

  constructor() { }

  mensagem: string = null;

  ngOnInit() {
    this.mensagem = history.state.mensagem;
  }

}
