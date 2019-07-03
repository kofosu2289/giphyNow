import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';
import faTimes from '@fortawesome/fontawesome-free-solid/faTimes'
import faHeart from '@fortawesome/fontawesome-free-solid/faHeart'

import '../css/Functionalities.css';
import GifsContainer from './GifsContainer';
import FeedButton from './FeedButton';
import FavoritesButton from './FavoritesButton';

class Functionalities extends Component {
  
  handleClick = () => {
    this.props.handleClick();
  }

  render() {
    return (
      <Router>
        <div>
         <div className='tabs'>
            <Link to='/' className='tab'>
              <FeedButton handleClick={this.handleClick} name='Feed' />
            </Link>

            <Link to='/Favorites' className='tab'>
              <FavoritesButton handleClick={this.handleClick} name='Favorites' />
            </Link>
          </div>
          <Switch>
            <Route 
              exact path='/Favorites' 
              render={(props) => 
                <GifsContainer 
                  {...props} 
                  icon={faTimes} 
                  gifs={this.props.favorites} 
                  hoverMsg={"Unfavorite"} 
                  action={this.props.favoritesAction} 
                  scrollAction={this.props.scrollFavorites}
                />
              } 
            />
            <Route exact path = '/'
              render={(props) => 
                <GifsContainer 
                  {...props} 
                  icon={faHeart} 
                  gifs={this.props.feed} 
                  searchGifs={this.props.searchGifs} 
                  hoverMsg={"Favorite"}
                  action={this.props.feedAction} 
                  scrollAction={this.props.scrollFeed} 
                  isFeed={this.props.isFeed} 
                />
              } 
            />
          </Switch>
        </div>
      </Router>
    );
  }
}
     
export default Functionalities;