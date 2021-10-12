import { createAction, props } from '@ngrx/store';
import { Todo } from '../interfaces/todo';

// ajout action qui va déclencher un effet de bord. cette action a ce stade quand elle va etre dispâtch ne va rien faire
// psk aucun reducer ne l'écoute, donc aucun effet sur le state
// pour déclencher un effet quand cette action va etre dispatch, on va créer un effect

export const fetchTodosAction = createAction('[ todos ] fetch todos'); // action a dispatch dans appcomponent ngOnInit. Cette action va etre captée par notre effect et dans l'effect on dispatch une nouvelle action qui elle va etre écoutée par notre reducer pour maj le state

// c'est cette action qui est dispatch dans l'effect fetchEffect
export const fetchTodoSuccessAction = createAction(
  '[ todos ] fetch todos success ',
  props<{ todos: Todo[] }>()
);
// une action generique qu'on va use a chaque fois qu'on aura une erreur sur une action asynchrone (use in effects too)
export const errorTodoAction = createAction(
  '[ todos ] error todos ',
  props<{ error: any }>()
);

export const addTodoAction = createAction(
  '[ todos ] add todo',
  props<{ item: Todo }>()
);
export const deleteTodoAction = createAction(
  '[ todos ] delete todo',
  props<{ index: number }>()
);
export const toggleTodoAction = createAction(
  '[ todos ] toggle todo',
  props<{ index: number }>()
);
