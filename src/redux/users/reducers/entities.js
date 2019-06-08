import { SET_USER, SET_USERS, SET_USER_ONLINE, SET_USER_OFFLINE } from '../action'
import arrayToObject from 'utils/arrayToObject'

const usersReducer = (state = {}, { type, payload }) => {
  switch (type) {

    case SET_USER:
      return {
        ...state,
        [payload.id]: {
          ...payload,
          pivot: payload?.pivot || state[payload.id]?.pivot,
        },
      }

    case SET_USERS:
      return {
        ...state,
        ...arrayToObject(payload),
      }

    case SET_USER_ONLINE:
      return {
        ...state,
        [payload]: {
          ...state[payload],
          pivot: {
            ...state[payload]?.pivot,
            is_online: true,
          },
        },
      }

    case SET_USER_OFFLINE:
      return {
        ...state,
        [payload]: {
          ...state[payload],
          pivot: {
            ...state[payload]?.pivot,
            is_online: false,
          },
        },
      }

    default:
      return state
  }
}

export default usersReducer
