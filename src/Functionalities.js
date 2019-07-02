import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';
import faTimes from '@fortawesome/fontawesome-free-solid/faTimes'
import faHeart from '@fortawesome/fontawesome-free-solid/faHeart'

import './Functionalities.css';
import GifsContainer from './GifsContainer';

class Functionalities extends Component {
  
  handleClick = () => {
    this.props.handleClick();
  }

  render() {
    return (
      <Router>
        <div>
         <div className='tabs'>
            <Link to='/'>
              <button className='button'onClick={this.handleClick}>Feed</button>
            </Link>

            <Link to='/Favorites'>
              <button className='button'>Favorites</button></Link>
           
          </div>
          <Switch>
            <Route path='/Favorites' render={(props) => <GifsContainer {...props} icon={faTimes} gifs={this.props.favorites} hoverMsg={"Unfavorite"} action={this.props.favoritesAction} scrollAction={this.props.scrollFavorites} />} />
            <Route render={(props) => <GifsContainer {...props} icon={faHeart} gifs={this.props.feed} searchGifs={this.props.searchGifs} hoverMsg={"Favorite"}
              action={this.props.feedAction} scrollAction={this.props.scrollFeed} isFeed={this.props.isFeed} />} />
          </Switch>
        </div>
      </Router>
    );
  }
}
     
export default Functionalities;