import { isNotEmpty, IsNotEmpty, IsNumber, IsString, MaxLength } from 'class-validator';
import { ClassValidatorFields } from '../class-validator-fields';

class StubRules {
    @MaxLength(255)
    @IsString()
    @IsNotEmpty()
        name: string;

    @IsNumber()
    @isNotEmpty()
        price: number;
    constructor(data: any) {
        Object.assign(this, data);
    }
}

class StubClassValidatorFields extends ClassValidatorFields<StubRules> {
    validate(data: any): boolean {
        return super.validate(new StubRules(data));
    }
}
describe('ClassValiatorFields Integration Tests', () => {

    let validator: StubClassValidatorFields;
    beforeEach(() => {
        validator = new StubClassValidatorFields();

    });
    it('should validate and return erros', () => {
        expect(validator.validate(null)).toBeFalsy();
    });

    it('should validate and return erros in prop name', () => {
        expect(validator.validate({price: 123})).toBeFalsy();
        expect(validator.errors)
            .toStrictEqual({
                name: [
                    'name should not be empty',
                    'name must be a string',
                    'name must be shorter than or equal to 255 characters'
                ]
            });
    });

    it('should validate and return no erros', () => {
        const data = {
            name: 'John Doe',
            price: 10.2
        };
        expect(validator.validate(data)).toBeTruthy();
        expect(validator.errors).toBeNull();
        expect(validator.validatedData).toStrictEqual(new StubRules(data));
    });
});
