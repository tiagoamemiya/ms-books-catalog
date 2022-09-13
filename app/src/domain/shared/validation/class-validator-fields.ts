import { validateSync } from 'class-validator';
import { ValidatorFieldsInterface, FieldsErrors } from './validator-fields.interface';

export abstract class ClassValidatorFields<PropsValidated> 
implements ValidatorFieldsInterface<PropsValidated> {
    errors: FieldsErrors = null;
    validatedData: PropsValidated = null;
    validate(data: any): boolean {
        const errors = validateSync(data);
        if (errors.length === 0) {
            this.validatedData = data;
            return true;
        }
        
        this.errors = {};
        errors.forEach(error => {
            const field = error.property;
            this.errors[field] = Object.values(error.constraints); 
        });

        return false;
    }
}
