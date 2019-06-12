import React, { Component } from 'react';
import PropTypes from 'prop-types';

class ContentComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return <div>{this.props.showCards}</div>;
  }
}

ContentComponent.propTypes = {
  showCards: PropTypes.func.isRequired
};

export default ContentComponent;
