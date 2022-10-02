import * as types from "./contentTypes";

let initialState = {
  contentList: {},
};
const contentReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.ADD:
      return {
        ...state,
        contentList: action.payload,
      };
      case types.GET:
      return {
        ...state,
        contentList: action.payload,
      };
    default: {
      return state;
    }
  }
};

export default contentReducer;
