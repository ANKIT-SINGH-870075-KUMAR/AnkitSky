import React, { useState } from 'react';
import './Navbar.css';
import { Link } from 'react-router-dom';
import { FiAlignJustify } from "react-icons/fi";
import { ImCross } from "react-icons/im";

function Navbar() {
  const [display, SetDisplay] = useState(false)

  function showDisplay() {
    SetDisplay(!display)
  }

  function hideDisplay() {
    SetDisplay(!display)
  }

  

  const showbarStyle = {
    transition: 'transform 0.3s ease-in-out',
    transform: display ? 'translateX(0)' : 'translateX(-235px)',
  };

  return (
    <>
      <div className="navbar_container">
        <button className='btn-bar' onClick={() => { showDisplay() }}>
          <FiAlignJustify />
        </button>
        <div className='nav-left' style={showbarStyle}>
          <button className='btn-bar btn-cross' onClick={() => { hideDisplay() }}>
            <ImCross />
          </button>
          <div className='left-container'>
            <Link to="/">Home</Link>
            <Link>About</Link>
            <Link>Schedules</Link>
            <Link>Membership</Link>
            <Link>Pricing</Link>
          </div>
        </div>
        <div className='nav-right'>
          <div className='right-container'>
            <button>offers</button>
            <button>Courses</button>
          </div>
        </div>
      </div>
    </>
  )
}

export default Navbar;
