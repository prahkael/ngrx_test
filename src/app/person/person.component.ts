// *****************************************************************************
// Imports
// *****************************************************************************

import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

import { Store } from '@ngrx/store';
import { Observable } from 'rxjs/Observable';

import { Person } from './person';
import { PersonState } from '../../store/reducers';
import { getAllPersons } from '../../store/selectors';
import { LoadPersons } from '../../store/actions';
import { CreatePerson } from '../../store/actions';

// *****************************************************************************
// Class
// *****************************************************************************

@Component({
  selector     : 'app-person',
  templateUrl  : 'person.component.html',
  styleUrls    : ['person.component.scss'],
})
export class PersonComponent {
  
  // ***************************************************************************
  // Public properties
  // ***************************************************************************
  
  persons$: Observable<Person[]>;

  // ***************************************************************************
  // Private properties
  // ***************************************************************************
  
  // ***************************************************************************
  // Public methods
  // ***************************************************************************
  
  constructor(private store: Store<PersonState>) {
    this.store.dispatch(new CreatePerson({
        firstname: 'Marco',
        lastname : 'Schaule',
        email    : 'marco.schaule@net-designer.net',
        phone    : '98765435678',
        userId   : '2'
    }));
  }

  ngOnInit() {
    this.persons$ = this.store.select(getAllPersons);
    this.store.dispatch(new LoadPersons());
  }

  // ***************************************************************************
  // Private methods
  // ***************************************************************************
  
  // ***************************************************************************
  // ***************************************************************************
}