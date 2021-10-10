import { Action, ActionReducerMap } from '@ngrx/store';
import { todosRecuder, TodoState } from './todos.reducer';

export interface AppState {
  // on peut utiliser maintenant l'interface TodoState
  todos: TodoState;
}

// obj passe au StoreModule.forRoot() sur AppModule
export const rootReducers: ActionReducerMap<AppState, Action> = {
  todos: todosRecuder,
};

// a présent nous avons ici la config de tous nos réducers, l'objet rootReducer qui contient tous nos reducers
// et l'interface de notre state principal
