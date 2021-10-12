import { createFeatureSelector, createSelector } from '@ngrx/store';
import * as fromClients from '../reducers/clients.reducer';

export const selectClientsState = createFeatureSelector<fromClients.State>(
  fromClients.clientsFeatureKey
);
