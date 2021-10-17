import { Params } from '@angular/router';
import { createFeatureSelector, createSelector } from '@ngrx/store';
import { Todo } from '../interfaces/todo';
import { selectRouteParams } from './router.selectors';
import { todoFeatureKey, TodoState } from './todos.reducer';

export const selectTodosFeature =
  createFeatureSelector<TodoState>(todoFeatureKey);

export const selectTodosData = createSelector(
  selectTodosFeature,
  (state: TodoState): Todo[] => {
    return state.data;
  }
);

export const selectTodoById = createSelector(
  selectTodosData,
  selectRouteParams,
  (todos: Todo[], params: Params) => {
    const id = params['id'];
    if (id && todos.length) {
      return todos.find((t) => t._id === id);
    } else {
      return null;
    }
  }
);
