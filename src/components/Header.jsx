import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';

function Header(){
  return (
    <div>
      <h1 className='rotate-vert-center'>Help Queue</h1>
      <Link to="/">Home</Link> | <Link to="/newticket">Create Ticket</Link>
    </div>
  );
}

export default Header;
