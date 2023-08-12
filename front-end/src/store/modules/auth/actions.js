import * as types from '../type';

export function UserRegisterRequest() {
  return {
    type: types.RegisterRequest,
  };
}
export function UserRegisterSucces() {
  return {
    type: types.RegisterSuccess,
  };
}
export function UserRegisterFailure() {
  return {
    type: types.RegisterFailure,
  };
}
