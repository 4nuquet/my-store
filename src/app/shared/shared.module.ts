import {
  NgModule,
  CUSTOM_ELEMENTS_SCHEMA,
  NO_ERRORS_SCHEMA
} from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AlertComponent } from './alert/alert.component';
import { FormComponent } from './form/form.component';
import { ListComponent } from './list/list.component';
import { ListDirective } from './list/list.directive';
import { ModalComponent } from './modal/modal.component';

@NgModule({
  declarations: [
    AlertComponent,
    FormComponent,
    ListComponent,
    ListDirective,
    ModalComponent
  ],
  imports: [CommonModule, FormsModule, ReactiveFormsModule],
  exports: [
    AlertComponent,
    FormComponent,
    ListComponent,
    ListDirective,
    ModalComponent
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA]
})
export class SharedModule {}
