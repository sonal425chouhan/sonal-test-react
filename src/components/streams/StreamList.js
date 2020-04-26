import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { Redirect } from 'react-router-dom';
import { fetchStreams } from '../../actions';

class StreamList extends React.Component {
  componentDidMount() {
    this.props.fetchStreams(this.props.currentUserId);
  }

  renderList() {
    return this.props.streams.map(stream => {
      return (
        <div className="item" key={stream.id}>
          <i className="large middle aligned icon camera" />
          <div className="content">
            <Link to={`/streams/${stream.id}`} className="header">
              {stream.name}
            </Link>
            <div className="description">{stream.readme}</div>
          </div>
        </div>
      );
    });
  }

  render() {
    if (this.props.isSignedIn) {
      return (
        <div>
          <h2>Streams</h2>
          <div className="ui celled list">{this.renderList()}</div>
        </div>

      );
    } else {
      return (
        <Redirect to={{
              pathname: '/',
              state: 'Please insert valid username'
            }}  />
      )
    }

  }
}

const mapStateToProps = state => {
  return {
    streams: state.streams.user_projects,
    currentUserId: state.auth.userId,
    isSignedIn: state.auth.isSignedIn
  };
};

export default connect(
  mapStateToProps,
  { fetchStreams }
)(StreamList);
