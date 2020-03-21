import ACTIONS from "./loginActions";

const defaultState = {
  user: ""
};

const loginReducer = (state = defaultState, action) => {
  switch (action.type) {
    case ACTIONS.Types.LOGIN_USER:
      return Object.assign({}, state, {
        user: action.payload
      });
    case ACTIONS.Types.LOGOUT_USER:
      return Object.assign({}, state, {
        user: ''
      });
    default:
      return state;
  }
};

export default loginReducer;