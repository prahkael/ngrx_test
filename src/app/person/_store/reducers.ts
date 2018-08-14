// *****************************************************************************
// Imports
// *****************************************************************************

import { ActionReducerMap } from '@ngrx/store';

import * as fromActions     from './actions';
import * as fromStates      from './states';

// *****************************************************************************
// States
// *****************************************************************************

export function personReducer(
  state = fromStates.initialState,
  action: fromActions.PersonAction
): fromStates.PersonState {

  switch (action.type) {
    case fromActions.CREATE_PERSON: {
      const person  = action['payload'];
      const persons = [ ...state.persons, person, ];
      return { ...state, persons };
    }
  }

  return { ...state };
}

// *****************************************************************************
// Reducers config
// *****************************************************************************

export const reducers: ActionReducerMap<fromStates.AppState> = {
  personFeature: personReducer
};

// *****************************************************************************

// export const getPersonsEntities = (state: fromStates.PersonState) => state.persons;
// export const getPersonsLoading  = (state: fromStates.PersonState) => state.loading;
// export const getPersonsLoaded   = (state: fromStates.PersonState) => state.loaded;
