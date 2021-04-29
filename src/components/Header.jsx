import React from 'react'
import {Link} from 'react-router-dom';

const Header = () => {
  return (
    
    <div className="header">
      <h1>
        <Link to="/">ENGLISH WORDS</Link>
      </h1>
      <div className="menu">
        <Link to="/create_word" className="link">ADD WORD</Link>
        <Link to="/create_day" className="link">ADD DAY</Link>
      </div>
    </div>
  )
}

export default Header
