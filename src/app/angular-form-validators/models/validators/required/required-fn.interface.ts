import { AbstractControl } from '@angular/forms';

import { IRequiredResult } from './required-result.interface';

export interface IRequiredFn {
  (control: AbstractControl): IRequiredResult | null;
}
