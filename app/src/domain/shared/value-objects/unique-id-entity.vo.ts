import { UniqueIdEntityFactory } from '../factories/unique-id-entity/unique-id-entity.factory';
export class UniqueIdEntity {
    constructor(public readonly id? : string) {
        const uniqueIdFactory = UniqueIdEntityFactory.create();
        this.id = id || uniqueIdFactory.getUniqueId();
        uniqueIdFactory.validate(this.id);
    }
}
