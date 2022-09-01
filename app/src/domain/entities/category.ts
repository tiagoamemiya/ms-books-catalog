import { Entity } from '../shared/entities/entity';
import { UniqueIdEntity } from '../shared/value-objects/unique-id-entity.vo';

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

    get description(): string {
        return this.props.description ?? null;
    }

    get isActive(): boolean {
        return this.props.isActive ?? true;
    }

    get createdAt(): Date {
        return this.props.createdAt ?? new Date();
    }
}
