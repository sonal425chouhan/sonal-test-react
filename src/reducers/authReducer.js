import { SIGN_IN } from '../actions/types';

const INTIAL_STATE = {
  isSignedIn: null,
  userId: null,
  user_list: ['user_1', 'user_2', 'user_3']
};

export default (state = INTIAL_STATE, action) => {
  switch (action.type) {
    case SIGN_IN:
      return { ...state, isSignedIn: state.user_list.includes(action.payload.username), userId: action.payload.username };
    default:
      return state;
  }
};
