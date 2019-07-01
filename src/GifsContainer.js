import React, { Component } from 'react';
import { Panel } from 'react-bootstrap';

class GifsContainer extends Component {
  constructor(props) {
    super(props);
  }

  shouldComponentUpdate(nextProps) {
    return this.props !== nextProps;
  }

  render() {
    const gifs = this.props.gifs.map((gif, i) =>
      <img
        key={gif.id}
        onClick={((event) => this.props.action(event, gif))}
        src={gif.url}
        alt={i}
      />
    );

    return (
      <div>
        {gifs}
      </div>
      
    );
  }
}

export default GifsContainer;