import {
  GET_USER_BEGIN,
  GET_USER_SUCCESS,
  GET_USER_FAILURE,
  SET_USER,
  UPDATE_USER
} from './types'
import { AsyncStorage, Alert } from 'react-native'

export const getUserBegin = () => ({
  type: GET_USER_BEGIN
})

export const getUserSuccess = (fname, lname) => ({
  type: GET_USER_SUCCESS,
  payload: { fname: fname, lname: lname }
})

export const getUserError = () => ({
  type: GET_USER_FAILURE
})

export const setUserSuccess = (fname, lname) => ({
  type: SET_USER,
  payload: { fname: fname, lname: lname }
})

export const updateUserSuccess = (fname, lname) => ({
  type: UPDATE_USER,
  payload: { fname: fname, lname: lname }
})

export function getUser () {
  return async dispatch => {
    dispatch(getUserBegin())
    return AsyncStorage.multiGet(['fname', 'lname']).then(response => {
      var fname = response[0][1]
      var lname = response[1][1]
      return dispatch(getUserSuccess(fname, lname))
    }).catch(() => {
      dispatch(getUserError())
    })
  }
}

export function updateUser (fname, lname) {
  return dispatch => {
    AsyncStorage.multiSet([['fname', fname], ['lname', lname]], (error) => {
      if (error) {
        Alert.alert('There is a error')
      } else {
        return dispatch(updateUserSuccess(fname, lname))
      }
    })
  }
}

export function setUser (fname, lname) {
  return dispatch => {
    AsyncStorage.multiSet([['fname', fname], ['lname', lname]], (error) => {
      if (error) {
        Alert.alert('There is a error')
      } else {
        return dispatch(setUserSuccess(fname, lname))
      }
    })
  }
}
