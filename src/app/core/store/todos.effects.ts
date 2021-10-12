import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { of } from 'rxjs';
import { catchError, map, switchMap } from 'rxjs/operators';
import { Todo } from '../interfaces/todo';
import { TodoService } from '../services/todo.service';
import {
  errorTodoAction,
  fetchTodosAction,
  fetchTodoSuccessAction,
} from './todos.actions';

// on passe cette class a EffectsModule.forRoot([]) sur appModule
@Injectable()
export class TodosEffects {
  // createEffect() prend en param un fn qui return l'observable action$. C'est lui qui emmet toutes les actions dispatch de l'appli via le Store
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
  // Actions est un observable fournit par ngrx/effects qui va etre à l'écoute de tous les dispatch d'actions de l'appli
  constructor(private actions$: Actions, private todoService: TodoService) {}
}
