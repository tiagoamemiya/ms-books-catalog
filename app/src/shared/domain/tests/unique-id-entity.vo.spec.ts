import { UniqueIdEntity } from "../unique-id-entity.vo"
import { validate } from 'uuid'
import { InvalidIdEntity } from "../../errors/invalid-id-entity.error"

describe('Unique Id Entity', () => {
  it('Should create a instance successfully', () => {
    const uniqueIdEntity = new UniqueIdEntity()
    expect(uniqueIdEntity.id).not.toBeNull()
  })

  it('Should fail when creating a instance', () => {
    try {
      const uniqueIdEntity = new UniqueIdEntity('foo')
    } catch (error) {
      expect(error).toBeInstanceOf(InvalidIdEntity)
    }

  })
})