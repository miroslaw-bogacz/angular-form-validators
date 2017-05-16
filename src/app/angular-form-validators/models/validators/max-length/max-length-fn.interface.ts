import { AbstractControl } from '@angular/forms';

import { IMaxLengthResult } from './max-length-result.interface';

export interface IMaxLengthFn {
  (control: AbstractControl): IMaxLengthResult;
}
