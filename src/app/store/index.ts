import { NgModule } from '@angular/core';

import {StoreModule} from '@ngrx/store';
import {StoreDevtoolsModule} from '@ngrx/store-devtools';
import {environment} from '../../environments/environment';
import {CoreReducers} from './settings';

@NgModule({
  declarations: [],
  imports: [ StoreModule.forRoot(CoreReducers),
  StoreDevtoolsModule.instrument({
    maxAge: 25,
    logOnly: environment.production
  }) ],
  exports: [StoreModule],
  providers: [],
})

export class CoreStoreModule {}
