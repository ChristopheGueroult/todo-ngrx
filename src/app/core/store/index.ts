import { Action, ActionReducerMap, createReducer } from '@ngrx/store';
import { Todo } from '../interfaces/todo';

// step 1 decrire l'etat de notre appli via une interface pour le state
export interface AppState {
  // tous les elements relatifs aux todo
  todos: {
    data: Todo[];
  };
}

// step 2 init state (concerne uniquement la clé data de l'interface AppState)
export const todoInitialState = {
  data: [{ message: 'test', done: false }],
};

// step 3 : create a reducer to modify todos.data
// createReducer doit prendre au min un param qui est l'état initial de l'appli lié à la clé todos uniquement (data: Todo[])
export const todosRecuder = createReducer(todoInitialState);

// step 4 : create root reducer. obj qui regroupe tous les reducers de notre application
// ActionReducerMap est un type générique qui va prendre 2 autres types : le type de notre state global et le type Action
// c'est cet objet que l'on va passer à StoreModule.forRoot() sur AppModule
export const rootReducers: ActionReducerMap<AppState, Action> = {
  // associer la clé todos du state au todosReducer
  todos: todosRecuder,
};
