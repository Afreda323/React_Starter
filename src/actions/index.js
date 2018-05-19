const ASYNC_TYPES = ['REQUEST', 'SUCCESS', 'FAILURE']

/**
 * Create an action
 * @param {String} type
 * @param {Object} payload
 */
export const action = (type, payload = {}) => ({ type, ...payload })

/**
 * Create types for async actions.
 * 'REQUEST', 'SUCCESS', 'FAILURE'
 * @param {String} typeString
 */
export const createAsyncTypes = typeString =>
  ASYNC_TYPES.reduce((acc, curr) => {
    acc[curr] = `${typeString}_${curr}`
    return acc
  }, {})
