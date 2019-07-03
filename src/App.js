import React, { Component } from "react";


import "./css/App.css";
import Search from "./components/Search.jsx";
import Functionalities from "./components/Functionalities";
import { searchGifs, feedGifs } from "./services/api";

class App extends Component {
  constructor() {
    super();
    this.state = {
      isFeed: true,
      searchQuery: "",
      gifs: [],
      searchGifs: [],
      gifsOffset: [],
      favorites: []
    };
  }

  componentWillMount = async () => {
    await this.loadFeed();
    this.loadFavorites();
  };

  componentDidMount = () => {
    window.addEventListener("scroll", this.infiniteScroll);
  };

  componentWillUnmount = () => {
    window.removeEventListener("scroll", this.infiniteScroll);
  };

  
  handleClick = () => {
    this.setState({
      isFeed: true
    });
  };
  
  infiniteScroll = event => {
    if ((window.innerHeight + window.scrollY) < (document.body.offsetHeight - 50))
    return;
    
    this.setState({
      gifsOffset: Number(this.state.gifsOffset) + 25
    });
    this.loadFeed();
  };
  
  updateQuery = event => {
    this.setState({
      searchQuery: event.target.value
    });
  };
  
  onSearchClick = () => {
    this.setState({
      isFeed: false
    });
  };
  
  search = async event => {
    event.preventDefault();
    const response = await searchGifs(this.state.searchQuery);
    let newArray = [];
    response.forEach(gif => {
      newArray.push({
        url: gif.images.fixed_height_downsampled.url,
        id: gif.id,
        title: gif.title
      });
      this.setState({
        searchGifs: newArray
      });
    });
  };
  
  loadFeed = async () => {
  const response = await feedGifs(this.state.gifsOffset);
  response.forEach(gif => {
    this.setState(prevState => ({
        gifs: [
          ...prevState.gifs,
          {
            url: gif.images.fixed_height_downsampled.url,
            id: gif.id,
            title: gif.title
          }
        ]
      }));
    });
  };

  loadFavorites = () => {
    if (typeof Storage !== "undefined") {
      let storageFavorites = localStorage.getItem("favorites");
      if (storageFavorites === null || storageFavorites === "") return;

      this.setState({
        favorites: storageFavorites.split(",")
      });
    }
  };

  addFavorite = (event, gif) => {
    let index = this.state.favorites.indexOf(gif);
    if (index === -1) {
      let newArray = this.state.favorites.slice();
      newArray.push(gif);
      this.setState({
        favorites: newArray
      });
      localStorage.setItem("favorites", this.state.favorites);
    }
  };

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
  };

  render() {
    return (
      <section>
        <Search
          query={this.state.searchQuery}
          search={this.search}
          handleChange={this.updateQuery}
          onSearchClick={this.onSearchClick}
        />{" "}
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
