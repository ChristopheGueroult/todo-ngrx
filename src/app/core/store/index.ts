import { Action, ActionReducerMap } from '@ngrx/store';
import { todoFeatureKey, todosRecuder, TodoState } from './todos.reducer';

export interface AppState {
  // on peut utiliser maintenant l'interface TodoState
  todos: TodoState;
}

// obj passe au StoreModule.forRoot() sur AppModule
export const rootReducers: ActionReducerMap<AppState, Action> = {
  // cette syntaxe avec les [] permet de récupérer la valeur de cette variable comme nom de clé
  [todoFeatureKey]: todosRecuder,
};

// a présent nous avons ici la config de tous nos réducers, l'objet rootReducer qui contient tous nos reducers
// et l'interface de notre state principal
