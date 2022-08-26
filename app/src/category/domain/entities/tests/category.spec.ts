import { Category } from "../category"

describe('Category Unit Test Entity', () => {
  it('Should create a instance', () => {
    const category = new Category('test')
    expect(category.name).toBe('test')
  })
})