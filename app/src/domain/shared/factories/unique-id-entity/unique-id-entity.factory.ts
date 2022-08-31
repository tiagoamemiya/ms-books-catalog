import { UniqueIdEntityInterface } from './unique-id-entity.interface';
import { UuidUniqueIdentity } from './uuid-unique-id-entity';

export class UniqueIdEntityFactory {
    static create(): UniqueIdEntityInterface {
        return new UuidUniqueIdentity();
    }
}
