import { createReducer, on } from '@ngrx/store';
import { Todo } from '../interfaces/todo';
import * as TodosActions from './todos.actions';

export interface TodoState {
  data: Todo[];
  // pour error
  error: any;
}
// on init le state.todos.data avec un tableau vide car on peut utiliser un effect pour l'init
export const todoInitialState: TodoState = {
  data: [],
  error: null,
};

export const todoFeatureKey = 'todos';

export const todosRecuder = createReducer(
  todoInitialState,
  on(
    TodosActions.fetchTodoSuccessAction,
    (state: TodoState, { todos }: { todos: Todo[] }): TodoState => {
      return {
        ...state,
        data: [...todos],
      };
    }
  ),
  on(
    TodosActions.errorTodoAction,
    (state: TodoState, { error }: { error: any }): TodoState => {
      return {
        ...state,
        error: error,
      };
    }
  ),
  on(
    TodosActions.addTodoAction,
    (state: TodoState, { item }: { item: Todo }): TodoState => {
      return {
        ...state,
        data: [...state.data, item],
      };
    }
  ),
  on(
    TodosActions.deleteTodoAction,
    (state: TodoState, { index }: { index: number }): TodoState => {
      console.log(state);

      return {
        ...state,
        data: state.data.filter((v, i) => i !== index),
      };
    }
  ),
  on(
    TodosActions.toggleTodoAction,
    (state: TodoState, { index }: { index: number }): TodoState => {
      return {
        ...state,
        data: state.data.map((v, i) =>
          i !== index ? v : { ...v, done: !v.done }
        ),
      };
    }
  )
);
