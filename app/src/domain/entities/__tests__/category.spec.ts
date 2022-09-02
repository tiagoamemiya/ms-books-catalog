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
        expect(category.id).not.toBeNull();
        expect(category.props).toStrictEqual(props);
        expect(category.toJSON()).toStrictEqual({id: category.id, ...props});
    });

    it('Should create a instance only with name successfully', () => {
        // Arrange
        const props = {name: 'test'};
        // Act
        const category = new Category(props);
        // Assert
        expect(category.createdAt).toBeInstanceOf(Date);
        expect(category.description).toBeNull();
        expect(category.isActive).toBeTruthy();
        expect(category.id).not.toBeNull();
    });

    it('Should test update whit success', () => {
        // Arrange
        const category = new Category({name: 'test'});

        //Act
        category.update('test2', 'test description');

        // Assert
        expect(category.description).not.toBeNull();
        expect(category.name).toBe('test2');        
    });

    it('Should change Activate State to success', () => {
        // Arrange
        const category = new Category({name: 'test'});

        // Act
        category.desactivate();

        // Assert
        expect(category.isActive).toBeFalsy();

        // Act
        category.activate();

        // Assert
        expect(category.isActive).toBeTruthy();

    });
});
