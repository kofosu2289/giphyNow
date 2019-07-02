import React, { Component } from 'react';

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
      searchGifs: [],
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

  loadFeed = async () => {
    const response = await this.state.giphy.trending("gifs", { "offset": this.state.gifsOffset });
    response.data.forEach((gif) => {
      this.setState(prevState => ({
        gifs: [...prevState.gifs, { "url": gif.images.fixed_height_downsampled.url, "id": gif.id, "title": gif.title }]
      }));
    })

  }

  handleClick = () => {
    this.setState({
      isFeed: true
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

  onSearchClick = () => {
    this.setState({
      isFeed: false
    })
  }

  loadFavorites = () => { 
    if (typeof (Storage) !== "undefined") {
      
      let storageFavorites = localStorage.getItem("favorites");
      console.log(`storageFavorites =  ${storageFavorites}`);
      
      if (storageFavorites === null || storageFavorites === '')
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
    let newArray = [];
    response.data.forEach((gif) => {
      
      newArray.push({"url": gif.images.fixed_height_downsampled.url, "id": gif.id })
      // this.setState(prevState => ({
      //   searchGifs: [...prevState.searchGifs, { "url": gif.images.fixed_height_downsampled.url, "id": gif.id }]
      // }));
      this.setState({
        searchGifs: newArray
      })
    }) 
  }

  updateQuery = (event) => {
    this.setState({
      searchQuery: event.target.value,
    });
  }

  addFavorite = (event, gif) => {
    console.log(gif)
    let index = this.state.favorites.indexOf(gif);
    
    if (index === -1) {
      let newArray = this.state.favorites.slice();
      newArray.push(gif);
      console.log(newArray)
      this.setState({
        favorites: newArray
      })

      localStorage.setItem("favorites", this.state.favorites);
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
        <Search
          query={this.state.searchQuery}
          search={this.search}
          handleChange={this.updateQuery}
          onSearchClick={this.onSearchClick}
        />
        <Functionalities
          feed={this.state.gifs}
          searchGifs={this.state.searchGifs}
          isFeed={this.state.isFeed}
          feedAction={this.addFavorite}
          favorites={this.state.favorites}
          favoritesAction={this.removeFavorite}
          handleClick={this.handleClick}
        />
      </section>
    );
  }
}

export default App;
