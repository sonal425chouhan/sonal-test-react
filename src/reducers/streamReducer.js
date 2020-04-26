import _ from 'lodash';
import {
  FETCH_STREAM,
  FETCH_STREAMS,
  CREATE_STREAM,
  EDIT_STREAM,
  DELETE_STREAM
} from '../actions/types';

const initialState = {
  user_projects: [],
  selected_project: null,
  projects: [
    {
      user_id: 'user_1',
      projects: [
        {
          id: 1,
          name: 'React',
          readme: 'My First React Project'
        },
        {
          id: 2,
          name: 'React 2',
          readme: 'My Second React Project'
        }
      ]
    },
    {
      user_id: 'user_2',
      projects: [
        {
          id: 3,
          name: 'Angular',
          readme: 'My First Angular Project'
        },
        {
          id: 4,
          name: 'Angular 2',
          readme: 'My Second Angular Project'
        }
      ]
    },
    {
      user_id: 'user_3',
      projects: [
        {
          id: 5,
          name: 'Rails',
          readme: 'My First Rails Project'
        },
        {
          id: 6,
          name: 'Rails 2',
          readme: 'My Second Rails Project'
        }
      ]
    }
  ]
}

function setProjects(state, username = null) {
  const projects = getKeyByValue(state.projects, username)
  state.user_projects = projects
  return state;
}

function getKeyByValue(object, username) {
  const ind = object.findIndex(p => p.user_id == username)
  return object[ind].projects;
}

function setProject(state, stream_id = null) {
  const project = state.user_projects.findIndex(p => p.id == stream_id)
  return { ...state, selected_project: state.user_projects[project] }
}

export default (state = initialState, action) => {
  switch (action.type) {
    case FETCH_STREAMS:
      return setProjects(state, action.payload.username);
    case FETCH_STREAM:
      return setProject(state, action.payload.stream_id);
    default:
      return state;
  }
};
