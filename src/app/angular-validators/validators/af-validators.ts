import { AbstractControl, Validators } from '@angular/forms';

import { IRequiredResult } from '../models/validators/required/required-result.interface';
import { IRequiredFn } from '../models/validators/required/required-fn.interface';
import { IRequiredTrueFn } from '../models/validators/required-true/required-true-fn.interface';
import { IRequiredTrueResult } from '../models/validators/required-true/required-true-result.interface';
import { IEmailFn } from '../models/validators/email/email-fn.interface';
import { IEmailResult } from '../models/validators/email/email-result.interface';
import { IMinLengthFn } from '../models/validators/min-length/min-length-fn.interface';
import { IMinLengthResult } from '../models/validators/min-length/min-length-result.interface';
import { IMaxLengthFn } from '../models/validators/max-length/max-length-fn.interface';
import { IMaxLengthResult } from '../models/validators/max-length/max-length-result.interface';
import { IMessages } from '../models/validators/messages.interface';

export class AFValidators {
  /**
   * Messages for validators
   *
   * @type {IMessages}
   */
  static messages: IMessages = <IMessages>{
    required: `${name} is required.`,
    requiredTrue: `${name} is required.`,
    email: `address email in ${name} is incorrect`,
    minLength: `number in ${name} is to low`,
    maxLength: `number in ${name} is to high`,
  };

  /**
   * @param name {string}
   * @return {IRequiredFn}
   */
  static requred(name: string): IRequiredFn {
    return (control: AbstractControl) => !Validators.required(control) ? null : <IRequiredResult>{
      required: AFValidators.messages.required,
    };
  }

  /**
   * @param name {string}
   * @return {IRequiredTrueFn}
   */
  static requredTrue(name: string): IRequiredTrueFn {
    return (control: AbstractControl) => !Validators.requiredTrue(control) ? null : <IRequiredTrueResult>{
      requiredTrue: AFValidators.messages.requiredTrue,
    };
  }

  /**
   * @param name {string}
   * @return {IEmailFn}
   */
  static email(name: string): IEmailFn {
    return (control: AbstractControl) => !Validators.email(control) ? null : <IEmailResult>{
      email: AFValidators.messages.email,
    };
  }

  /**
   * @param name {string}
   * @param min {number}
   * @return {IMinLengthFn}
   */
  static minLength(name: string, min: number): IMinLengthFn {
    return (control: AbstractControl) => !Validators.minLength(min)(control) ? null : <IMinLengthResult>{
      minLength: AFValidators.messages.minLength,
    };
  }

  /**
   * @param name {string}
   * @param max {number}
   * @return {IMaxLengthFn}
   */
  static maxLength(name: string, max: number): IMaxLengthFn {
    return (control: AbstractControl) => !Validators.maxLength(max)(control) ? null : <IMaxLengthResult>{
      maxLength: AFValidators.messages.maxLength,
    };
  }
}
