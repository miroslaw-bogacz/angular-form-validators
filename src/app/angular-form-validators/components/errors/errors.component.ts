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

  /**
   * @type {string|string[]}
   */
  @Input('containerClass') public containerClass: string | string[];

  /**
   * @type {string|string[]}
   */
  @Input('itemClass') public itemClass: string | string[];

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

  public getClasses(type: 'container' | 'item'): string {
    const classes: string | string[] = type === 'container'
      ? this.containerClass || 'afv-alert'
      : this.itemClass || ['afv-alert__item', 'afv-alert__item--error'];

    return Array.isArray(classes) ? classes.join(' ') : classes;
  }

}
