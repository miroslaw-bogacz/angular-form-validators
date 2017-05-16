import { AbstractControl } from '@angular/forms';

import { IEmailResult } from './email-result.interface';

export interface IEmailFn {
  (control: AbstractControl): IEmailResult | null;
}