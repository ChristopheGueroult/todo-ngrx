import { Action, createReducer, on } from '@ngrx/store';
import * as ClientsActions from '../actions/clients.actions';

export const clientsFeatureKey = 'clients';

export interface State {

}

export const initialState: State = {

};


export const reducer = createReducer(
  initialState,

  on(ClientsActions.loadClientss, state => state),

);

