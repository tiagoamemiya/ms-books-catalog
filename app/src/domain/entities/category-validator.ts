import { IsBoolean, IsDate, IsNotEmpty, IsOptional, isString, IsString, MaxLength } from 'class-validator';
import { ClassValidatorFields } from '../shared/validation/class-validator-fields';
import { CategoryProperties } from './category';

export class CategoryRules {
    @MaxLength(255)
    @IsString()  
    @IsNotEmpty()
        name: string;
    @MaxLength(255)
    @IsString()
    @IsOptional()
        description: string;
    @IsBoolean()
    @IsOptional()
        isActive: boolean;
    @IsDate()
    @IsOptional()
        createdAt: Date;

    constructor({name, description, isActive, createdAt}: CategoryProperties) {
        Object.assign(this, {name, description, isActive, createdAt});
    }
}

export class CategoryValidator extends ClassValidatorFields<CategoryRules> {
    validate(data: CategoryProperties): boolean {
        return super.validate(new CategoryRules(data ?? {} as any));
    }
}

export class CategoryValidatorFactory {
    static create(): CategoryValidator {
        return new CategoryValidator();
    }
}
