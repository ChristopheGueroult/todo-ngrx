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
    (state: TodoState, { todo }: { todo: Todo }): TodoState => {
      return {
        ...state,
        data: [...state.data, todo],
      };
    }
  ),
  on(
    TodosActions.deleteTodoAction,
    (state: TodoState, { todo }: { todo: Todo }): TodoState => {
      return {
        ...state,
        data: state.data.filter((v) => v._id !== todo._id),
      };
    }
  ),
  on(
    TodosActions.updateTodoAction,
    (state: TodoState, { todo }: { todo: Todo }): TodoState => {
      return {
        ...state,
        data: state.data.map((v) => (v._id !== todo._id ? v : todo)),
      };
    }
  )
);
