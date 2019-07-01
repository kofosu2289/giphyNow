import React, { Component } from 'react';
import { Tabs, Tab } from 'react-bootstrap';
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';

import './Functionalities.css';
import GifsContainer from './GifsContainer';

class Functionalities extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <Router>
        <div>
         <div className='tabs'>
            <Link to='/'>
              <button className='button'>Feed</button>
            </Link>

            <Link to='/Favorites'>
              <button className='button'>Favorites</button></Link>
           
          </div>
          <Switch>
            <Route path='/Favorites' render={(props) => <GifsContainer {...props} gifs={this.props.favorites} hoverMsg={"Unfavorite"} action={this.props.favoritesAction} scrollAction={this.props.scrollFavorites} />} />
            <Route render={(props) => <GifsContainer {...props} gifs={this.props.feed} hoverMsg={"Favorite"}
              action={this.props.feedAction} scrollAction={this.props.scrollFeed} />} />
        </Switch>
        
        </div>
      </Router>
    );
  }
}
     

export default Functionalities;