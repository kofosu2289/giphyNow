import React, { Component } from 'react';
import { PageHeader } from 'react-bootstrap';
import './App.css';

import Search from './Search';
import Functionalities from './Functionalities';

const GphApiClient = require('giphy-js-sdk-core')

class App extends Component {
  constructor() {
    super();
    this.state = {
      isFeed: true,
      giphy: GphApiClient("8XADJBZWvzB75qIDyCpfWLbnE5otD7wG"),
      searchQuery: "",
      gifs: [],
      searchgifs: [],
      gifsOffset: [],
      favorites: [],
    };
  }

  componentWillMount = async () => {
    await this.loadFeed();
    this.loadFavorites();
  }

  componentDidMount = () => {
    window.addEventListener('scroll', this.infiniteScroll);
  }

  componentWillUnmount = () => {
    window.removeEventListener('scroll', this.infiniteScroll);
  }

  test1 = () => {
    console.log('A');
  }

  test2 = () => {
    console.log('B');
  }
  loadFeed = async () => {
    const response = await this.state.giphy.trending("gifs", { "offset": this.state.gifsOffset });
    response.data.forEach((gif) => {
      this.setState(prevState => ({
        gifs: [...prevState.gifs, { "url": gif.images.fixed_height_downsampled.url, "id": gif.id }]
      }));
    })

  }

  infiniteScroll = (event) => {
    if ((window.innerHeight + window.scrollY) < document.body.offsetHeight && !this.state.isLoading)
      return;
    
    this.setState({
      gifsOffset: Number(this.state.gifsOffset) + 25
    });
    this.loadFeed();
  }

  loadFavorites = () => { 
    if (typeof (Storage) !== "undefined") {
      let storageFavorites = localStorage.getItem("favorites");
      if (storageFavorites === null )
          return;

      this.setState({
        favorites: storageFavorites.split(","),
      });
    } else {
      // Sorry! No Web Storage support..
    }
  }

  search = async (event) => {
    event.preventDefault();
    const response = await this.state.giphy.search('gifs', { "q": this.state.searchQuery })
    response.data.forEach((gif) => {
      this.setState(prevState => ({
        searchGifs: [...prevState.gifs, { "url": gif.images.fixed_height_downsampled.url, "id": gif.id }]
      }));
    }) 
  }

  updateQuery = (event) => {
    this.setState({
      searchQuery: event.target.value,
    });
  }

  addFavorite = (event, gif) => {
    let index = this.state.favorites.indexOf(gif);
    if (index === -1) {
      let newArray = this.state.favorites.slice();
      newArray.push(gif);
    
      this.setState({
        favorites: newArray
      });

      localStorage.setItem("favorites", newArray);
    }
  }

  removeFavorite = (event, gif) => {
    let index = this.state.favorites.indexOf(gif);
    if (index > -1) {
      let newArray = this.state.favorites.slice();
      newArray.splice(index, 1);
      this.setState({
        favorites: newArray
      });

      localStorage.setItem("favorites", newArray);
    }
  }

  render() {
    return (
      <section>
        <PageHeader>
          giphyNow
        </PageHeader>
        <Search
          query={this.state.searchQuery}
          search={this.search}
          handleChange={this.updateQuery}
        />
        <Functionalities
          feed={this.state.gifs}
          feedAction={this.addFavorite}
          favorites={this.state.favorites}
          favoritesAction={this.removeFavorite}
          handleFeedClick={this.handleFeedClick}
          scrollFeed={this.test1}
          scrollFavorites={this.test2}
        />
      </section>
    );
  }
}

export default App;
