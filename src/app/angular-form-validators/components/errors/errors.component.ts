import { Component, Input } from '@angular/core';
import { AbstractControl } from '@angular/forms';

@Component({
  selector: 'afv-errors',
  templateUrl: './errors.component.html',
  styleUrls: [ './errors.component.css' ]
})
export class ErrorsComponent {

  /**
   * In this input you must use controls reference
   *
   * @type {AbstractControl}
   */
  @Input() public control: AbstractControl;

  /**
   * You can use this input to manipulate component visibility
   *
   * @type {boolean}
   */
  @Input() public show;

  /**
   * You can use values: dirty, pristine, touched, untouched
   *
   * @type {string}
   */
  @Input() public showByStatus: 'dirty' | 'pristine' | 'touched' | 'untouched';

  constructor() { }

  public errors(control: AbstractControl): Array<string> {
    return Object.keys(control.errors || {})
      .reduce((acc: Array<string>, value: string) => acc.concat(control.getError(value)), []);
  }

  public get isShow(): boolean {
    const status: boolean = this.control && this.control[this.showByStatus];

    return this.show && status === undefined
        || this.show === undefined && status
        || this.show && status
        || this.show === undefined && status === undefined;
  }

}
