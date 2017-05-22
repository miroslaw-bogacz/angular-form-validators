import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ErrorsComponent } from './errors.component';
import { Component, DebugElement } from '@angular/core';
import { By } from '@angular/platform-browser';
import { AbstractControl, FormControl } from '@angular/forms';
import { AFValidators } from '../../validators/af-validators';

@Component({
  template: `<afv-errors 
                [control]="control" 
                [show]="show" 
                [containerClass]="containerClass"
                [itemClass]="itemClass"
             ></afv-errors>`
})
class TestHostComponent {
  control: AbstractControl = new FormControl();
  show: boolean;
  containerClass: string | string[];
  itemClass: string | string[];
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
      expect(debugElement.queryAll(By.css('.afv-alert__item')).length).toBe(0);
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
        expect(debugElement.queryAll(By.css('.afv-alert')).length).toBe(0);
      });
    });

    describe('when component has custom input containerClass value', () => {
      it('should render container with custom classes', () => {
        testHostComponent.containerClass = 'custom-container-class';
        testHostFixture.detectChanges();

        expect(debugElement.queryAll(By.css('.custom-container-class')).length).toBe(1);
      });

      it('should render container with custom classes', () => {
        testHostComponent.containerClass = ['custom-container-class', 'custom-container-class-2'];
        testHostFixture.detectChanges();

        expect(debugElement.queryAll(By.css('.custom-container-class')).length).toBe(1);
        expect(debugElement.queryAll(By.css('.custom-container-class-2')).length).toBe(1);
      });
    });

    describe('when component has custom input itemCLass value', () => {
      it('should render container with custom classes', () => {
        testHostComponent.itemClass = 'custom-item-class';
        testHostFixture.detectChanges();

        expect(debugElement.queryAll(By.css('.custom-item-class')).length).toBe(1);
      });

      it('should render container with custom classes', () => {
        testHostComponent.itemClass = ['custom-item-class', 'custom-item-class-2'];
        testHostFixture.detectChanges();

        expect(debugElement.queryAll(By.css('.custom-item-class')).length).toBe(1);
        expect(debugElement.queryAll(By.css('.custom-item-class-2')).length).toBe(1);
      });
    });
  });
});
