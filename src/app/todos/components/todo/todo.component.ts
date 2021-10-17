import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { Todo } from 'src/app/core/interfaces/todo';
import {
  fetchTodosAction,
  tryAddTodoAction,
  tryDeleteTodoAction,
  tryGetTodoAction,
  tryUpdateTodoAction,
} from 'src/app/todos/store/todos.actions';
import {
  selectTodo,
  selectTodosData,
} from 'src/app/todos/store/todos.selectors';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.scss'],
})
export class TodoComponent implements OnInit {
  // ici on a un exemple simple qui permet de récupérer une partie du state en invoquant directement ici la methode select() sur
  // le store. avec cette manière de faire, on est obligé de typer le state quand on l'injecte dans le constructor. mais en
  // realité un selector c'est la fonction de récupération qui se trouve dans select(). Pour ca on va plutot créer des selector
  // public todo$: Observable<Todo[]> = this.store.select((state: AppState) => {
  //   return state.todos.data;
  // });
  public todo$: Observable<Todo[]> = this.store.select(selectTodosData);
  public selectedTodo$: Observable<Todo | null | undefined> =
    this.store.select(selectTodo);
  public message!: string;
  // constructor(private store: Store<AppState>) {} // ex si on souhaite use la fonction select() dans ce component
  constructor(private store: Store, private route: ActivatedRoute) {
    this.route.paramMap.subscribe((params: Params) => {
      const id = params.get('id');
      this.store.dispatch(tryGetTodoAction({ id }));
    });
  }

  ngOnInit(): void {
    this.store.dispatch(fetchTodosAction());
  }

  public addTodo() {
    this.store.dispatch(
      tryAddTodoAction({ todo: { message: this.message, done: false } })
    );
  }
  public updateTodo(todo: Todo) {
    const newTodo = { ...todo, done: !todo.done };
    this.store.dispatch(tryUpdateTodoAction({ todo: newTodo }));
  }
  public deleteTodo(todo: Todo) {
    this.store.dispatch(tryDeleteTodoAction({ todo }));
  }
}
