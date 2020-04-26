import React from 'react';
import flv from 'flv.js';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { fetchStream } from '../../actions';

class StreamShow extends React.Component {

  componentDidMount() {
    const { id } = this.props.match.params;
    this.props.fetchStream(id);
  }

  renderList() {

      return (
        <div style={{ textAlign: 'right' }}>
          <Link to="/projects" className="ui button primary">
            Back
          </Link>
        </div>
      );

  }

  render() {
    if (!this.props.stream) {
      return <div>Loading...</div>;
    }

    const { name, readme } = this.props.stream;

    return (
      <div>
        <h1>{name}</h1>
        <h5>{readme}</h5>
        {this.renderList()}
      </div>
    );
  }
}

const mapStateToProps = (state, ownProps) => {
  return { stream: state.streams.selected_project };
};

export default connect(
  mapStateToProps,
  { fetchStream }
)(StreamShow);
