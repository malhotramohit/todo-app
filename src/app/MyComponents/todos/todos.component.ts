import { Component, OnInit } from '@angular/core';
import { Todo } from 'src/app/Todo';

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css']
})
export class TodosComponent implements OnInit {

  todos: Todo[];
  localItem : string;
  constructor() {

    this.localItem = localStorage.getItem("todos");
    if(null==this.localItem){
      this.todos = [];
    }
    else{
      this.todos = JSON.parse(this.localItem);
    }


  }

  ngOnInit(): void {


    console.log("before promise")
   

    setTimeout(() => {
      console.log("after promise 2 sec")

    }, 2000);



    sumOfNum(34, 89)
      .then(result => console.log(result))
      .catch(error => console.error(error));

   



  }


  deleteTodo(todo:Todo){
    console.log(todo)
    const index = this.todos.indexOf(todo);
    this.todos.splice(index,1);
    localStorage.setItem("todos" , JSON.stringify(this.todos));

  }

  toDoAdd(todo:Todo){
    console.log("inside toDoAdd + "+todo)
    this.todos.push(todo);
    localStorage.setItem("todos" , JSON.stringify(this.todos));
  }

}



function sumOfNum(...elements) {

  return new Promise((resolve, reject) => {
    let sum = 0;

    if (elements.length > 3) {
      reject("Sum not possible");
    }
    else {
      let i = 0;
      while (i < elements.length) {
        sum += elements[i];
        i++;
      }
    }
    resolve(sum);
  }
  )


}

