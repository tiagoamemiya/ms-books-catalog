import { Entity } from '../shared/entities/entity';
import { CategoryValidatorFactory } from './category-validator';

export type CategoryProperties = {
  name: string
  description?: string
  isActive?: boolean
  createdAt?: Date
}
export class Category extends Entity<CategoryProperties> {
    constructor(public readonly props: CategoryProperties) {
        super(props);
    }

    get name(): string {
        return this.props.name;
    }

    private set name(value: string) {
        this.props.name = value;
    }
      
    get description(): string {
        return this.props.description ?? null;
    }

    private set description(value: string) {
        this.props.description = value;
    }

    get isActive(): boolean {
        return this.props.isActive ?? true;
    }

    get createdAt(): Date {
        return this.props.createdAt ?? new Date();
    }

    update(name: string, description: string): void {
        this.name = name;
        this.description = description;
    }

    activate(): void {
        this.props.isActive = true;
    }

    desactivate(): void {
        this.props.isActive = false;
    }

    static validate(props: CategoryProperties): void {
        const validator = CategoryValidatorFactory.create();
        validator.validate(props);
    }

}
