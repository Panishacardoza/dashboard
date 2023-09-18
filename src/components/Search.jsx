import React from "react";
import "../styles/Search.css";
import NotificationLogo from "../assets/Notification.svg";
const Search = () => {
  return (
    <>
      <div className='search-bar'>
        <input className='search' type='text' placeholder='Search' id='#' />
        <img src={NotificationLogo} alt='' />
      </div>
    </>
  );
};

export default Search;
