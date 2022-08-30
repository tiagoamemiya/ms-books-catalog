import { validate } from 'uuid'
import { UniqueIdEntity } from "../unique-id-entity.vo"
import { InvalidIdEntity } from "../../errors/invalid-id-entity.error"

describe('Unique Id Entity', () => {
  const validateSpy = jest.spyOn(
    UniqueIdEntity.prototype as any,
    'validate'
  )

  it('Should create a instance successfully', () => {
    const uniqueIdEntity = new UniqueIdEntity()
    expect(validate(uniqueIdEntity.id)).toBeTruthy()
    expect(validateSpy).toHaveBeenCalled()
  })

  it('Should fail when creating a instance', () => {
    expect(() => new UniqueIdEntity('foo')).toThrow(InvalidIdEntity)
    expect(validateSpy).toHaveBeenCalled()
  })
})