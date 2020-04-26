import {
  FETCH_STREAM,
  FETCH_STREAMS,
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
          readme: 'This block of Markdown contains <a href="https://en.wikipedia.org/wiki/HTML">HTML</a>, and will require the <code>html-parser</code> AST plugin to be loaded, in addition to setting the <code class="prop">escapeHtml</code> property to false.'
        },
        {
          id: 2,
          name: 'React 2',
          readme: 'This block of Markdown contains <a href="https://en.wikipedia.org/wiki/HTML">HTML</a>, and will require the <code>html-parser</code> AST plugin to be loaded, in addition to setting the <code class="prop">escapeHtml</code> property to false.'
        }
      ]
    },
    {
      user_id: 'user_2',
      projects: [
        {
          id: 3,
          name: 'Angular',
          readme: 'This block of Markdown contains <a href="https://en.wikipedia.org/wiki/HTML">HTML</a>, and will require the <code>html-parser</code> AST plugin to be loaded, in addition to setting the <code class="prop">escapeHtml</code> property to false.'
        },
        {
          id: 4,
          name: 'Angular 2',
          readme: 'This block of Markdown contains <a href="https://en.wikipedia.org/wiki/HTML">HTML</a>, and will require the <code>html-parser</code> AST plugin to be loaded, in addition to setting the <code class="prop">escapeHtml</code> property to false.'
        }
      ]
    },
    {
      user_id: 'user_3',
      projects: [
        {
          id: 5,
          name: 'Rails',
          readme: 'This block of Markdown contains <a href="https://en.wikipedia.org/wiki/HTML">HTML</a>, and will require the <code>html-parser</code> AST plugin to be loaded, in addition to setting the <code class="prop">escapeHtml</code> property to false.'
        },
        {
          id: 6,
          name: 'Rails 2',
          readme: 'This block of Markdown contains <a href="https://en.wikipedia.org/wiki/HTML">HTML</a>, and will require the <code>html-parser</code> AST plugin to be loaded, in addition to setting the <code class="prop">escapeHtml</code> property to false.'
        }
      ]
    }
  ]
}

function setProjects(state, username = null) {
  const projects = getKeyByValue(state.projects, username)
  return { ...state, user_projects: projects }
}

function getKeyByValue(object, username) {
  const ind = object.findIndex(p => p.user_id == username)
  if(ind === -1){
    return [];
  } else {
    return object[ind].projects;
  }
}

function setProject(state, stream_id = null) {
  debugger
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
