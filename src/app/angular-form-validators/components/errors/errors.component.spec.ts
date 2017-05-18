import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ErrorsComponent } from './errors.component';
import { Component, DebugElement } from '@angular/core';
import { By } from '@angular/platform-browser';
import { debug } from 'util';
import { AbstractControl, FormControl } from '@angular/forms';
import { AFValidators } from '../../validators/af-validators';

@Component({
  template: `<afv-errors [control]="control" [show]="show"></afv-errors>`
})
class TestHostComponent {
  control: AbstractControl = new FormControl();
  show: boolean;
}

describe('ErrorsComponent', () => {
  let testHostComponent: TestHostComponent;
  let testHostFixture: ComponentFixture<TestHostComponent>;
  let component: ErrorsComponent;
  let debugElement: DebugElement;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ErrorsComponent, TestHostComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    testHostFixture = TestBed.createComponent(TestHostComponent);
    testHostComponent = testHostFixture.componentInstance;

    debugElement = testHostFixture.debugElement.query(By.css('afv-errors'));
    component = debugElement.componentInstance;

    testHostFixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  describe('when component get control input and control it is valid', () => {
    beforeEach(() => {
      testHostComponent.control = new FormControl('test@test.com', AFValidators.email('email'));
      testHostComponent.show = true;
      testHostFixture.detectChanges();
    });

    it('shouldn\'t show errors', () => {
      expect(debugElement.queryAll(By.css('.afv-alert')).length).toBe(0);
    });
  });

  describe('when component get control input and control it is invalid', () => {
    beforeEach(() => {
      testHostComponent.control = new FormControl('testtest.com', AFValidators.email('email'));
      testHostComponent.show = true;
      testHostFixture.detectChanges();
    });

    describe('when component get show input true value', () => {
      it('should show errors', () => {
        expect(debugElement.queryAll(By.css('.afv-alert')).length).toBe(1);
      });
    });

    describe('when component get show input false value', () => {
      beforeEach(() => {
        testHostComponent.show = false;
        testHostFixture.detectChanges();
      });

      it('shouldn\'t show errors', () => {
        console.log(testHostComponent.show);
        expect(debugElement.queryAll(By.css('.afv-alert')).length).toBe(0);
      });
    });
  });
});
