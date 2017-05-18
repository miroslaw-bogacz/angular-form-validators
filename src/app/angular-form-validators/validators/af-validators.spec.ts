import { AbstractControl, FormControl } from '@angular/forms';
import { AFValidators } from './af-validators';

describe('AFValidators', () => {
  describe('when control has required validation', () => {
    describe('when control has correct value', () => {
      it('shouldn\'t has errors', () => {
        const control = new FormControl('Tested value');

        expect(
          AFValidators.required('name')(control)
        ).toBe(null);
      });
    });

    describe('when control hasn\'t correct value', () => {
      it('should has errors', () => {
        const control = new FormControl('');

        expect(
          AFValidators.required('name')(control)
        ).toEqual({ required: 'name is required.' });
      });
    });
  });

  describe('when control has requiredTrue validation', () => {
    describe('when control has correct value', () => {
      it('shouldn\'t has errors', () => {
        const control = new FormControl(true);

        expect(
          AFValidators.requiredTrue('name')(control)
        ).toBe(null);
      });
    });

    describe('when control hasn\'t correct value', () => {
      it('should has errors', () => {
        const control = new FormControl(false);

        expect(
          AFValidators.requiredTrue('name')(control)
        ).toEqual({ requiredTrue: 'name is required.' });
      });
    });
  });

  describe('when control has email validation', () => {
    describe('when control has correct value', () => {
      it('shouldn\'t has errors', () => {
        const control = new FormControl('correct@email.com');

        expect(
          AFValidators.email('name')(control)
        ).toBe(null);
      });
    });

    describe('when control hasn\'t correct value', () => {
      it('should has errors', () => {
        const control = new FormControl('inc*#-rrectemail.com');

        expect(
          AFValidators.email('name')(control)
        ).toEqual({ email: 'address email in name is incorrect' });
      });
    });
  });

  describe('when control has minLength validation', () => {
    describe('when control has correct value', () => {
      it('shouldn\'t has errors', () => {
        const control = new FormControl('123');

        expect(
          AFValidators.minLength('name', 3)(control)
        ).toBe(null);
      });
    });

    describe('when control hasn\'t correct value', () => {
      it('should has errors', () => {
        const control = new FormControl('123');

        expect(
          AFValidators.minLength('name', 4)(control)
        ).toEqual({ minLength: 'number in name is to low' });
      });
    });
  });

  describe('when control has maxLength validation', () => {
    describe('when control has correct value', () => {
      it('shouldn\'t has errors', () => {
        const control = new FormControl('123');

        expect(
          AFValidators.maxLength('name', 3)(control)
        ).toBe(null);
      });
    });

    describe('when control hasn\'t correct value', () => {
      it('should has errors', () => {
        const control = new FormControl('12345');

        expect(
          AFValidators.maxLength('name', 4)(control)
        ).toEqual({ maxLength: 'number in name is to high' });
      });
    });
  });
});
