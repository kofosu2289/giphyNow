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
      <figure key={gif.id} className="effect-sarah">
        <span>
          <img onClick={((event) => this.props.action(event, gif))} src={gif.url} alt="A gif" />
        </span>
        <figcaption>
          <h2>{this.props.hoverMsg}</h2>
        </figcaption>
      </figure>
    );

    return (
      <div className="grid">
        {gifs}
      </div>
      
    );
  }
}

export default GifsContainer;