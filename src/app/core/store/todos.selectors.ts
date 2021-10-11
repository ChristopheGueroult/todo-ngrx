import { createFeatureSelector, createSelector } from '@ngrx/store';
import { Todo } from '../interfaces/todo';
import { todoFeatureKey, TodoState } from './todos.reducer';

// createFeatureSelector permet de créer des selectors qui vont nous permettre de récupérer une portion de notre
// state. la portion qui nous interesse c'est la clé todos de notre state global
// le type de data qu'on attend c'est TodoState (qui correspond au type de la clé todos sur index.ts)
// le paramètre que l'on passe à createFeatureSelector doit correspondre à un nom de clé de l'obj rootReducers (index.ts)

// export const selectTodosFeature = createFeatureSelector<TodoState>('todos');

// pour eviter les erreurs de syntaxes, on va aller créer une variable sur todos.reducer.ts qui va contenir le string 'todos'
// on va ensuite pouvoir l'utiliser sur index.ts comme nom de clé et l'utiliser ici en param de createFeatureSelector()

export const selectTodosFeature =
  createFeatureSelector<TodoState>(todoFeatureKey);

// quand selectTodosData va etre invoqué dans appcomponent, il va d'abord invoquer selectTodosFeature qui va
// récupérer une portion du state, ensuite il va retur state.data
export const selectTodosData = createSelector(
  selectTodosFeature,
  (state: TodoState): Todo[] => {
    return state.data;
  }
);
