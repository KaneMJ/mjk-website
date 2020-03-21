import { createStore } from "redux";

// Logger with default options

import reducer from './Login/loginReducer'

export default function configureStore(initialState) {
  const store = createStore(reducer, initialState);
  return store;
}