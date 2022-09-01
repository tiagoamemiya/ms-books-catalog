import { UniqueIdEntity } from '../value-objects/unique-id-entity.vo';

export abstract class Entity<Props> {
    public readonly uniqueIdEntity: UniqueIdEntity;

    constructor(public readonly props: Props, id?: UniqueIdEntity) {
        this.uniqueIdEntity = id || new UniqueIdEntity();
    }

    get id(): string {
        return this.uniqueIdEntity.id;
    }

    toJSON(): Required<{id: string} & Props> {
        return {
            id: this.id,
            ...this.props,
        } as Required<{id: string} & Props>;
    }
}
