import React from 'react';
import { Router, Route, Switch } from 'react-router-dom';
import Login from './streams/Login';
import StreamList from './streams/StreamList';
import StreamShow from './streams/StreamShow';
import history from '../history';

const App = () => {
  return (
    <div className="ui container">
      <Router history={history}>
        <div>
          <Switch>
            <Route path="/" exact component={Login} />
            <Route path="/projects" exact component={StreamList} />
            <Route path="/streams/:id" exact component={StreamShow} />
          </Switch>
        </div>
      </Router>
    </div>
  );
};

export default App;
