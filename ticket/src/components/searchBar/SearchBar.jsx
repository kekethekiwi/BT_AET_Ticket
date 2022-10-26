import "./SearchBar.css";
import React from 'react'
import { useState } from 'react';

const SearchBar = () => {
  const [message, setMessage] = useState(' ');

  const handleKeyDown = event => {

    if (event.key === 'Enter') {
      event.preventDefault();

      // 👇️ access input value from state
      console.log(message);
    } 
  };

  return (
    <div class="input-group"> 
      <input type="search" id="form1" class="form-control" placeholder={message} 
      onChange={event => setMessage(event.target.value)} 
      onKeyDown={handleKeyDown} required /> 
 
      </div>
  )
}

export default SearchBar
