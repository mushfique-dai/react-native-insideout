import { GET_USER_BEGIN, GET_USER_SUCCESS, GET_USER_FAILURE, SET_USER, UPDATE_USER } from '../actions/types'

const initialState = {
  user: [],
  lang: 'en',
  loading: false,
  authkey: null
}
export default (state = initialState, action) => {
  switch (action.type) {
    case GET_USER_BEGIN:
      return {
        ...state,
        loading: true
      }

    case GET_USER_SUCCESS:
      var getuser = { fname: action.payload.fname, lname: action.payload.lname }
      return {
        ...state,
        user: getuser,
        loading: false
      }

    case GET_USER_FAILURE:
      return {
        ...state,
        user: action.payload,
        loading: false
      }

    case SET_USER:
      var setuser = { fname: action.payload.fname, lname: action.payload.lname }
      return {
        ...state,
        user: setuser,
        loading: false
      }

    case UPDATE_USER:
      var updateuser = { fname: action.payload.fname, lname: action.payload.lname }
      return {
        ...state,
        user: updateuser,
        loading: false
      }

    default:
      return state
  }
}
