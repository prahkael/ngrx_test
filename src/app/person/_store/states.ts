// *****************************************************************************
// Imports
// *****************************************************************************

import { Person } from '../person';

// *****************************************************************************
// State interfaces
// *****************************************************************************

export interface PersonState {
  persons: Person[];
  loaded : boolean;
  loading: boolean;
}

export interface AppState {
  personFeature: PersonState;
}

// *****************************************************************************
// Initial state
// *****************************************************************************

export const initialState: PersonState = {
  persons: [{
    firstname: 'Thomas',
    lastname : 'Fuchs',
    email    : 'thomas.fuchs@net-designer.net',
    phone    : '67893457834',
    userId   : '1'
  }],
  loaded  : false,
  loading : false
};

// *****************************************************************************
