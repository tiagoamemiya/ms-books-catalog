import { InvalidIdEntity } from '../errors/invalid-id-entity.error';
import { v4 as uuid, validate } from 'uuid';

export class UniqueIdEntity {
    constructor(public readonly id? : string) {
        this.id = id || uuid();
        this.validate();
    }

    private validate() {
        if(!validate(this.id)) {
            throw new InvalidIdEntity();
        }
    }
}
