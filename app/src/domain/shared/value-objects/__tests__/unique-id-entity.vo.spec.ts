import { validate } from 'uuid';
import { UniqueIdEntity } from '../unique-id-entity.vo';
import { InvalidIdEntity } from '../../errors/invalid-id-entity.error';

describe('Unique Id Entity', () => {
    it('Should create a instance successfully', () => {
        const uniqueIdEntity = new UniqueIdEntity();
        expect(validate(uniqueIdEntity.id)).toBeTruthy();
    });

    it('Should fail when creating a instance', () => {
        expect(() => new UniqueIdEntity('foo')).toThrow(InvalidIdEntity);
    });
});
