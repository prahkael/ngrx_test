import { BrowserModule }         from '@angular/platform-browser';
import { NgModule }              from '@angular/core';
import { CommonModule }          from '@angular/common';
import { HttpClientModule }      from '@angular/common/http';
import { ReactiveFormsModule }   from '@angular/forms';
import { StoreRouterConnectingModule } from '@ngrx/router-store';

import { AppComponent }          from './app.component';
import { PersonComponent }       from './person/person.component';

import { StoreModule }           from '@ngrx/store';
import { MetaReducer }           from '@ngrx/store';
import { Routes, RouterModule }  from '@angular/router';

import { StoreDevtoolsModule }   from '@ngrx/store-devtools';
import { storeFreeze }           from 'ngrx-store-freeze';

import { reducers }              from '../store/selectors';

const environment = {
  development: true,
  production: false,
};

export const metaReducers: MetaReducer<any>[] = !environment.production
  ? [storeFreeze]
  : [];

  export const ROUTES: Routes = [
    { path: '', pathMatch: 'full', redirectTo: 'overview' },
    {
      path: 'overview',
      component: PersonComponent,
    },
  ];

@NgModule({
  declarations: [
    AppComponent,
    PersonComponent
  ],
  imports: [
    BrowserModule,
    CommonModule,
    ReactiveFormsModule,
    HttpClientModule,
    RouterModule.forRoot(ROUTES),
    StoreModule.forRoot(reducers, { metaReducers }),
    // StoreModule.forFeature('overview', reducers),
    StoreRouterConnectingModule,
    environment.development ? StoreDevtoolsModule.instrument() : [],
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
