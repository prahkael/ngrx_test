// *****************************************************************************
// Imports
// *****************************************************************************

import { Action } from '@ngrx/store';
import { Person, PersonId } from '../person';

// *****************************************************************************
// Action constants
// *****************************************************************************

export const READ_PERSONS          = '[Person] Read many';
export const READ_PERSONS_FAIL     = '[Person] Read many fail';
export const READ_PERSONS_SUCCESS  = '[Person] Read many success';

export const READ_PERSON           = '[Person] Read one';
export const READ_PERSON_FAIL      = '[Person] Read one fail';
export const READ_PERSON_SUCCESS   = '[Person] Read one success';

export const CREATE_PERSON         = '[Person] Create one';
export const CREATE_PERSON_FAIL    = '[Person] Create one Fail';
export const CREATE_PERSON_SUCCESS = '[Person] Create one Success';

export const UPDATE_PERSON         = '[Person] Update one';
export const UPDATE_PERSON_FAIL    = '[Person] Update one Fail';
export const UPDATE_PERSON_SUCCESS = '[Person] Update one Success';

export const DELETE_PERSON         = '[Person] Delete one';
export const DELETE_PERSON_FAIL    = '[Person] Delete one Fail';
export const DELETE_PERSON_SUCCESS = '[Person] Delete one Success';

// *****************************************************************************
// Action classes
// *****************************************************************************

export class ReadPersons implements Action {
    readonly type: string = READ_PERSONS;
}

export class ReadPersonsFail implements Action {
    readonly type: string = READ_PERSONS_FAIL;
    constructor(public payload: any) {}
}

export class ReadPersonsSuccess implements Action {
    readonly type: string = READ_PERSONS_SUCCESS;
    constructor(public payload: Person[]) {}
}

// *****************************************************************************

export class ReadPerson implements Action {
    readonly type: string = READ_PERSON;
    constructor(public payload: PersonId) {}
}

export class ReadPersonFail implements Action {
    readonly type: string = READ_PERSON_FAIL;
    constructor(public payload: any) {}
}

export class ReadPersonSuccess implements Action {
    readonly type: string = READ_PERSON_SUCCESS;
    constructor(public payload: Person) {}
}

// *****************************************************************************

export class CreatePerson implements Action {
  readonly type = CREATE_PERSON;
  constructor(public payload: Person) {}
}

export class CreatePersonFail implements Action {
  readonly type = CREATE_PERSON_FAIL;
  constructor(public payload: any) {}
}

export class CreatePersonSuccess implements Action {
  readonly type = CREATE_PERSON_SUCCESS;
  constructor(public payload: Person) {}
}

// *****************************************************************************

export class UpdatePerson implements Action {
  readonly type = UPDATE_PERSON;
  constructor(public payload: Person) {}
}

export class UpdatePersonFail implements Action {
  readonly type = UPDATE_PERSON_FAIL;
  constructor(public payload: any) {}
}

export class UpdatePersonSuccess implements Action {
  readonly type = UPDATE_PERSON_SUCCESS;
  constructor(public payload: Person) {}
}

// *****************************************************************************

export class DeletePerson implements Action {
  readonly type = DELETE_PERSON;
  constructor(public payload: PersonId) {}
}

export class DeletePersonFail implements Action {
  readonly type = DELETE_PERSON_FAIL;
  constructor(public payload: any) {}
}

export class DeletePersonSuccess implements Action {
  readonly type = DELETE_PERSON_SUCCESS;
  constructor(public payload: any) {}
}

// *****************************************************************************

export type PersonAction =
| ReadPersons
| ReadPersonsFail
| ReadPersonsSuccess
| ReadPerson
| ReadPersonFail
| ReadPersonSuccess
| CreatePerson
| CreatePersonFail
| CreatePersonSuccess
| UpdatePerson
| UpdatePersonFail
| UpdatePersonSuccess
| DeletePerson
| DeletePersonFail
| DeletePersonSuccess
;
