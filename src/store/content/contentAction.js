import * as types from './contentTypes';

export const getContent = (payload) => {
  return {
  type: types.GET, 
  payload
  };
};
export const addContent = (payload) => {
  return {
  type: types.ADD, 
  payload
  };
};