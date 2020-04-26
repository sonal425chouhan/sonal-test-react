import React from 'react';
import { connect } from 'react-redux';
import { signIn } from '../../actions';
import StreamForm from './StreamForm';

class Login extends React.Component {
  onSubmit = formValues => {
    this.props.signIn(formValues);
  };

  render() {
    return (
      <div>
        <h3>Login User</h3>
        <StreamForm onSubmit={this.onSubmit} />
      </div>
    );
  }
}

export default connect(
  null,
  { signIn }
)(Login);
