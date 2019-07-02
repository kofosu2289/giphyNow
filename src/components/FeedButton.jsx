import React from 'react';

export default (props) => {
  return (
    <button className='button' onClick={props.handleClick}>{props.name}</button>
  );
}