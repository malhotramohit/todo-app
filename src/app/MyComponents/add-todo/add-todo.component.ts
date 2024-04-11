import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Todo } from 'src/app/Todo';

@Component({
  selector: 'app-add-todo',
  templateUrl: './add-todo.component.html',
  styleUrls: ['./add-todo.component.css']
})
export class AddTodoComponent implements OnInit {


  title:string;
  desc:string;
  @Output() addToDo : EventEmitter<Todo>  = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

  onSubmit(){

    const todo : Todo = {
      sno : 9,
      title :  this.title,
      desc : this.desc,
      active : true
    }

    this.addToDo.emit(todo);

  }

}
