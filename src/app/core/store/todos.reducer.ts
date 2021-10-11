import { createReducer, on } from '@ngrx/store';
import { Todo } from '../interfaces/todo';
import * as TodosActions from './todos.actions';

// declarer une interface uniquement pour la clé totos du state global
export interface TodoState {
  data: Todo[];
}
// deplace l'init de la cle data du state global
export const todoInitialState = {
  data: [{ message: 'test', done: false }],
};

// nous permet d'utiliser cette constante comme clé sur notre fichier d'index dans rootReducers
export const todoFeatureKey = 'todos';

// deplace todosReducer
// après avoir créé nos action, on les utilise dans todosReducer qui effectuera une modif de TodoState en fonction de l'action
export const todosRecuder = createReducer(
  todoInitialState,
  // on() c'est comme un eventListner qui écoute si une action est dispatch
  on(
    TodosActions.addTodoAction,
    // 2e param est une fn qui va etre appelée si addTotoAction est dispatch
    // cette fn prend 2 params. Le premier est le state à modifier. le deuxième c'est le payload entier {type: string, item: Todo}
    // ici on va récupérer en 2e param uniquement la clé item (le type pas besoin) avec la description du typage et cette fn doit tjrs return un nouveau TodoState
    (state: TodoState, { item }: { item: Todo }): TodoState => {
      return {
        ...state, // on destructure pour return un new state cette methode doit etre pure. soit elle return un state inchangé soit, si les state est modifié, elle doit return un new state
        // jusque là data contient le tableau de Todo[] tel qu'il est dans todoInitialState
        data: [...state.data, item], // ici on surcharge la clé data qui contient maintenant tous les obj précédents + item qui est l'objet que l'on veut ajouter
      };
    }
  ),
  on(
    TodosActions.deleteTodoAction,
    (state: TodoState, { index }: { index: number }): TodoState => {
      console.log(state);

      return {
        ...state,
        data: state.data.filter((v, i) => i !== index), // filter return un new tab avec new ref
      };
    }
  ),
  on(
    TodosActions.toggleTodoAction,
    (state: TodoState, { index }: { index: number }): TodoState => {
      return {
        ...state,
        data: state.data.map(
          (v, i) => (i !== index ? v : { ...v, done: !v.done }) // on surcharge la clé done pour mettre l'inverse de v.done
        ),
      };
    }
  )
);

// maintenant, ici on a uniquement tout ce qui concerne la partie todos de notre state
// on décrit ce qu'il y a dans la clé todos via une interface
// on a un état initial
// on a notre reducer

// maintenant qu'on a fini de faire notre reducers qui prend en compte toutes les actions, il faut
// que dans notre appli, au lieu d'utiliser notre service on dispatch des action, pour cela on va voir les selector
