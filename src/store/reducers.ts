import { 
    LOAD_PERSONS, 
    LOAD_PERSONS_FAIL, 
    LOAD_PERSONS_SUCCESS, 
    CREATE_PERSON, 
    UPDATE_PERSON,
    PersonActions 
} from './actions';
import { Person } from '../app/person/person';

export interface PersonState {
    entities: {[id: string]: Person};
    loaded : boolean;
    loading: boolean;
}

export const initialState: PersonState = {
    entities: {
        "1": {
            firstname: 'Thomas',
            lastname : 'Fuchs',
            email    : 'thomas.fuchs@net-designer.net',
            phone    : '67893457834',
            userId   : "1"
        }
    },
    loaded  : false,
    loading : false
  };

  export function reducer(
      state = initialState,
      action: PersonActions
  ): PersonState {

    switch(action.type) {
        case LOAD_PERSONS: {
            console.log(action);
            return {...state};
        }
        case LOAD_PERSONS_FAIL: {
            return {...state};
        }
        case LOAD_PERSONS_SUCCESS: {
            return {...state};
        }
        case CREATE_PERSON: {
            const person = action.payload;
            const entities = {
                ...state.entities,
                [person.userId]: person,
            };
            console.log('reducer create: ', entities);
            return {
                ...state,
                entities,
            };
        }
        case UPDATE_PERSON: {
            return {...state};
        }
    }

    return {...state};
}

export const getPersonsEntities = (state: PersonState) => state.entities;
export const getPersonsLoading  = (state: PersonState) => state.loading;
export const getPersonsLoaded   = (state: PersonState) => state.loaded;