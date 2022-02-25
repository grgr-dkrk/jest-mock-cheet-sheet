jest.disableAutomock()
jest.mock('uuid', () => ({
  v4: () => '550e8400-e29b-41d4-a716-446655440000',
}))
import * as uuid from 'uuid'

const createNewDiary = (
  comment: string,
): {
  id: string
  comment: string
} => ({
  id: uuid.v4(),
  comment,
})

describe('createNewDiary', () => {
  it('should return diary correctly', () => {
    const newDiary = createNewDiary('hello')
    expect(newDiary).toStrictEqual({
      comment: 'hello',
      id: '550e8400-e29b-41d4-a716-446655440000',
    })
  })
  it('should return diary correctly even if jest.unmock is called', () => {
    jest.unmock('uuid')
    const newDiary = createNewDiary('hello')
    expect(newDiary).toStrictEqual({
      comment: 'hello',
      id: '550e8400-e29b-41d4-a716-446655440000',
    })
  })
})
