import { ClassValidatorFields } from '../class-validator-fields';
import * as libClassvalidator from 'class-validator';
class StubClassValidatorFields 
    extends ClassValidatorFields<{field: string}> {}
describe('ClassValidatorFields Unit Tests', () => {
    it('should initialize class' ,() => {
        const validator = new StubClassValidatorFields();
        expect(validator.errors).toBeNull();
        expect(validator.validatedData).toBeNull();
    });

    it('should validate and return erros', () => {
        const spy = jest.spyOn(libClassvalidator, 'validateSync');
        spy.mockReturnValue([
            {property: 'field', constraints: {isRequired: 'some error'}}
        ]);
        const validator = new StubClassValidatorFields();
        expect(validator.validate(null)).toBeFalsy();
        expect(spy).toHaveBeenCalled();
        expect(validator.validatedData).toBeNull();
        expect(validator.errors).toStrictEqual({field: ['some error']});
    });

    it('should validate and return no erros', () => {
        const spy = jest.spyOn(libClassvalidator, 'validateSync');
        spy.mockReturnValue([]);
        const validator = new StubClassValidatorFields();
        expect(validator.validate({field: 'foo'})).toBeTruthy();
        expect(spy).toHaveBeenCalled();
        expect(validator.validatedData).toStrictEqual({field: 'foo'});
        expect(validator.errors).toBeNull();
    });
});
