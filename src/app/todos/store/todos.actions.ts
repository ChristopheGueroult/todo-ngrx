import { createAction, props } from '@ngrx/store';
import { Todo } from '../../core/interfaces/todo';

export const fetchTodosAction = createAction('[ todos ] fetch todos');
export const fetchTodoSuccessAction = createAction(
  '[ todos ] fetch todos success ',
  props<{ todos: Todo[] }>()
);
export const errorTodoAction = createAction(
  '[ todos ] error todos ',
  props<{ error: any }>()
);
// this action will be caped by effect
export const tryAddTodoAction = createAction(
  '[ todos ] try add todo',
  props<{ todo: Todo }>()
);
export const addTodoAction = createAction(
  '[ todos ] add todo',
  props<{ todo: Todo }>()
);
// action caped by effect
export const tryDeleteTodoAction = createAction(
  '[ todos ] try delete todo',
  props<{ todo: Todo }>()
);
export const deleteTodoAction = createAction(
  '[ todos ] delete todo',
  props<{ todo: Todo }>()
);
// action capted by effect
export const tryUpdateTodoAction = createAction(
  '[ todos ] try update todo',
  props<{ todo: Todo }>()
);
export const updateTodoAction = createAction(
  '[ todos ] update todo',
  props<{ todo: Todo }>()
);
// action capted by effect
export const tryGetTodoAction = createAction(
  '[ todos ] try get todo',
  props<{ id: string }>()
);
export const getTodoAction = createAction(
  '[ todos ] get todo',
  props<{ todo: Todo }>()
);
