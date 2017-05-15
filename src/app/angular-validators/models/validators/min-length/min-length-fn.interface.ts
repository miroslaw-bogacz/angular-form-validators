import { AbstractControl } from '@angular/forms';
import { IMinLengthResult } from './min-length-result.interface';

export interface IMinLengthFn {
  (control: AbstractControl): IMinLengthResult | null;
}
