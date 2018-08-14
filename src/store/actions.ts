import { Action } from '@ngrx/store';
import { Person } from '../app/person/person';

export const LOAD_PERSONS         = '[Person] Load';
export const LOAD_PERSONS_FAIL    = '[Person] Load fail';
export const LOAD_PERSONS_SUCCESS = '[Person] Load success';


export class LoadPersons implements Action {
    readonly type: string = LOAD_PERSONS;
    constructor(public payload?: any) {}
}

export class LoadPersonsFail implements Action {
    readonly type: string = LOAD_PERSONS_FAIL;
    constructor(public payload: any) {}
}

export class LoadPersonsSuccess implements Action {
    readonly type: string = LOAD_PERSONS_SUCCESS;
    constructor(public payload: Person[]){}
}

export const CREATE_PERSON         = '[Person] Create';
export const CREATE_PERSON_FAIL    = '[Person] Create Fail';
export const CREATE_PERSON_SUCCESS = '[Person] Create Success';

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

export const UPDATE_PERSON         = '[Person] Update';
export const UPDATE_PERSON_FAIL    = '[Person] Create Fail';
export const UPDATE_PERSON_SUCCESS = '[Person] Create Success';

export class UpdatePerson implements Action {
  readonly type = CREATE_PERSON;
  constructor(public payload: Person) {}
}

export class UpdatePersonFail implements Action {
  readonly type = CREATE_PERSON_FAIL;
  constructor(public payload: any) {}
}

export class UpdatePersonSuccess implements Action {
  readonly type = CREATE_PERSON_SUCCESS;
  constructor(public payload: Person) {}
}


export type PersonActions = 
| LoadPersons 
| LoadPersonsFail 
| LoadPersonsSuccess
| UpdatePerson 
| UpdatePersonFail 
| UpdatePersonSuccess 
| CreatePerson 
| CreatePersonFail 
| CreatePersonSuccess 
;