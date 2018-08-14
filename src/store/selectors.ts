import { createSelector } from '@ngrx/store';
import { createFeatureSelector } from '@ngrx/store';
import { ActionReducerMap }      from '@ngrx/store';

import { Person } from '../app/person/person';
import { PersonState } from './reducers';
import { reducer } from './reducers';
import { getPersonsEntities } from './reducers';

export interface OverPersonState {
    persons: PersonState
  }

export const getOverPersonState = createFeatureSelector<OverPersonState>('persons');

export const reducers: ActionReducerMap<OverPersonState> = {
    persons: reducer
};

export const getPersonState    = createSelector(
    getOverPersonState,
    (state: OverPersonState) => {
        return state.persons;
    }
);


export const getAllPersonsEntities = createSelector(
    getPersonState,
    (state: PersonState) => {
        if(!!state && !!state.entities) {
            return state.entities;
        }

        return {};
    }
);

export const getAllPersons        = createSelector(
    getAllPersonsEntities,
    (entities) => {
        console.log('dfasd', entities);
        return Object.keys(entities).map(id => entities[parseInt(id, 10)]);
    }
);