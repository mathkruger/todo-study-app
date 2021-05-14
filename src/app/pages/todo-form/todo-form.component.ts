import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Todo } from 'src/app/shared/models/todo';
import { TodoService } from 'src/app/shared/services/todo.service';

@Component({
  selector: 'app-todo-form',
  templateUrl: './todo-form.component.html',
  styleUrls: ['./todo-form.component.css']
})
export class TodoFormComponent implements OnInit {

  constructor(
    private formBuilder: FormBuilder,
    private toDo: TodoService,
    private router: Router,
    private activatedRoute: ActivatedRoute
  ) { }

  form: FormGroup;
  origem: string;

  ngOnInit() {
    this.form = this.formBuilder.group({
      description: [null, [Validators.required]],
      done: [false, [Validators.required]]
    });

    this.origem = history.state.origem;
  }

  save() {
    let model: Todo = this.form.getRawValue();
    this.toDo.post(model).subscribe(() => {
      this.router.navigate(['/'], {
        state: {
          mensagem: 'Tarefa cadastrada com sucesso!'
        }
      });
    })
  }
}
