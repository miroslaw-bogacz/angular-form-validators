import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ErrorsComponent } from './components/errors/errors.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [ ErrorsComponent ],
  exports: [ ErrorsComponent ],
})
export class AngularValidatorsModule { }
