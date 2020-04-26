import history from '../history';
import {
  SIGN_IN,
  FETCH_STREAMS,
  FETCH_STREAM,
} from './types';

export const signIn = formValues => async (dispatch, getState) => {
  dispatch({ type: SIGN_IN, payload:  { ...formValues} });
  history.push('/projects');
};

export const fetchStreams = (user_id) => async dispatch => {
  dispatch({ type: FETCH_STREAMS, payload: {username: user_id}});
};

export const fetchStream = id => async dispatch => {
  dispatch({ type: FETCH_STREAM, payload: {stream_id: id}});
};
