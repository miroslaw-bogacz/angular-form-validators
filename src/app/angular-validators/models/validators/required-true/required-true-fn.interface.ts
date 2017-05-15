import { AbstractControl } from '@angular/forms';

import { IRequiredTrueResult } from './required-true-result.interface';

export interface IRequiredTrueFn {
  (control: AbstractControl): IRequiredTrueResult | null;
}
