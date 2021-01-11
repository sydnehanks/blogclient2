import React, {useState}from 'react';
import {NavLink}from 'react-router-dom';
import './style.css';
import Card from '../UI/Card';
/**
* @author
* @function Navbar
**/


const Navbar = (props) => {
const [search,setSearch]=useState(false);

const submitSearch=(e)=>{
  e.preventDefault();
  alert('searched');
}

const openSearch=()=> {
  setSearch(true);
}

const searchClass =search?'searchinput active':'searchinput';
  

return(
    <div className="navbar">
      <ul className="navbarMenu">
        <li><NavLink to="/">Home</NavLink></li>
        <li><NavLink to="/about">About</NavLink></li>
        <li><NavLink to="/post/1">Posts</NavLink></li>
        <li><NavLink to="contact">Contact</NavLink></li>
      </ul>
      <div className="search">
        <form onSubmit={submitSearch}>
          <input type="text" className={searchClass} placeholder="Search"/>
          <img onClick={openSearch} className="searchicon" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAACzUlEQVRIS7XVP0wTURgA8O97d0dBEMTRP4Mao4uGRYHEP5Nx04Vo4mLA2LTX9gBTQdrDpnJttFYD13IlDICTBuLCBpOD0RI3FqKJcTBxVaRioXfvMyXWAL02bYM3fve993vf++7eQ7B53H2h48itHgS4YgE/DRyagME6I1gBZIsCwXQioX22G7s7htsDshxqItGKEUAXA5xmHObX920sT8ViGVkONWIdP0McrgGaPUTCazSFAcMIZ8pB/wBXf/AwmXxBQCFdxwT/6Gj4R6mBTudgi1gvPgeO5xkIV5PJ8LdSuVtAz8DA/oasI03AXxh6JFZJ6fkct6IOIYdbwIXOUpVsAbISTBGAmNIjdyudvJDnUdQpDpBN6ZpsNxbzDSVupXk2d3Jy8slqtUBfX+hAllufJIJOu8ajrKgaAEqGPjJY7eSFfHevGkOCTUPX1KKvyKOoSwTUb+iRd7UCshK8gIDPxnWtvQhwKYHVzXrzyFQstlYr4POFmnOY+zqhR1uKAFlRTUPXJACgWgEAQJc3YE4ko4JtBRJJRxOJ8M9agbIVuL2BNDL0G3rkba1AvgfEKZ5KRjvstugRADYY+sj92oHhpwD029C1h0WA16seMxksYc48lUo9/l4t4nY/aCVJ/ChyaE8mtS+2h51HUZMWUuPEWKS7SgBlnzqDCKvjuqbY/sn5oN/vb8xsSu8FZK/GxyLRChF0eQKzwLCtybHRFo/Hf5UE8i+83tAhDtYCMvggMeFeudP0Tn/ooMOyxjhRByC2igy6kqPam7LA1qG37T5AhBkkmhdIXE4kwmtO52Cz4Kg7i0DXAfhtRPayoS47lDXrz5kcZkUGN+yQHRdOYQU+n3rCQujedaNlkMMKMrbIOExvb6jbN3yZkObsEFugwh7sSCuF7BmQ1/IIMnOWoXCzsF17CuQRT2/wEgGfKyB7DuxG/gvwd7suIsLkH0QZNuxYEjdoAAAAAElFTkSuQmCC"/>
       </form> 
       </div>
    </div>
   )

 }

export default Navbar