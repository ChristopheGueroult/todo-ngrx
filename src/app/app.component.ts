import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { Todo } from './core/interfaces/todo';
import {
  addTodoAction,
  deleteTodoAction,
  toggleTodoAction,
} from './core/store/todos.actions';
import { selectTodosData } from './core/store/todos.selectors';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  // ici on a un exemple simple qui permet de récupérer une partie du state en invoquant directement ici la methode select() sur
  // le store. avec cette manière de faire, on est obligé de typer le state quand on l'injecte dans le constructor. mais en
  // realité un selector c'est la fonction de récupération qui se trouve dans select(). Pour ca on va plutot créer des selector
  // public todo$: Observable<Todo[]> = this.store.select((state: AppState) => {
  //   return state.todos.data;
  // });
  public todo$: Observable<Todo[]> = this.store.select(selectTodosData);
  public message!: string;
  // constructor(private store: Store<AppState>) {} // ex si on souhaite use la fonction select() dans ce component
  constructor(private store: Store) {} // plus besoin de typer le store injecter avec AppStore car on use uniquement les selectors d'rxjs
  public addTodo() {
    this.store.dispatch(
      addTodoAction({ item: { message: this.message, done: false } })
    );
  }
  public toggleTodo(index: number) {
    this.store.dispatch(toggleTodoAction({ index: index }));
  }
  public deleteTodo(index: number) {
    this.store.dispatch(deleteTodoAction({ index: index }));
  }
}
