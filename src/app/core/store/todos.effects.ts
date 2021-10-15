import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { of } from 'rxjs';
import { catchError, map, switchMap } from 'rxjs/operators';
import { Todo } from '../interfaces/todo';
import { TodoService } from '../services/todo.service';
import {
  addTodoAction,
  deleteTodoAction,
  errorTodoAction,
  fetchTodosAction,
  fetchTodoSuccessAction,
  tryAddTodoAction,
  tryDeleteTodoAction,
  tryUpdateTodoAction,
  updateTodoAction,
} from './todos.actions';

@Injectable()
export class TodosEffects {
  constructor(private actions$: Actions, private todoService: TodoService) {}
  fetchTodosEffect$ = createEffect(() =>
    this.actions$.pipe(
      ofType(fetchTodosAction),
      switchMap(() =>
        this.todoService.fetchTodos().pipe(
          map((todos: Todo[]) => fetchTodoSuccessAction({ todos })),
          catchError((error) => of(errorTodoAction({ error })))
        )
      )
    )
  );
  // effect to try add
  tryAddTodoEffect$ = createEffect(() =>
    this.actions$.pipe(
      ofType(tryAddTodoAction),
      switchMap(({ todo }: { todo: Todo }) =>
        this.todoService.addTodo(todo).pipe(
          map((todo: Todo) => addTodoAction({ todo })),
          catchError((error) => of(errorTodoAction({ error })))
        )
      )
    )
  );

  // effect to try update
  tryUpdateTodoEffect$ = createEffect(() =>
    this.actions$.pipe(
      ofType(tryUpdateTodoAction),
      switchMap(({ todo }: { todo: Todo }) =>
        this.todoService.updateTodo(todo).pipe(
          map((todo: Todo) => updateTodoAction({ todo })),
          catchError((error) => of(errorTodoAction({ error })))
        )
      )
    )
  );

  // effect to try delete
  tryDelateTodoEffect$ = createEffect(() =>
    this.actions$.pipe(
      ofType(tryDeleteTodoAction),
      switchMap(({ todo }: { todo: Todo }) =>
        this.todoService.deleteTodo(todo).pipe(
          map(() => deleteTodoAction({ todo })), // dans map je récupère pas la rep de l'api car return un string, par contre je dois passer à deleteTodoAction une toto, on utilise donc le payload recupérer dans le switchMap
          catchError((error) => of(errorTodoAction({ error })))
        )
      )
    )
  );
}
