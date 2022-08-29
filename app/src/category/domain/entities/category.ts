import { UniqueIdEntity } from "../../../shared/domain/unique-id-entity.vo"

export type CategoryProperties = {
  name: string
  description?: string
  isActive?: boolean
  createdAt?: Date
}
export class Category {
  constructor(
    public readonly props: CategoryProperties,
    public readonly id?: UniqueIdEntity
  ) {
    this.id = id || new UniqueIdEntity()
  }

  get name(): string {
    return this.props.name
  }

  get description(): string {
    return this.props.description ?? null
  }

  get isActive(): boolean {
    return this.props.isActive ?? true
  }

  get createdAt(): Date {
    return this.props.createdAt ?? new Date()
  }
}