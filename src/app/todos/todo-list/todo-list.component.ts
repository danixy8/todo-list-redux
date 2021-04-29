import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { filtrosValidos } from 'src/app/filtro/filtro.actions';
import { AppState } from '../../app.reducer';
import { Todo } from '../models/todo.model';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css']
})
export class TodoListComponent implements OnInit {

  todoList: Todo[] = [];
  filtro: filtrosValidos = 'todos';

  constructor( private store: Store<AppState> ) {
    // this.store.select('todos').subscribe(todo => this.todoList = todo );
    this.store.subscribe( ({todos, filtro}) => {
      this.todoList = todos;
      this.filtro = filtro;
    });
   }

  ngOnInit(): void {
  }

}
