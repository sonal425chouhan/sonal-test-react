import React from 'react';
import { connect } from 'react-redux';
import { signIn } from '../../actions';
import StreamForm from './StreamForm';

class Login extends React.Component {

  onSubmit = formValues => {
    this.props.signIn(formValues);
  };

  renderError(error_message) {
    if (error_message) {
      return (
        <div className="ui error message">
          <div className="header">{error_message}</div>
        </div>
      );
    }
  }

  render() {
    return (
      <div>
        { this.renderError(this.props.location.state) }
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
