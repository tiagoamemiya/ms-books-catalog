import { CategoryRules, CategoryValidator, CategoryValidatorFactory } from '../category-validator';

describe('CategoryValidator Tests', () => {
    let validatorFactory: CategoryValidator;
    beforeEach(() => {
        validatorFactory = CategoryValidatorFactory.create();
    });  
    test('invalid name field scenarios', () => {
        const isValid = validatorFactory.validate(null);
        expect(isValid).toBeFalsy();
        expect(validatorFactory.errors['name']).toStrictEqual([
            'name should not be empty',
            'name must be a string',
            'name must be shorter than or equal to 255 characters'
        ]);
    });

    test('invalid description field scenarios', () => {
        const isValid = validatorFactory.validate({name: 'John Doe', description: 1});
        expect(isValid).toBeFalsy();
        expect(validatorFactory.errors['description']).toStrictEqual([
            'description must be a string',
            'description must be shorter than or equal to 255 characters'
        ]);
    });

    test('invalid isActive field scenarios', () => {
        const isValid = validatorFactory.validate({name: 'John Doe', isActive: 'foo'});
        expect(isValid).toBeFalsy();
        expect(validatorFactory.errors['isActive']).toStrictEqual([
            'isActive must be a boolean value'
        ]);
    });

    test('invalid createdAt field scenarios', () => {
        const isValid = validatorFactory.validate({name: 'John Doe', createdAt: 'foo'});
        expect(isValid).toBeFalsy();
        expect(validatorFactory.errors['createdAt']).toStrictEqual([
            'createdAt must be a Date instance'
        ]);
    });

    test('validate with no errors', () => {
        const data = {
            name: 'John Doe',
            description: 'it\'s a nice guy',
            isActive: true,
            createdAt: new Date()
        };
        const isValid = validatorFactory.validate(data);
        expect(isValid).toBeTruthy();
        expect(validatorFactory.errors).toBeNull();
        expect(validatorFactory.validatedData).toStrictEqual(new CategoryRules(data));
    });
});
