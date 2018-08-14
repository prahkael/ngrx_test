// *****************************************************************************
// Imports
// *****************************************************************************

import { Component }    from '@angular/core';
import { OnInit }       from '@angular/core';

import { Store }        from '@ngrx/store';
import { Observable }   from 'rxjs';

import { Person }       from './person';
import * as fromStore   from './_store';

// *****************************************************************************
// Class
// *****************************************************************************

@Component({
  selector     : 'app-person',
  templateUrl  : 'person.component.html',
  styleUrls    : ['person.component.scss'],
})
export class PersonComponent implements OnInit {

  // ***************************************************************************
  // Properties and constructor
  // ***************************************************************************

  persons$: Observable<Person[]>;

  // ***************************************************************************

  constructor(private _store: Store<fromStore.AppState>) {}

  // ***************************************************************************
  // Public methods
  // ***************************************************************************


  ngOnInit() {
    this._store.dispatch(new fromStore.CreatePerson({
      firstname: 'Marco',
      lastname : 'Schaule',
      email    : 'marco.schaule@net-designer.net',
      phone    : '98765435678',
      userId   : '2'
    }));

    this.persons$ = this._store.select(fromStore.selectPersons);
  }

  // ***************************************************************************
}
