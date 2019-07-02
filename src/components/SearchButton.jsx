import React from 'react';

export default (props) => {
  return (
    <button className='button search-btn' type="submit" onClick={props.handleSearchClick}>{props.name}</button>
  );
}