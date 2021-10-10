// ici nous allons mettre toutes les actions qu'il va etre possible de faire pour modifier
// la portion du state qui concerne les todos

import { createAction, props } from '@ngrx/store';
import { Todo } from '../interfaces/todo';

// a quoi ressemble une Action :
// {
//   type: 'un string unique',
//   payload: une ou plusieurs données dont on a besoin pour modifier notre state
// }

// le premier paramètre de createAction doit etre un string unique (createAction verifie à notre place qu'il est bien unique)
// et qui décrit ce que fait notre action. bonne pratique, commencer la description par la portion du state que cette action concerne

// addTodoAction
// on veut passer au payload l'obj qui doit etre ajouté à notre collection
// props() est une fonction qu'il faut importer depuis ngrx/store. c'est cette fonction qui va nous permettre de passer
// des data en payload d'une Action. le type de props doit correspondre au type de data qu'on passe au payload
// le type  de payload est toujours un obj puisque les propriétés de cet objet vont etre mergées avec l'objet créé par createAction()
export const addTodoAction = createAction(
  '[todos] Add todo',
  props<{ item: Todo }>()
);
// représentation de mon Action ?
// {
//   type: '[todos] Add todo',
//   item: Todo
// }

// ex d'une action avec plusieur data en payload :
// const addTodoAction = createAction('[todos] Add todo', props<{ item: Todo, test: boolean }>());
// {
//   type: '[todos] Add todo',
//   item: Todo,
//   test: boolean
// }

// deleteTodoAction
// on veut passer au payload l'index de l'obj à supprimer dans la collection
export const deleteTodoAction = createAction(
  '[todos] Add todo',
  props<{ index: number }>()
);

// toggleTodoAction
// on veut passer au payload l'index de l'obj sur lequel on veut change la cle done dans la collection
export const toggleTodoAction = createAction(
  '[todos] Add todo',
  props<{ index: number }>()
);

// A présent quand on va dispatch une action depuis n'importe quel endroit de notre appli
// ngrx va invoquer tous les reducers qui sont déclarés dans StoreModule.forRoot()
// il va donc invoquer le todosReducer qui doit effectuer une modification du TodoState quand il recoit une action
// on va maintenant modifier todosReducer
