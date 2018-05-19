import { action, createAsyncTypes } from './index'

describe('Action helpers', () => {
  describe('action()', () => {
    it('Should create action with payload', () => {
      expect(action('TEST', { payload: 'Hello' })).toEqual({
        type: 'TEST',
        payload: 'Hello',
      })
    })
    it('Should create action without payload', () => {
      expect(action('TEST')).toEqual({ type: 'TEST' })
    })
  })

  describe('createAsyncTypes()', () => {
    it('Should create REQUEST, FAILURE, and SUCCESS types', () => {
      const TYPES = createAsyncTypes('TEST')
      const expected = {
        FAILURE: 'TEST_FAILURE',
        REQUEST: 'TEST_REQUEST',
        SUCCESS: 'TEST_SUCCESS',
      }
      expect(TYPES).toEqual(expected)
    })
  })
})
