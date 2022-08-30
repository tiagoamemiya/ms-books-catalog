import { UniqueIdEntity } from '../../shared/value-objects/unique-id-entity.vo';
import { Category } from '../category';

describe('Category Unit Test Entity', () => {
    it('Should create a instance successfully', () => {
    // Arrange
        const createdAt = new Date();
        const props = {
            name: 'test',
            description: 'test',
            createdAt,
            isActive: true
        };

        // Act
        const category = new Category(props);

        // Assert
        expect(category.name).toBe('test');
        expect(category.description).toBe('test');
        expect(category.isActive).toBeTruthy();
        expect(category.createdAt).toBe(createdAt);
        expect(category.id).toBeInstanceOf(UniqueIdEntity);
        expect(category.props).toStrictEqual({
            name: 'test',
            description: 'test',
            createdAt,
            isActive: true 
        });
    });

    it('Should create a instance only with name successfully', () => {
    // Arrange
        const props = {name: 'test'};
        // Act
        const category = new Category(props, new UniqueIdEntity());
        // Assert
        expect(category.createdAt).toBeInstanceOf(Date);
        expect(category.description).toBeNull();
        expect(category.isActive).toBeTruthy();
        expect(category.id).toBeInstanceOf(UniqueIdEntity);
    });
});
