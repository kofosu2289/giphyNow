import React, { Component } from 'react';
import FontAwesomeIcon from '@fortawesome/react-fontawesome'

import './GifsContainer.css';

class GifsContainer extends Component {
  constructor(props) {
    super(props);
  }



  shouldComponentUpdate(nextProps) {
    return this.props !== nextProps;
  }

  componentDidMount = () => {
    window.addEventListener('scroll', this.props.scrollAction);
  }

  componentWillUnmount = () => {
    window.removeEventListener('scroll', this.props.scrollAction);
  }

  decideDisplay = () => {
    if (this.props.isFeed === true) {
      return (
        this.props.gifs.map((gif) =>
          <figure key={gif.id} className="effect-sarah"onClick={((event) =>  this.props.action(event, gif.url) )}>
            <span>
              <img  src={gif.url} alt="A gif" />
            </span>
            <figcaption>
              <h2><FontAwesomeIcon icon={this.props.icon} /></h2>
            </figcaption>
          </figure>
        )
      );
    } else if(this.props.isFeed === false) {
      return (
        this.props.searchGifs.map((gif) =>
          <figure key={gif.id} className="effect-sarah" onClick={((event) => this.props.action(event, gif.url))}>
            <span>
              <img  src={gif.url} alt="A gif" />
            </span>
            <figcaption>
              <h2><FontAwesomeIcon icon={this.props.icon} /></h2>
            </figcaption>
          </figure>
        )
      );
    } else {
      return (
        this.props.gifs.map((gif) =>
          
          <figure key={gif.id} className="effect-sarah" onClick={((event) => this.props.action(event, gif))}>
            {console.log(gif)}
            <span>
              <img  src={gif} alt="A gif" />
            </span>
            <figcaption>
              <h2><FontAwesomeIcon icon={this.props.icon} /></h2>
            </figcaption>
          </figure>
        )
      );
    }
    
  }

  render() {
    
    const gifs = this.decideDisplay();
    
    

    return (
      <div className="grid">
        {gifs}
      </div>
      
    );
  }
}

export default GifsContainer;