import "./SearchBar.css";
import React from 'react'
import { useState } from 'react';
import { useNavigate } from "react-router-dom"
const SearchBar = () => {
  const [message, setMessage] = useState('Where would you like to go?');
  const navigate = useNavigate();
  const handleKeyDown = event => {

    if (event.key === 'Enter') {
      event.preventDefault();

      onButtonClick();
    } 
  };

  const onButtonClick = () => {
    navigate("/location", {
      state: {
        location: message
    }
  });
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
