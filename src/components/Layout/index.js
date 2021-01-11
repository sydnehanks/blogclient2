import React from 'react'
import Sidebar from '../Sidbar';
import style from './style.css';
/**
* @author
* @function Layout
**/

const Layout = (props) => {
  return(
    <div className="container">
      {props.children}
      <Sidebar/>


    </div>
   
   )

 }

export default Layout