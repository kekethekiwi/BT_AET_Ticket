import React from 'react';
import Navbar from '../../components/navbar/Navbar'
import SearchBar from '../../components/searchBar/SearchBar'
import './Homepage.css'
import main_pic from "../../assets/main_pic.svg"
const Homepage = () => {
  return (
    <div class = "container-fluid">
      
       <div class = "row">
        <Navbar/>
        <SearchBar/>
       </div>
      
        <div class = "row">
        <img src={main_pic}></img>
        </div>
       
      
    </div>

  )
}


export default Homepage