import React from 'react';
import { Navbar, FormGroup, FormControl } from 'react-bootstrap';
import FontAwesomeIcon from '@fortawesome/react-fontawesome'
import faHeart from '@fortawesome/fontawesome-free-solid/faHeart'

import SearchButton from './SearchButton';
import '../css/Search.css';

const Search = (props) => {

  const handleSearchClick = () => {
    props.onSearchClick();
  }

  return (
    <Navbar className="Navbar">
        <Navbar.Header>
          <Navbar.Brand>
            <a id="pageName">giphyNow&nbsp; <FontAwesomeIcon icon={faHeart} /></a>
          </Navbar.Brand>
          <Navbar.Toggle />
        </Navbar.Header>
        <Navbar.Collapse>
          <form onSubmit={props.search}>
            <Navbar.Form pullRight>
              <FormGroup>
                <FormControl
                  type="text"
                  placeholder="Search"
                  value={props.query}
                  onChange={props.handleChange}
                />
              </FormGroup>
              <SearchButton handleSearchClick={handleSearchClick} name='Search' />
            </Navbar.Form>
          </form>
        </Navbar.Collapse>
      </Navbar>
  );
}


export default Search;
