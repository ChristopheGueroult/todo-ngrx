import { routerReducer, RouterState } from '@ngrx/router-store';
import { Action, ActionReducerMap } from '@ngrx/store';
import {
  todoFeatureKey,
  todosRecuder,
  TodoState,
} from '../../todos/store/todos.reducer';

export interface AppState {
  todos: TodoState;
  router: RouterState; // add key router with type RouterState from ngrx-store
}

export const rootReducers: ActionReducerMap<AppState, Action> = {
  [todoFeatureKey]: todosRecuder,
  // add router reducer fournit par ngrx-store
  router: routerReducer,
};
