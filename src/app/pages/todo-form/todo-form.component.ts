import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-todo-form',
  templateUrl: './todo-form.component.html',
  styleUrls: ['./todo-form.component.css']
})
export class TodoFormComponent implements OnInit {

  constructor(private formBuilder: FormBuilder) { }

  form: FormGroup

  ngOnInit() {
    this.form = this.formBuilder.group({
      description: [null, [Validators.required]],
      done: [false, [Validators.required]]
    })
  }

}
