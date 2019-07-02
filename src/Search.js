import React, { Component } from 'react';
import { Navbar, FormGroup, FormControl } from 'react-bootstrap';
import FontAwesomeIcon from '@fortawesome/react-fontawesome'
import faHeart from '@fortawesome/fontawesome-free-solid/faHeart'

import './Search.css';

class Search extends Component {

  handleSearchClick = () => {
    this.props.onSearchClick();
  }

  render() {
    return (
      <Navbar className="Navbar">
        <Navbar.Header>
          <Navbar.Brand>
            <a id="pageName">giphyNow&nbsp; <FontAwesomeIcon icon={faHeart} /></a>
          </Navbar.Brand>
          <Navbar.Toggle />
        </Navbar.Header>
        <Navbar.Collapse>
          <form onSubmit={this.props.search}>
            <Navbar.Form pullRight>
              <FormGroup>
                <FormControl
                  type="text"
                  placeholder="Search"
                  value={this.props.query}
                  onChange={this.props.handleChange}
                />
              </FormGroup>
              <button className='button search-btn' type="submit" onClick={this.handleSearchClick}>Search</button>
            </Navbar.Form>
          </form>
        </Navbar.Collapse>
      </Navbar>
        );
    }
}

export default Search;
