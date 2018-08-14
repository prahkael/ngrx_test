// *****************************************************************************
// Imports
// *****************************************************************************

import { createSelector }        from '@ngrx/store';
import { createFeatureSelector } from '@ngrx/store';

import * as fromStates           from './states';
import { Person }                from '../person';

// *****************************************************************************
// Selectors
// *****************************************************************************

export const selectPersonFeature =
    (state: fromStates.AppState) => state.personFeature;

export const selectPersons = createSelector(
  selectPersonFeature,
  (state: fromStates.PersonState): Person[] => state.persons
);

export const selectPersonLoading = createSelector(
  selectPersonFeature,
  (state: fromStates.PersonState): boolean => state.loading
);

export const selectPersonLoaded = createSelector(
  selectPersonFeature,
  (state: fromStates.PersonState): boolean => state.loaded
);

// *****************************************************************************
