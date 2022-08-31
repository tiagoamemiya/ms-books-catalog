import { UniqueIdEntityInterface } from './unique-id-entity.interface';
import { v4 as uuid, validate as validateUuid } from 'uuid';
import { InvalidIdEntity } from '../../errors/invalid-id-entity.error';

export class UuidUniqueIdentity implements UniqueIdEntityInterface {
    validate(id: string): void {
        if(!validateUuid(id)) {
            throw new InvalidIdEntity();
        }
    }

    getUniqueId(): string {
        return uuid();
    }
}
